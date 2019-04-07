//import React from 'react'
//import ReactDOM from 'react-dom'

const TITLE = "React";

class App extends React.Component {
    componentDidMount() {
        document.title = TITLE;
    }

    render() {
        return (
            <h1> Please change template</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);