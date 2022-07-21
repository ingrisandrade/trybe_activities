import React from "react";

class VideoGameList extends React.Component {
  render() {

    console.log(this.props.games);

    return (
      <h1>List of best selling games in the world</h1>
    );
  }
}

export default VideoGameList;
