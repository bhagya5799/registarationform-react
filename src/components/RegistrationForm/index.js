import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    cssColourFirst: '',
    cssColourLast: '',
    firstNamePara: false,
    lastNamePara: false,
    onSubmit: false,
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  }

  eventHandlerFirst = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({cssColourFirst: 'cssColourFirst', firstNamePara: true})
    } else {
      this.setState({cssColourFirst: '', firstNamePara: false})
    }
  }

  eventHandlerLast = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({cssColourLast: 'cssColourLast', lastNamePara: true})
    } else {
      this.setState({cssColourLast: '', lastNamePara: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        this.setState({cssColourFirst: 'cssColourFirst', firstNamePara: true})
      }
      if (lastName === '') {
        this.setState({cssColourLast: 'cssColourLast', lastNamePara: true})
      }
    } else {
      this.setState({onSubmit: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({onSubmit: false, firstName: '', lastName: ''})
  }

  render() {
    const {
      firstName,
      lastName,
      cssColourFirst,
      cssColourLast,
      onSubmit,
      firstNamePara,
      lastNamePara,
    } = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <div className="sub-container">
          {onSubmit ? (
            <>
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p>Submitted Successfully</p>
              <button
                type="button"
                className="submit-button"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </>
          ) : (
            <>
              <form className="form-container" onSubmit={this.onSubmitForm}>
                <label htmlFor="firstName" className="label">
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  onBlur={this.eventHandlerFirst}
                  value={firstName}
                  placeholder="First name"
                  onChange={this.onChangeFirst}
                  className={`first ${cssColourFirst}`}
                />
                {firstNamePara && <p className="error-message">Required</p>}
                <label htmlFor="lastName" className="label">
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  onBlur={this.eventHandlerLast}
                  value={lastName}
                  placeholder="Last name"
                  onChange={this.onChangeLast}
                  className={`first ${cssColourLast}`}
                />
                {lastNamePara && <p className="error-message">Required</p>}
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
