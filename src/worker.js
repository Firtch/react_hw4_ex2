import React from "react";

class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      dWork: this.props.dWork,
      dSalary: this.props.dSalary,
      totalSalary: this.props.dSalary * this.props.dWork,
    };
  }

  changeData = (e) => {
    const worker = this.state;
    if(e.target.name === "dWork") {
        worker.dWork = e.target.value;
    } else {
        worker.dSalary = e.target.value;
    }
    worker.totalSalary = worker.dWork * worker.dSalary;
    this.setState(worker);
    this.props.onChanged(this.state);
    

  };
  

  render() {
    return (
      <tr>
        <td>{this.state.firstName}</td>
        <td>{this.state.lastName}</td>
        <td>
          <input type="number" name="dWork" value={this.state.dWork} onChange={this.changeData} />
        </td>
        <td>
          <input type="number" name="dSalary" value={this.state.dSalary} onChange={this.changeData} />
        </td>
        <td>{this.state.totalSalary}</td>
      </tr>
    );
  }
}

export default Worker;
