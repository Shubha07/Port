import React, { Component, Fragment } from "react";
import { Header, Filter } from "./components/export";
import Body from "./components/Todo/Body";
import { todoList, todo } from "./Todo";
export default class extends Component {
  state = {
    todo
  };

  getTodoByCategory() {
    //sort the list of todo depending upond the todo list selected
    return Object.entries(
      this.state.todo.reduce((todo, list) => {
        const { todoList } = list;
        todo[todoList] = todo[todoList] ? [...todo[todoList], list] : [list]; //spreading out the elements from the array to new array
        return todo;
      }, {})
    );
  }
  //functions used to manage filters, create new todo, deleting, check
  handleCategoryFilter = category => {
    this.setState({
      category
    });
  };

  handleFormCreate = form => {
    this.setState(({ todo }) => ({
      todo: [...todo, form]
    }));
  };

  handleFormDelete = id => {
    this.setState(({ todo }) => ({
      todo: todo.filter(del => del.id !== id)
    }));
  };

  handleFormEdit = (e, id) => {
    console.log(e.target.checked);
  };
  render() {
    const todo = this.getTodoByCategory(),
      { category } = this.state;
    return (
      <Fragment>
        <Header />

        <Body
          category={category}
          todo={todo}
          todoList={todoList}
          onFormCreate={this.handleFormCreate}
          onDelete={this.handleFormDelete}
          onEdit={this.handleFormEdit}
        />

        <Filter
          category={category}
          todoList={todoList}
          onFilter={this.handleCategoryFilter}
        />
      </Fragment>
    );
  }
}
