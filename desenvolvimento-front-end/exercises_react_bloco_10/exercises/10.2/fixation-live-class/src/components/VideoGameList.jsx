import React from "react";
import PropTypes from 'prop-types';

class VideoGameList extends React.Component {
  render() {

    console.log(this.props.games);

    return (
      <h1>List of best selling games in the world</h1>
    );
  }
}

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number,
    img: PropTypes.string,
  }))
}

export default VideoGameList;
