import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isCounterRunning, setIsCounterRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCounter = () => {
    if (!isCounterRunning) {
      setIsCounterRunning(true);
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  };
  const stopCounter = () => {
    if (isCounterRunning) {
      setIsCounterRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };
  const resetCounter = () => {
    stopCounter();
    setCounter(0);
  };
  const resumeCounter = () => {
    startCounter();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Counter</h1>
      <br />
      {counter}
      <div className="">
        <button
          className="p-3 px-4 rounded-xl bg-green-500 m-2 text-white"
          onClick={startCounter}
          disabled={isCounterRunning}
        >
          Start
        </button>
        <button
          className="p-3 px-4 rounded-xl bg-red-500 m-2 text-white"
          onClick={stopCounter}
          disabled={!isCounterRunning}
        >
          Pause
        </button>
        <button
          className="p-3 px-4 rounded-xl bg-blue-500 m-2 text-white"
          onClick={resumeCounter}
          disabled={!isCounterRunning}
        >
          Resume
        </button>
        <button
          className="p-3 px-4 rounded-xl bg-gray-500 m-2 text-white"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
