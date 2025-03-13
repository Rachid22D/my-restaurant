import styles from "./Chefs.module.css";

// Array of chef objects containing id, name, role, and image
const chefs = [
  {
    id: 1,
    name: "Albert C. Miller",
    role: "Head Chef",
    image: "/images/pexels-arthousestudio-4590936.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Pastry Chef",
    image: "/images/pexels-sidesimagery-3351927.jpg",
  },
  {
    id: 3,
    name: "James Brown",
    role: "Sous Chef",
    image: "/images/pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg",
  },
];

// Functional component to display the chefs
const Chefs = () => {
  return (
    <section className={`container my-5 text-center ${styles.chefsSection}`}>
      <h2>Our Chefs</h2>
      <div className="row">
        {/* Map through the chefs array and render each chef's details */}
        {chefs.map((chef) => (
          <div key={chef.id} className="col-md-4 margin-bottom-20">
            <img src={chef.image} className="img-fluid rounded-circle" alt={chef.name} />
            <h4>{chef.name}</h4>
            <p>{chef.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
