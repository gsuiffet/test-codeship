class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>ma 1ere App</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);