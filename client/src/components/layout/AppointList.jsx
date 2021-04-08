import React from "react";

const AppointList = () => {
  const appointememnts = new Array(5).fill(0);
  const [isActive, setisActive] = React.useState(new Array(5).fill(false));

  const toggleActive = (i) => {
    var newArray = [...isActive];
    newArray[i] = !isActive[i];
    setisActive(newArray);
  };
  return (
    <div class="list-group" id="list-tab" role="tablist">
      {appointememnts.map((a, i) => {
        return (
          <a
            class={`list-group-item list-group-item-action ${
              isActive[i] ? "active" : ""
            }`}
            key={i}
            data-toggle="list"
            href="/"
            role="tab"
            aria-controls="home"
            onMouseOver={() => toggleActive(i)}
            onMouseOut={() => toggleActive(i)}
          >
            A{i}
          </a>
        );
      })}
    </div>
  );
};

export default AppointList;
