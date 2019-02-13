class LoginForm extends React.Component {

    handleSubmit = event => {
      event.preventDefault();
      alert('Your username is: ' + this.input.value);
    };
   
    render() {
      return (
        <React.Fragment>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            defaultValue="cool-guy"
            ref={(input) => this.input = input}
          />
        <br/>
          <a href="index.html">Controlled form</a>
        </form>
        </React.Fragment>
      );
    }
   }

ReactDOM.render(
    <LoginForm/>,
    document.getElementById('app')
);
