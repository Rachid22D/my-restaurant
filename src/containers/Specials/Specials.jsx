import { Link } from "react-router-dom";
import styles from "./Specials.module.css";

const specialsData = [
  {
    id: 1,
    name: "French Toast",
    time: "10 mins | ★★★★★",
    img: "/images/pexels-dapur-melodi-192125-1109197.jpg",
  },
  {
    id: 2,
    name: "Grilled Steak",
    time: "15 mins | ★★★★★",
    img: "/images/pexels-jack-baghel-2199968-20422124.jpg",
  },
  {
    id: 3,
    name: "Salmon Delight",
    time: "12 mins | ★★★★★",
    img: "/images/pexels-valeriya-1199957.jpg",
  },
];

const Specials = () => {
  return (
    <section className={`py-5 ${styles.specialSection}`}>
      <div className="container text-center">
        <h2>{"Today's Special"}</h2>
        <div className="row">
          {specialsData.map((dish) => (
            <div key={dish.id} className="col-md-4 margin-bottom-20">
              <img src={dish.img} className="img-fluid rounded" alt={dish.name} />
              <h4>{dish.name}</h4>
              <p>{dish.time}</p>
              <Link to="/dish" className={`btn btn-warning ${styles.btn}`}>
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
