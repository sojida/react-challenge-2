class Application extends React.Component {
    constructor(props) {
    super(props);
        this.state = { 
            username: '',
            password:''
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    render() {
        return (
            <React.Fragment>
            <h1>Controlled Form</h1>
            <form>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />

              <br/><br/>

              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
     
            <h3>Your username is: {this.state.username}</h3>
            <h3>Your password is: {this.state.password}</h3>
            <a href="main.html">Uncontrolled form</a>
          </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Application/>,
    document.getElementById('app')
);
