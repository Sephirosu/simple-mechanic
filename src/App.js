import { useState } from "react";
import "./App.css";

const cinjenice = [
  {
    naslov: "1+1",
    odgovor: "two",
  },
  {
    naslov: "Best game ever",
    odgovor: "FFVII",
  },
  { naslov: "Biggest shitcoin", odgovor: "pepe" },
];

export default function App() {
  return (
    <div>
      <Kviz data={cinjenice} />
    </div>
  );
}

const Kviz = ({ data }) => {
  return (
    <div>
      {data.map((el, i) => (
        <Items naslov={el.naslov} odgovor={el.odgovor} broj={i} />
      ))}
    </div>
  );
};

const Items = ({ naslov, odgovor, broj }) => {
  const [isOpen, setIsOpen] = useState(false);

  const akcija = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="pointer" onClick={akcija}>
      <h3>{broj < 9 ? `0${broj + 1}` : broj + 1}</h3>
      <h1>{naslov}</h1>
      {isOpen && <h2 className={isOpen ? "boja" : ""}>{odgovor}</h2>}
    </div>
  );
};
