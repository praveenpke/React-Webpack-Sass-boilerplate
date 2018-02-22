import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Comp from './comp';


const App = () => {
    return (
        <div className="body">
            <h1>
                 welcome to React with webpack and babel
            
            </h1>
            <Comp/>
        </div>
        
    )
}
 
ReactDOM.render(<App/>,document.getElementById("root"));