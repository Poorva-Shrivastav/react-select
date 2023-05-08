import "./App.css";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState();

  const options = [
    {
      id: 1,
      value: "ocean",
      label: "Ocean",
      isDisabled: false,
    },
    { id: 2, value: "blue", label: "Blue", isDisabled: true },
    {
      id: 3,
      value: "purple",
      label: "Purple",
      isDisabled: false,
    },
    { id: 4, value: "red", label: "Red", isDisabled: false },
    {
      id: 5,
      value: "orange",
      label: "Orange",
      isDisabled: false,
    },
    {
      id: 6,
      value: "yellow",
      label: "Yellow",
      isDisabled: false,
    },
    {
      id: 7,
      value: "green",
      label: "Green",
      isDisabled: false,
    },
    {
      id: 8,
      value: "forest",
      label: "Forest",
      isDisabled: false,
    },
    {
      id: 9,
      value: "slate",
      label: "Slate",
      isDisabled: false,
    },
    {
      id: 10,
      value: "silver",
      label: "Silver",
      isDisabled: false,
    },
  ];

  const [data, setData] = useState(options);

  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
    if (e.target.value !== "") {
      let filterData = data.filter((item) =>
        item.value.includes(e.target.value.toLowerCase())
      );
      setData(filterData);
      setIsVisible(true);
    } else if (e.target.value === "") {
      setData(options);
      setIsVisible(true);
    }
  };

  const liChangeHandler = (item) => {
    setInputVal(item.label);
    setIsActive(item.id);
    setIsVisible(false);
  };

  return (
    <div className="App">
      <div className="outermost-div">
        <div onClick={() => setIsVisible(!isVisible)} className="input-div">
          <input
            className="input-search"
            type="text"
            value={inputVal || ""}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Select..."
          />
          <div className="downArrow-div">
            <div className="icon">
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className={isVisible ? "inner-div" : "display-none"}>
          {isVisible &&
            data.map((item) => (
              <p
                key={item.value}
                value={item.value}
                className={
                  item.isDisabled
                    ? "disabled"
                    : isActive === item.id
                    ? "active"
                    : "list-search"
                }
                onClick={() => liChangeHandler(item)}
              >
                {item.label}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
// sachin@dabadu.ai

export default App;
