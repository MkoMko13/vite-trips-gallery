import Heading from '../Heading/Heading'
import GalleryCard from '../GalleryCard/GalleryCard';
import trip1Img from '../../assets/trip1.jpg'
import trip2Img from '../../assets/trip2.jpg'
import trip3Img from '../../assets/trip3.jpg'
import trip4Img from '../../assets/trip4.jpg'

const trips = [
  {
    vehicle: 'На автобусе',
    quantity: '10',
    isQty: true,
    place: 'Тбилиси',
    month: 'апрель',
    price: '83.000',
    img: trip1Img,
  },
  {
    vehicle: 'На самолете',
    quantity: '10',
    isQty: false,
    place: 'Стамбул',
    month: 'март',
    price: '110.000',
    img: trip2Img,
  },
  {
    vehicle: 'На самолете',
    quantity: '15',
    isQty: true,
    place: 'Дубай',
    month: 'июнь',
    price: '220.000',
    img: trip3Img,
  },
  {
    vehicle: 'Самолет + паром',
    quantity: '11',
    isQty: true,
    place: 'Пхукет',
    month: 'сентябрь',
    price: '135.000',
    img: trip4Img,
  }

]

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="container">
        <Heading
          level='h1'
          text='Галерея путешествий'
        />
        <div className="gallery-section__list">
          {trips.map(trip => (
            <GalleryCard
              vehicle={trip.vehicle}
              quantity={trip.quantity}
              isQty={trip.isQty}
              place={trip.place}
              month={trip.month}
              price={trip.price}
              img={trip.img}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default GallerySection;