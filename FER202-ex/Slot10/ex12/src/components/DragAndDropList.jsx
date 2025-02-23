import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassWhiskey,
  faCoffee,
  faAppleAlt,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";

function DragAndDropList() {
  const [items, setItems] = useState([
    { id: 1, name: "Pepsi", icon: faGlassWhiskey },
    { id: 2, name: "Coca", icon: faCoffee },
    { id: 3, name: "Mirida", icon: faAppleAlt },
    { id: 4, name: "Spite", icon: faBacon },
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const [removedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(dropIndex, 0, removedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div style={{ margin: "20px", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Drag and Drop List</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "20px auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              color: "black",
              padding: "20px",
              backgroundColor: draggingItem === index ? "#e0e0e0" : "#f5f5f5",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "move",
              transition: "background-color 0.2s ease",
              minWidth: "80px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              style={{ fontSize: "2rem", color: "#444" }}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
