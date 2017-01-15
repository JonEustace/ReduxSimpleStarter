import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        // Here we record the state of the search term.
        // We never modify our state property directly unless it's in our constructor function.
        // We use this.setState to access state elsewhere. this.setState is used by
        // react so it knows that the state has changed.
        this.state = { term: '' };
    }

    // We render the input of the search bar and set it to state.
    render(){
       return (
           <div>
               <input onChange={event => this.setState({ term: event.target.value })} />
               Value of the input: {this.state.term}
           </div>
    )
    }

}


export default SearchBar;
