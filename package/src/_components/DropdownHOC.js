import React, { Component } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";

export default class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.prepareData(props.data) };
  }

  prepareData = data => {
    // optional: you can skip cloning if you don't mind mutating original data
    var cloned = data.slice(0);

    // insert special select all node
    cloned.splice(0, 0, {
      label: "Select All",
      value: "selectAll",
      className: "select-all"
    });

    return cloned;
  };

  toggleAll = checked => {
    const { data } = this.state;
    for (var i = 1; i < data.length; i++) {
      data[i].checked = checked;
    }
    this.setState({ data });
  };

  handleChange = ({ value, checked }) => {
    if (value === "selectAll") this.toggleAll(checked);
  };

  render() {
    return (
      <div>
        <DropdownTreeSelect 
          data={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
