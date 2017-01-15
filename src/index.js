import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../keys';

import SearchBar from './components/search_bar';


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

