import cane from "./Images/cane.svg";
import labels from "./Images/Labels.jpg";
import { fruits } from "./ImagesList";

export default function App() {
  return (
    <>
      <header>
        <h2 className="logo">Fruity</h2>
      </header>
      <main>
        <div>
          <Button type="left" />
          <Button type="right" />
        </div>

        <Text text="Pear" />

        <div className="section-container-main">
          <Fruits fruits={["pear", "apple", "exotic"]} />
        </div>
      </main>
    </>
  );
}

function Button({ type }) {
  return (
    <button id={`${type === "right" ? "next" : "prev"}Button`} className="wave">
      <i className={`fa-solid fa-chevron-${type}`}></i>
    </button>
  );
}

function Text({ text }) {
  return (
    <div className="text">
      <h1 className="h1">{text}</h1>
      <div className="cane-image">
        <img src={cane} alt="Cane" />
        <img src={labels} alt="Cane" className="cane-labels" />
      </div>
    </div>
  );
}

function Fruits({ fruits }) {
  return (
    <div className="section-container">
      {fruits.map((fruit, index) => (
        <Fruit fruit={fruit} secNo={index + 1} key={fruit + (index + 1) + ""} />
      ))}
    </div>
  );
}

function Fruit({ secNo, fruit }) {
  return (
    <section className="section" id={`section${secNo}`}>
      <Images fruit={fruit} />
    </section>
  );
}

function Images({ fruit }) {
  return (
    <div className="fruit-images">
      {Array.from(["one", "two", "three", "four"]).map((number) => (
        <Image number={number} fruit={fruit} key={fruit + number} />
      ))}
    </div>
  );
}

function Image({ number, fruit }) {
  return (
    <div className={`image-${number} fruit-image`}>
      <img
        src={fruits[fruit][number]}
        alt={fruit + "-image"}
      />
    </div>
  );
}
