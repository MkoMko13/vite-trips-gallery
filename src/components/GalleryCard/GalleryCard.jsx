import Heading from '../Heading/Heading';
// import peopleImg from '../../assets/icons/people.svg'

function GalleryCard(props) {
  return (
    <div className="gallery-card">
      <div className="trip-badge">
        <span className="trip-badge__item">{props.vehicle}</span>
        {props.isQty && (
          <span className="trip-badge__item">{props.quantity}
            <span className="trip-badge__item-icon"
              style={{backgroundImage: `url(../src/assets/icons/people.svg)`,}}></span>
          </span>)}
      </div>
      <img src={props.img} alt={props.link} />
      <Heading
        level='h2'
        place={props.place}
        month={props.month}
        price={props.price}
      />
    </div>
  )
}

export default GalleryCard;