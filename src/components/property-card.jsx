import './property-card.css';

const PropertyCard = ({ property }) => {

    const {title, description, price, rating, superhost, location, capacity, image} = property;
    return (
        <div className="property-card">
            <img src={image} alt={title} className="property-card__image" />
            <div className="property-card__details">
                <h2 className="property-card__name">{title}</h2>
                {/* <p className="property-card__type">{type}</p> */}
                <p className="property-card__location">{location}</p>
                <p className="property-card__price">${price}</p>
            </div>
        </div>
    );
};

export default PropertyCard;