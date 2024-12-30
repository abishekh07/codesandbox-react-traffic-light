import { useEffect, useState } from "react";
import "./styles.css";

const signals = [
  {
    color: "green",
    delay: 3,
  },
  {
    color: "yellow",
    delay: 1,
  },
  {
    color: "red",
    delay: 4,
  },
];

export default function App() {
  const [status, setStatus] = useState(0);
  const { color, delay } = signals[status];

  let nextStatus = status === 2 ? 0 : status + 1;
  let id;

  useEffect(() => {
    id = setTimeout(() => {
      setStatus(nextStatus);
    }, delay * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [status]);

  return (
    <div className="App">
      <h1>Traffic Light Signal</h1>

      <TrafficLight color={color} />
    </div>
  );
}

function TrafficLight({ color }) {
  return (
    <div className="traffic-light">
      <Signal bgColor={color === "red" ? "red" : ""} />
      <Signal bgColor={color === "yellow" ? "yellow" : ""} />
      <Signal bgColor={color === "green" ? "green" : ""} />
    </div>
  );
}

function Signal({ bgColor }) {
  return <div className={`signal ${bgColor}`}></div>;
}
