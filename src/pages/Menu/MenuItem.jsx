import PropTypes from "prop-types";
import styles from './Menu.module.css';

// Component for displaying a single menu item
const MenuItem = ({ item }) => {
  const { img, alt, title, description, price } = item;
  return (
    <div className="col-md-4">
      <div className={`card ${styles.menuItem}`}>
        <img src={img} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="price">{price}</p>
          <a href="#" className="btn btn-warning">Order Now</a>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
MenuItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default MenuItem;
