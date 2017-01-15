import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../keys';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

// We used downwards data flow - The most parent component should be in charge of fetching external data.
import SearchBar from './components/search_bar';


// Create a new component. This component should produce some HTML.
// Functional components are used when we are taking in some information and spitting out some
// JSX. A functional component can contain a class based component.
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        // When using the same key and value names with ES6 we can simply name the name
        // eg. {videos: videos} === {videos}
        YTSearch({key: API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));

    }

    render(){
        // We pass props to VideoList
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

