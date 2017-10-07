import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: '',
      password2: '',
      company: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
   
  }

  handleChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({ [key]: value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let { password, password2 } = this.state;

    if(password !== password2) {
      this.setState({
        password: '',
        password2: ''
      })
      return alert('Passwords do not match')
    }

  }

  render() {
    let { email, password, password2 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Sign Up</h1>
        </header>
        <div onSubmit={this.handleSubmit} className="form">
          <form action="">
            <input type="email" name="email" placeholder="email" required value={email} data-statekey='email' onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="Password" required value={password} data-statekey='password' onChange={this.handleChange}/>
            <input type="password" name="password2" placeholder="Confirm Password" required value={password2} data-statekey='password2'onChange={this.handleChange}/>
            <label>Company:</label>
            <select name="company" id="company">
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
            </select>
            <input type="submit" value="Submit" id="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
