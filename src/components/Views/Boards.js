import React from 'react';
import boardData from '../../helpers/data/boardData';
import BoardCard from '../Cards/boardCard';

class Boards extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    boardData.getBoards().then((response) => {
      this.setState({
        boards: response,
      });
    });
  }

  render() {
    const { boards } = this.state;
    return (
      <div className='d-flex flex-row flex-wrap'>
        {boards.map((board) => (
          <BoardCard key={board.firebaseKey} boardData={board} />
        ))}
      </div>
    );
  }
}

export default Boards;
