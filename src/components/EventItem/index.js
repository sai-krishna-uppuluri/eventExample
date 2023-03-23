import './index.css'

const EventItem = props => {
  const {eachEvent, activeEventImage} = props

  const {id, imageUrl, name, location, registrationStatus} = eachEvent

  const onClickEventImage = () => {
    activeEventImage(id)
  }

  return (
    <li className="item-list-container">
      <button
        type="button"
        className="event-image-btn"
        onClick={onClickEventImage}
      >
        <img src={imageUrl} alt="event" className="event-image-item" />
      </button>
      <h3> {name}</h3>
      <p> {location}</p>
    </li>
  )
}

export default EventItem
