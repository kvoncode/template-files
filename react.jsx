import React from 'react'
import ReactDOM from 'react-dom'
import TestMock from './components/test-mock/test-mock.jsx'


class App extends React.Component {
    render() {
        return (
            <div className="">
                Hello fcc
            <TestMock />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

