class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }
    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        });
    }

    render() {
        console.log(this.state.messageIsActive);
        const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil minima obcaecati sequi delectus qui aliquam provident quia similique assumenda dignissimos non beatae! Nam quam eveniet aperiam et sunt eius?'
        return (
            <>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
                {this.state.messageIsActive && <p>{text}</p>}
            </>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById("root"))