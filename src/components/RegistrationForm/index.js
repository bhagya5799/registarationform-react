// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isTrue: false,
  }

  submitSuccess = () => {
    this.setState({isTrue: false})
    //   return (
    //   <div className="login-form-container">
    //     <h1 className="registration-title">Registration</h1>
    //     <div className="form-contationr">
    //     <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
    //     </div>
    //   </div>
    //   )
  }

  submitForm = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const userDetails = {firstName, lastName}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('data', data)
    if (response.ok === true) {
      this.submitSuccess()
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitLastName = () => {
    const {lastName} = this.state
    return (
      <>
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="last Name"
          onChange={this.onChangeLastName}
        />
        <span className="error-message-2">k </span>
      </>
    )
  }

  onSubmitFirstName = () => {
    const {firstName} = this.state
    return (
      <>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          className="input"
          type="text"
          id="firstName"
          value={firstName}
          placeholder="last Name"
          onChange={this.onChangeFirstName}
        />
        <span className="error-message-1">k </span>
      </>
    )
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="login-form-container">
        <h1 className="registration-title">Registration</h1>
        <div className="form-contationr">
          <form onSubmit={this.submitForm}>
            <div className="input-container">{this.onSubmitFirstName()}</div>
            <div className="input-container">{this.onSubmitLastName()}</div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
