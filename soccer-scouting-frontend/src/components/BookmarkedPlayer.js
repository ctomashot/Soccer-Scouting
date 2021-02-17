import React from 'react';


class BookmarkedPlayer extends React.Component {

    state = {
        isClicked: false,
        note: ""
    }

    componentDidMount() {
        this.setState({
            note: this.props.b.note
        })
    }

    editNote = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleClick = (e) => {
        const id = e.target.id
        fetch(`http://localhost:4000/bookmarked_players/${id}`, {method: 'PATCH',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({note: `${this.state.note}`})})
        .then(resp => resp.json())
        .then(data => this.setState({ note: data.note }))
    }


    handleChange = (e) => {
        this.setState({
            note: e.target.value
        })
    }

    render(){
        return(
            <div key={this.props.b.id}>
                    <h4>{this.props.p[0].name}</h4>
                    <p>{this.props.p[0].position}</p>
                    {this.state.isClicked? <input onChange={this.handleChange}></input> : <p>Scouting Note: {this.state.note}</p>}
                    {this.state.isClicked? <button onClick={(e) => this.handleClick(e)}>Submit</button> : <button onClick={this.editNote}>Edit</button>}
                    <div>
                    <button id={this.props.b.id} onClick={(e) => this.props.removeBookmarked(e)}>Remove</button>
                    </div>
                </div>
        )
    }
}


export default BookmarkedPlayer