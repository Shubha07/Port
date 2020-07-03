import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//selecting the list of todo

export default ({ todoList, category, onFilter }) => {
  const index = category
    ? todoList.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onFilter(index === 0 ? "" : todoList[index - 1]);
  return (
    <Paper elevation={2}>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="ALL" />
        {todoList.map(todoList => <Tab label={todoList} />)}
      </Tabs>
    </Paper>
  );
};
