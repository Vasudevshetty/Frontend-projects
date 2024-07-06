import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, firestore } from "../firebaseConfig";

function App() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  function handleImageChange(e) {
    if (e.target.files[0]) setImage(e.target.files[0]);
  }

  async function handleUpload() {
    if (!image) return;
    const storageRef = ref(storage, `images/${image.name}`);
    try {
      await uploadBytes(storageRef, image);

      const url = await getDownloadURL(storageRef);
      setImageUrl(url);

      const docRef = await addDoc(collection(firestore, "images"), {
        name: image.name,
        url: url,
      });

      console.log("Doccument written with id ", docRef.id);

      alert("image uploaded succesffully");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  }

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Image Upload</button>
      {imageUrl && (
        <div>
          <h3>Uploaded iamge:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
          <a href={imageUrl} download>
            {" "}
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
