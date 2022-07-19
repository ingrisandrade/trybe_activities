import React, { Component } from "react";

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

class Task extends Component {
  render() {
    const commitments = ['Study React', 'Perform exercises', 'Participate in monitoring', 'Complete 80% on project day'];
    return (
      <div>
        {
          commitments.map((task) => <h1 key={task}>Commitment { task }</h1>)
        }

      </div>
    );
  }
}

export default Task;
