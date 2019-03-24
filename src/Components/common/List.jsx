import React from "react";

const List = props => {
  return (
    <div>
      <ul className="list-group">
        {props.items.map(item => (
          <li
            onClick={() => {
              props.onItemSelect(item);
            }}
            key={item[props.valueProperty]}
            className={
              item === props.selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[props.textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default List;
