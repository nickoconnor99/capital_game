import { useState } from "react";
const ButtonState = "DEFAULT" || "SELECTED" || "WRONG";

function randomize() {
  return Math.random() - 0.5;
}
const CountryCapitalGame = ({ data }) => {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [options, setOptions] = useState(
    [...countries, ...capitals].sort(randomize).map((value) => ({
      value,
      state: ButtonState,
    }))
  );
  const [selected, setSelected] = useState(undefined);
  const isGameOver = options.length === 0;

  if (isGameOver) {
    return <>Game Over</>;
  }

  return (
    <>
      {options.map((option) => {
        return (
          <button
            className={
              option.state === "SELECTED"
                ? "selected"
                : option.state === "WRONG"
                ? "wrong"
                : ""
            }
            onClick={() => {
              if (!selected) {
                setSelected(option);
                setOptions(
                  options.map((opt) => {
                    return opt === option //loop through array and update on clicked state and leave rest as are
                      ? {
                          ...opt,
                          state: "SELECTED",
                        }
                      : { ...opt, state: "DEFAULT" };
                  })
                );
              } else {
                if (
                  selected.value === data[option.value] || //if what selected prev is matched with one just clicked(germany === germany.value)(berlin === berlin)
                  data[selected.value] === option.value // germany.value === berlin (berlin === berlin)
                ) {
                  setOptions(
                    options.filter((opt) => {
                      //filter matches out
                      return !(
                        opt.value === selected.value ||
                        opt.value === option.value
                      );
                    })
                  );
                } else {
                  setOptions(
                    options.map((opt) => {
                      return opt.value === selected.value ||
                        opt.value === option.value
                        ? { ...opt, state: "WRONG" }
                        : opt;
                    })
                  );
                }
                setSelected(undefined);
              }
            }}
          >
            {option.value}
          </button>
        );
      })}
    </>
  );
};

export default CountryCapitalGame;
