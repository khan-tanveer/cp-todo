import React, { useEffect, useState } from "react";
import { Button, InputLabel, FormControl, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([
    "[1] take dogs for a walk",
    "[2] Take that the rubbish out",
    "[3] I want to be the billionare",
  ]);

  //when the app loads , we need to listen the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here... fire when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const [input, setInput] = useState("");

  console.log(input);

  const addTodo = (e) => {
    e.preventDefault();
    //this wiil fire when click the button onshort

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // console.log("i am working");
    // setTodos([...todos, input]);
    setInput(""); // clear up the input field after hitting the submit button
  };

  return (
    <div className="App">
      <h1>hello world khan Tanveer Mustafa here</h1>
      <form>
        {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <br />
        <br />
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>sunny saga
        ))}
      </ul>
    </div>
  );
}

export default App;
