import React from 'react';
import { Link } from 'react-router';
import {FaArrowCircleUp, FaArrowCircleRight, FaArrowCircleLeft,
        FaArrowCircleDown, FaChevronLeft} from 'react-icons/lib/fa';

/*TODO: look into changing state when play button clicked. */
export class Snake extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isPlaying: false };
  }

  render() {
    const clickPlayBtn = () => {
      this.setState({ isPlaying: true })
    };

    return (this.state.isPlaying === false) ?
    <div className="snake">
      <Link className="HomeButton" to="/games" style={{ textDecoration: 'none' }}>
      <FaChevronLeft /> Back</Link>
      <h1 className="snakeFont">Snake</h1>
      <SnakeInstructions />
      <button className="GameButton" onClick={clickPlayBtn}>Play Snake!</button>
    </div>
    :
    <InGameDisplay />;
  };
};

const SnakeInstructions = (props) => (
  <p>
    <strong>Instructions</strong>:
    <br/>
    <br/>
    Use the onscreen buttons or arrow keys to direct the snake.
    <br/>
    <br/>
    Travel across continents by going through the blue portals.
    <br/>
    <br/>
    Eat the apple to increase your score and make the snake longer.
    <br/>
    <br/>
    Do not hit the edge of the map or your own tail otherwise you die.
  </p>
);

const InGameDisplay = (props) => (
  <div className="snake">
  {/* To Display: Pause/Play button, Leave button */}
    <Link className="HomeButton" to="/games" style={{ textDecoration: 'none' }}>
    <FaChevronLeft /> Games </Link>
    <h1 className="snakeFont">Snake</h1>
    <h4>Score: 0{/* Request score from raspberry pi c-client*/}</h4>
    <div>
      {/*TODO: make buttons pressed also when arrow keys pressed */}
      <button className="GameButton"><FaArrowCircleUp /></button>
      <br/>
      <button className="GameButton"><FaArrowCircleLeft /></button>
      <button className="GameButton"><FaArrowCircleRight /></button>
      <br/>
      <button className="GameButton"><FaArrowCircleDown /></button>
    </div>
  </div>
);

export default { Snake, }
