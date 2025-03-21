import styles from './Dish.module.css';

const Dish = () => {
  return (
    // Main section of the dish page
    <section className={`section1 dish-section py-5 ${styles.dishSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Order Your Dish</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Dish card */}
            <div className={`dish-card card ${styles.orderCard}`}>
              <img 
                src="images/pexels-chanwalrus-958545.jpg" 
                className="card-img-top" 
                alt="Dish Image" 
              />
              <div className="card-body">
                <h2 className="card-title">Dish Name</h2>
                <p className="card-text">
                  {/* Dish description */}
                  This dish is a perfect blend of fresh ingredients and rich flavors that will delight your palate.
                  Prepared with passion and served with love.
                </p>
                <p className="price">Price: $15.99</p>
                <div className="text-center">
                  {/* Order confirmation button */}
                  <button className="btn btn-warning confirm-btn">Confirm Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dish;
