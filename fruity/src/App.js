import { useEffect, useState } from "react";
import cane from "./Images/cane.svg";
import labels from "./Images/Labels.jpg";
import { fruits } from "./ImagesList";
import gsap from "gsap";

export default function App() {
  const [fruit, setFruit] = useState("pear");
  const [text, setText] = useState("pear");

  useEffect(() => {
    gsap.from(".fruit-image", { y: "0px", delay: 0.5 });
    gsap.to(".fruit-image img", {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      zIndex: 22,
      duration: 2,
      ease: "none",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  function handlePrev() {
    if (fruit === "exotic") setFruit("apple");
    else if (fruit === "apple") setFruit("pear");

    gsap.from(".fruit-image", { y: "100vh", delay: 0.5 });
    gsap.to(".logo", { duration: 1 });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
  }
  function handleNext() {
    if (fruit === "pear") setFruit("apple");
    else if (fruit === "apple") setFruit("exotic");

    gsap.from(".fruit-image", { y: "-100vh", delay: 0.4, duration: 0.4 });
    gsap.to(".logo", { opacity: 1, duration: 1 });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
  }

  useEffect(() => {
    function fruitSelection() {
      setText(fruit.at(0).toUpperCase() + fruit.slice(1));
    }
    fruitSelection();
  }, [fruit]);

  return (
    <>
      <header>
        <h2 className="logo" style={{ color: `var(--${fruit}-logo)` }}>
          Fruity
        </h2>
      </header>
      <main>
        <div>
          {fruit !== "pear" && (
            <Button
              type="left"
              handler={handlePrev}
              fruit={
                fruit === "apple" ? "pear" : fruit === "exotic" ? "apple" : ""
              }
            />
          )}
          {fruit !== "exotic" && (
            <Button
              type="right"
              handler={handleNext}
              fruit={
                fruit === "pear" ? "apple" : fruit === "apple" ? "exotic" : ""
              }
            />
          )}
        </div>

        <Text text={text} fruit={fruit} />

        <div className="section-container-main">
          {/* <section className="section-container">
            <Fruit fruit={fruit} />
          </section> */}
          <Fruits fruits={["pear", "apple", "exotic"]} fruit={fruit} />
        </div>
      </main>
    </>
  );
}

function Button({ type, handler, fruit }) {
  return (
    <button
      id={`${type === "right" ? "next" : "prev"}Button`}
      className="wave"
      onClick={handler}
      style={{
        color: `var(--${fruit}-logo)`,
        animationName: `wave-${fruit}-effect`,
      }}
    >
      <i className={`fa-solid fa-chevron-${type}`}></i>
    </button>
  );
}

function Text({ text, fruit }) {
  return (
    <div className="text">
      <h1 className="h1">{text}</h1>
      <div className="cane-image">
        <img src={cane} alt="Cane" />
        <img
          src={labels}
          alt="Cane"
          className="cane-labels"
          style={{
            left:
              fruit === "pear" ? "0%" : fruit === "apple" ? "-100%" : "-200%",
          }}
        />
      </div>
    </div>
  );
}

function Fruits({ fruits, fruit }) {
  return (
    <div
      className="section-container"
      style={{
        left: fruit === "pear" ? "0" : fruit === "apple" ? "-100%" : "-200%",
      }}
    >
      {fruits.map((fruit, index) => (
        <Fruit fruit={fruit} secNo={index + 1} key={fruit + (index + 1) + ""} />
      ))}
    </div>
  );
}

function Fruit({ secNo, fruit }) {
  return (
    <section
      className="section"
      id={`section${secNo}`}
      style={{ background: `var(--${fruit}-background)` }}
    >
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
      <img src={fruits[fruit][number]} alt={fruit + "-image"} />
    </div>
  );
}
