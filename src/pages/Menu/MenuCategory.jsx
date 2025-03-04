import PropTypes from "prop-types";
import MenuItem from './MenuItem';

const MenuCategory = ({ category }) => {
  return (
    <div className="mb-5">
      <h2 className="mb-4">{category.title}</h2>
      <div className="row">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
  }),
};
export default MenuCategory;
