import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        // Here we record the state of the search term.
        this.state = { term: '' };
    }

    // We render the input of the search bar on change to the console. 
    render(){
       return <input onChange={event => console.log(event.target.value)} />;
    }

}


export default SearchBar;
