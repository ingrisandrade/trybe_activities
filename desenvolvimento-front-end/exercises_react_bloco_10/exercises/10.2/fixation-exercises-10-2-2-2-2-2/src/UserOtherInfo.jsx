import React from "react";

class UserOtherInfo extends React.Component {
  render() {
    const { email, id } = this.props;
    return (
      <span>Other information: { email } {id} </span>
    );
  }
}

export default UserOtherInfo;
