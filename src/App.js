import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Worker from "./worker";

class App extends React.Component {
  columns = [
    "First name",
    "Last name",
    "Worked days",
    "Day salary",
    "Total salary",
  ];

  state = {
    workers: [
      {
        firstName: "Иван",
        lastName: "Иванов",
        dWork: 27,
        dSalary: 4000,
      },
      {
        firstName: "Петр",
        lastName: "Петров",
        dWork: 12,
        dSalary: 2000,
      },
      {
        firstName: "Джон",
        lastName: "Смитт",
        dWork: 30,
        dSalary: 9000,
      }
    ],
    total: 402000
  };

  constructor(props) {
    super(props);
    let total = this.state.total;
    this.state.workers.forEach((w) => {total += (w.dSalary * w.dWork)});
    this.setState({total});    
  }

  handleChange = (worker) => {
    const workers = this.state.workers.concat();
    const curWorker = workers.find(
      (w) => w.firstName === worker.firstName && w.lastName === worker.lastName
    );
    curWorker.dSalary = worker.dSalary;
    curWorker.dWork = worker.dWork;   
    this.setState({workers});
    let total = 0;
    workers.forEach((w) => total += (w.dSalary * w.dWork));
    this.setState({total});
  };

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            {this.columns.map((column) => {
              return <td>{column}</td>;
            })}
          </tr>

          {this.state.workers.map((worker, i) => {
            return (
              <Worker
                firstName={worker.firstName}
                lastName={worker.lastName}
                dWork={worker.dWork}
                dSalary={worker.dSalary}
                onChanged={this.handleChange}
              />
            );
          })}
          <tr>
            <td colSpan="4">TOTAL:</td>
            <td>{this.state.total}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
