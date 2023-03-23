import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeImageStatus} = props

  const renderRegisteredView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registered-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live will make you fall in love with this beautiful art
        form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registered-image"
      />
      <p>Registrations Are Closed Now! Stay tuned. We will reopen</p>
    </div>
  )

  const noActiveImageView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderActiveRegistrationDetailsView = () => {
    switch (activeImageStatus) {
      case registrationStatus.registered: {
        return renderRegisteredView()
      }
      case registrationStatus.yetToRegister: {
        return renderYetToRegisterView()
      }
      case registrationStatus.registrationClosed: {
        return renderRegistrationClosedView()
      }
      default:
        return noActiveImageView()
    }
  }

  return (
    <div className="status-container">
      {renderActiveRegistrationDetailsView()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
