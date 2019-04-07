//import React from 'react'
//import ReactDOM from 'react-dom'

const TITLE = "Elon Musk Tribute Page";

class App extends React.Component {
    componentDidMount() {
        document.title = TITLE;
    }

    render() {
        return (

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">React with Bootstrap includes</h1>
                    <h6>head</h6>
                    <ul className="list-group">
                        <li className="list-group-item">Charset and Viewport meta</li>
                        <li className="list-group-item">Bootstrap CSS</li>
                        <li className="list-group-item">Google Open Sans Font</li>
                        <li className="list-group-item">Favicon meta and links</li>
                        <li className="list-group-item">Font Awesome</li>
                        <li className="list-group-item">Custom CSS</li>

                    </ul>

                    <h6>body</h6>

                    <ul>

                        <li className="list-group-item">jQuery first, then Popper.js, then Bootstrap JS</li>
                        <li className="list-group-item">React and ReactDOM</li>
                        <li className="list-group-item">Babel</li>
                        <li className="list-group-item">Custom jsx</li>
                    </ul>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);