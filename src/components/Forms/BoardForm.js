import React, { Component } from 'react';
import getUid from '../../helpers/data/authData';

export default class BoardForm extends Component {
    state = {
      firebaseKey: this.props.board?.firebaseKey || '',
      name: this.props.board?.name || '',
      imageUrl: this.props.board?.name || '',
      userId: this.props.board?.name || '',
      description: this.props.board?.name || '',
    }

    componentDidMount() {
        const userId = getUid();
        this.setState({
            userId,
        }),
    }

    handleChange = (e) => {
        if (e.target.name === 'filename') {
            this.setState({ imageUrl: '' });

            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child(`pinterest/${this.state.userId}/${Date.now()}
            ${e.target.files[0].name}`);

            imageRef.put(e.target.files[0]).then((snapshot) => {
                snapshot.ref.getDownloadUrl().then((imageUrl) => {
                    this.setState({ imageUrl });
                });
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.firebaseKey === '') {
            createBoard(this.state)
              .then(() => {
                  this.props.onUpdate();
              })
        }
    }

    render() {
      return (
            <div>
                <h1>BoardForm</h1>
            </div>
      );
    }
}
