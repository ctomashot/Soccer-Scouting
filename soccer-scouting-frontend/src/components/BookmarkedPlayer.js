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
        console.log(id)
        fetch(`http://localhost:4000/bookmarked_players/update`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({note: this.state.note, id: id})})
        .then(resp => resp.json())
        .then(data => {
            this.setState({ note: data.note })
            this.editNote()
            this.props.newPlayers(data)
        })
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
                    <p>Age: {this.props.p[0].age}</p>
                    <p>Position: {this.props.p[0].position}</p>
                    <p>Goals: {this.props.p[0].goals}</p>
                    <p>Assists: {this.props.p[0].assists}</p>
                    <p>Appearances: {this.props.p[0].appearances}</p>
                    <p>Clean Sheets: {this.props.p[0].clean_sheets}</p>

                    {this.state.isClicked? <input onChange={(e) => this.handleChange(e)}></input> : <p>Scouting Note: {this.state.note}</p>}
                    {this.state.isClicked? <button id={this.props.b.id} onClick={(e) => this.handleClick(e)}>Submit</button> : <button onClick={this.editNote}>Edit</button>}
                    <div>
                    <button id={this.props.b.id} onClick={(e) => this.props.removeBookmarked(e)}>Remove</button>
                    </div>
                </div>
        )
    }
}


export default BookmarkedPlayer