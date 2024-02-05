import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      {/* Input field for todo title */}
      <input
        style={{
          padding: 10,
          margin: 10,
          border: "2px solid black",
        }}
        type="text"
        placeholder="Enter Title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <br /> <br />
      {/* Input field for todo description */}
      <input
        style={{
          padding: 10,
          margin: 10,
          border: "2px solid black",
        }}
        type="text"
        placeholder="Enter the Description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <br /> <br />
      {/* Button to create the todo */}
      <button
        onClick={() => {
          fetch('http://localhost:3000/createTodo', {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
