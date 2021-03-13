import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ImageIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Todo.css";
import db from "./firebase";

const Todo = (props) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline..." />
      </ListItem>
      <DeleteForeverIcon
        onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete Me
      </DeleteForeverIcon>
    </List>
    // <div>
    //   <li>{props.text}</li>
    // </div>
  );
};

export default Todo;
