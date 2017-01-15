import React, { Component } from 'react';


// We require a component to be a class based component when we need to
// have an idea of state.

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
        //when adding a value to be set by state we are creating a controlled component
       return (
           <div>
               <input
                   value={this.state.term}
                   onChange={event => this.setState({ term: event.target.value })} />
               Value of the input: {this.state.term}
           </div>
    )
    }

}


export default SearchBar;
