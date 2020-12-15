import React, {Component} from 'react';

class ListUsers extends Component {

    state = {
        showNoOfGame : true
    };

    handleClick = () => {
        this.setState(currentState => ({ showNoOfGame: !currentState.showNoOfGame}));
    }

    render () {
       return (
           <div>
               <button
               onClick={this.handleClick}>{this.state.showNoOfGame ? "Show" : "Hide" } the Number of Games Played</button>
               <ul>
                    {this.props.usersData.map(user =>
                        <li>
                            {user.username} has played {this.state.showNoOfGame ? user.noOfGames : 0 } games(s).
                        </li>
                    )}
                </ul>
           </div>

       )
    }
}

export default ListUsers;