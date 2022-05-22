import { useState, useEffect } from "react";

function App() {
  const [currentNum, setCurrentNum] = useState("" + 0);
  const [prevNum, setPrevNum] = useState(0);
  const [operatorState, setOperatorState] = useState("");
  const [result, setResult] = useState(0);

  const addFunction = () => {
    setOperatorState("add");
    setPrevNum(prevNum + +currentNum);
    setCurrentNum("" + 0);
  };

  const subFunction = () => {
    setOperatorState("sub");
    if (prevNum === 0) setPrevNum(+currentNum);
    else setPrevNum(prevNum - +currentNum);
    setCurrentNum("" + 0);
  };

  const divideFunction = () => {
    setOperatorState("divide");
    if (prevNum === 0) setPrevNum(+currentNum);
    setCurrentNum("" + 0);
  };

  const multiplyFunction = () => {
    setOperatorState("multiply");
    if (prevNum === 0) setPrevNum(+currentNum);
    setCurrentNum("" + 0);
  };

  const invertFunction = () => {
    setOperatorState("inverted");
    setResult(result - result * 2);
  };

  const equalsFunction = () => {
    setCurrentNum("" + 0);
    if (operatorState === "add") setResult(result + +currentNum);
    if (operatorState === "sub") setResult(result - +currentNum);
    if (operatorState === "divide") setResult(result / +currentNum);
    if (operatorState === "multiply") setResult(result * +currentNum);
    setOperatorState("");
  };

  useEffect(() => {
    setResult(prevNum);
  }, [prevNum]);

  const buttonLoop = () => {
    let numList = [];
    for (let i = 1; i < 10; i++) {
      numList.push(
        <button
          key={i}
          onClick={() => {
            if (operatorState === "add") setCurrentNum("" + i);
            if (currentNum === "" + 0) setCurrentNum("" + i);
            else setCurrentNum(currentNum + i);
          }}
        >
          {i}
        </button>
      );
    }
    return numList;
  };

  return (
    <div>
      <div className="calculator">
        <span className="current">{currentNum}</span>
        <span></span>
        <div className="buttons">
          <div className="top-row">
            <button
              onClick={() => {
                setCurrentNum("" + 0);
                setOperatorState("");
                setPrevNum(0);
                setResult(0);
              }}
            >
              AC
            </button>

            <button
              onClick={() => {
                invertFunction();
              }}
            >
              +/-
            </button>
          </div>

          <div className="num-buttons">
            {buttonLoop()}
            <button
              onClick={() => {
                +currentNum > 0 && setCurrentNum(currentNum + 0);
              }}
            >
              0
            </button>{" "}
            <button
              onClick={() => {
                setCurrentNum(currentNum + ".");
              }}
            >
              .
            </button>
          </div>
        </div>
        <div className="operators">
          <button
            onClick={() => {
              divideFunction();
            }}
            style={{
              background: `${operatorState === "divide" ? "green" : "#ff6200"}`,
            }}
          >
            ÷
          </button>
          <button
            onClick={() => {
              multiplyFunction();
            }}
            style={{
              background: `${
                operatorState === "multiply" ? "green" : "#ff6200"
              }`,
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              subFunction();
            }}
            style={{
              background: `${operatorState === "sub" ? "green" : "#ff6200"}`,
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              addFunction();
            }}
            style={{
              background: `${operatorState === "add" ? "green" : "#ff6200"}`,
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              equalsFunction();
            }}
          >
            =
          </button>
        </div>
      </div>
      <span className="result">= {result}</span>
    </div>
  );
}

export default App;
