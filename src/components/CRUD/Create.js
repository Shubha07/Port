import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default class extends Component {
  state = {
    open: false,
    form: {
      description: "",
      todoList: ""
    }
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.state;
    this.props.onCreate(form);

    this.setState({
      form: {
        description: "",
        todoList: ""
      }
    });
  };

  render() {
    const {
        form: { description, todoList }
      } = this.state,
      { todoList: categories } = this.props;
    return (
      <div>
        <form noValidate autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="todoList">todoList</InputLabel>
            <Select
              value={todoList}
              onChange={this.handleChange("todoList")}
              style={{ width: 500 }}
            >
              {categories.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            placeholder="description"
            style={{ width: 500, paddingTop: 10 }}
            value={description}
            variant="outlined"
            onChange={this.handleChange("description")}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            onClick={this.handleSubmit}
          >
            Generate
          </Button>
        </form>
      </div>
    );
  }
}
