
import styles from './Menu.module.css';
import MenuCategory from './MenuCategory';

// بيانات القائمة مع الفئات والعناصر
const menuData = [
  {
    title: "Appetizers",
    items: [
      {
        img: "images/appetizer-1.jpg",
        alt: "Bruschetta",
        title: "Bruschetta",
        description: "Grilled bread topped with fresh tomatoes, garlic, and basil.",
        price: "$8.99",
      },
      {
        img: "images/appetizer-2.jpg",
        alt: "Stuffed Mushrooms",
        title: "Stuffed Mushrooms",
        description: "Mushrooms filled with cheese, herbs, and breadcrumbs.",
        price: "$9.99",
      },
      {
        img: "images/appetizer-3.jpg",
        alt: "Calamari",
        title: "Calamari",
        description: "Crispy fried calamari served with marinara sauce.",
        price: "$10.99",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        img: "images/main-1.jpg",
        alt: "Grilled Steak",
        title: "Grilled Steak",
        description: "Juicy grilled steak served with seasonal vegetables.",
        price: "$18.99",
      },
      {
        img: "images/main-2.jpg",
        alt: "Pasta Carbonara",
        title: "Pasta Carbonara",
        description: "Creamy pasta with pancetta, egg, and parmesan cheese.",
        price: "$14.99",
      },
      {
        img: "images/main-3.jpg",
        alt: "Seafood Platter",
        title: "Seafood Platter",
        description: "A selection of fresh seafood including shrimp, calamari, and fish.",
        price: "$22.99",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        img: "images/dessert-1.jpg",
        alt: "Chocolate Lava Cake",
        title: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten chocolate center.",
        price: "$6.99",
      },
      {
        img: "images/dessert-2.jpg",
        alt: "Tiramisu",
        title: "Tiramisu",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
        price: "$7.99",
      },
      {
        img: "images/dessert-3.jpg",
        alt: "Cheesecake",
        title: "Cheesecake",
        description: "Creamy cheesecake with a graham cracker crust.",
        price: "$5.99",
      },
    ],
  },
  {
    title: "Beverages",
    items: [
      {
        img: "images/beverage-1.jpg",
        alt: "Fresh Juice",
        title: "Fresh Juice",
        description: "Assorted fresh juices made from seasonal fruits.",
        price: "$4.99",
      },
      {
        img: "images/beverage-2.jpg",
        alt: "Iced Coffee",
        title: "Iced Coffee",
        description: "Chilled coffee with milk and ice cubes.",
        price: "$3.99",
      },
      {
        img: "images/beverage-3.jpg",
        alt: "Soft Drink",
        title: "Soft Drink",
        description: "Assorted carbonated soft drinks.",
        price: "$2.99",
      },
    ],
  },
];

const Menu = () => {
  return (
    <section className={`section1 menu-section py-5 ${styles.menuSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Our Delicious Menu</h1>
        {menuData.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
