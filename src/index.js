import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../keys';
import YTSearch from 'youtube-api-search';

// We used downwards data flow - The most parent component should be in charge of fetching external data.
import SearchBar from './components/search_bar';

// test API call.
YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data));

// Create a new component. This component should produce some HTML.
// Functional components are used when we are taking in some information and spitting out some
// JSX. A functional component can contain a class based component.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

