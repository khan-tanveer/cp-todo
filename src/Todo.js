import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ImageIcon,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";

const Todo = (props) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline.." />
      </ListItem>
    </List>
    // <div>
    //   <li>{props.text}</li>
    // </div>
  );
};

export default Todo;
