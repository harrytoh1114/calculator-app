import React, { useState } from "react";
import { useSelector } from "react-redux";
import { evaluate } from "mathjs";
import Theme from "../Theme/Theme";
import "./Calculator.scss";

const Calculator = () => {
  const [total, setTotal] = useState("");
  const [error, setError] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  const currentNumberHandler = (e) => {
    e.preventDefault();
    console.log('test')
    setError(false);
    total.split();

    setTotal(total.concat(e.target.name));
  };

  const currentActionHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "del") {
      setTotal(total.slice(0, -1));
    }

    if (e.target.name === "reset") {
      setTotal("");
    }
  };

  const calcHandler = (e) => {
    e.preventDefault();
    try {
      setError(false);
      setTotal(evaluate(total).toString());
    } catch (e) {
      setTotal("0");
      setError(true);
    }
  };

  return (
    <form className="calculator">
      <div className="calculator__top">
        <h3 className="calculator__title">calc</h3>
        <Theme />
      </div>
      <input
        type="text"
        value={total === "" ? "0" : total}
        className={
          error
            ? "calculator__total theme-" + theme + " error"
            : "calculator__total theme-" + theme
        }
        readOnly={true}
      />
      <div className={"calculator__key theme-" + theme}>
        <div className="calculator__key-row">
          <button
            name="7"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            7
          </button>
          <button
            name="8"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            8
          </button>
          <button
            name="9"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            9
          </button>
          <button
            name="del"
            onClick={currentActionHandler}
            className={"calculator__key-btn theme-" + theme + " action"}
          >
            del
          </button>
        </div>
        <div className="calculator__key-row">
          <button
            name="4"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            4
          </button>
          <button
            name="5"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            5
          </button>
          <button
            name="6"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            6
          </button>
          <button
            name="+"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            +
          </button>
        </div>
        <div className="calculator__key-row">
          <button
            name="1"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            1
          </button>
          <button
            name="2"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            2
          </button>
          <button
            name="3"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            3
          </button>
          <button
            name="-"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            -
          </button>
        </div>
        <div className="calculator__key-row">
          <button
            name="."
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            .
          </button>
          <button
            name="0"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            0
          </button>
          <button
            name="/"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            /
          </button>
          <button
            name="*"
            onClick={currentNumberHandler}
            className={"calculator__key-btn theme-" + theme}
          >
            x
          </button>
        </div>
        <div className="calculator__key-row">
          <button
            name="reset"
            onClick={currentActionHandler}
            className={"calculator__key-btn long theme-" + theme + " action"}
          >
            reset
          </button>
          <button
            name="del"
            onClick={calcHandler}
            className={"calculator__key-btn long theme-" + theme + " result"}
          >
            =
          </button>
        </div>
      </div>
    </form>
  );
};

export default Calculator;
