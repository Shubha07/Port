import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Create from "../CRUD/Create";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  paper: { height: 500, padding: 30, marginTop: 10, marginBottom: 10 }
};

export default ({
  todo,
  category,
  todoList,
  onFormCreate,
  onDelete,
  onEdit
}) => (
  <Grid container>
    <Grid item sm>
      <Paper elevation={1} style={styles.paper}>
        {todo.map(
          //using map function to get the the list of todo
          ([group, todo]) =>
            !category || category === group ? (
              <div>
                <Typography>{group}</Typography>
                <List component="ul">
                  {todo.map(({ id, description }) => (
                    <ListItem key={id} button>
                      <ListItemText primary={description} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={e => onEdit(e, id)}>
                          <Checkbox />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper elevation={1} style={styles.paper}>
        <h2> Welcome to TODO Form </h2>

        <Create todoList={todoList} onCreate={onFormCreate} />
      </Paper>
    </Grid>
  </Grid>
);
