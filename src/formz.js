import React from "react";
import ReactDom from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: "",
      listOfFoods: "coconut"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("a name was submitted: " + this.state.value);
    alert("a select value was submitted: " + this.state.value3);

    event.preventDefault();
  }

  handleSelect(event) {
    this.setState({
      value3: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>

        <select value={this.state.value3} onChange={this.handleSelect}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NameForm;
