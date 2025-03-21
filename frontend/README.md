# EatMORE

## Introduction

EatMORE is an online restaurant project aimed at providing a unique dining experience over the internet. The website allows users to browse the menu, book tables, order dishes, and learn about the restaurant's story and chef team.

## Project Structure

### Main Pages

1. **Home Page**
   - Contains a hero slider showcasing special offers.
   - Sections about the restaurant, special dishes, chefs, and a photo gallery.

2. **Menu**
   - Displays the menu items categorized into appetizers, main courses, desserts, and beverages.

3. **Reservation**
   - A form for booking tables including name, email, phone number, reservation date, time, and number of guests.

4. **Gallery**
   - Displays various photos from the restaurant and dishes.

5. **About**
   - Shows the restaurant's story, vision, and mission.

6. **Contact**
   - A form for contacting the restaurant including name, email, subject, and message.

7. **Login**
   - A form for existing users to log in.

8. **Register**
   - A form for creating a new account.

### Technologies Used

- **React**: For building the user interface.
- **React Router**: For managing page navigation.
- **Bootstrap**: For designing the user interface.
- **CSS Modules**: For styling components separately.
- **Vite**: For fast build and development performance.
- **Ionicons**: For using icons.

### User Interface

- **NavBar**: Contains links to main pages and login/register buttons.
- **Hero Slider**: Displays special offers with navigation buttons.
- **Reservation Form**: Allows users to book tables easily.
- **Contact Form**: Allows users to send messages to the restaurant.
- **Gallery**: Displays various photos from the restaurant and dishes.

### Technical Explanation

- **Components**: The project is divided into small components such as `NavBar`, `Footer`, `Hero`, `MenuItem`, `MenuCategory`, and more.
- **Containers**: Contain larger components such as `Hero`, `About`, `Specials`, `Chefs`, `GallerySection`.
- **Routing**: `React Router` is used for managing page navigation.
- **Styling**: `CSS Modules` are used for styling components separately, ensuring no style conflicts.

### Possible Improvements

1. **Add User Management System**: Implement a user management system for login, registration, and account management.
2. **Performance Optimization**: Improve site performance using techniques like lazy loading and image optimization.
3. **Add New Features**: Such as a dish rating system and online ordering feature.
4. **Enhance User Experience**: Improve user experience by adding interactive effects and enhancing responsiveness for different devices.

### Features

- **Dark/Light Mode**: Users can switch between modes for better readability.
- **Scroll Animation**: Scroll animations are activated when sections appear on the screen.
- **Image Hover Effect**: Images are enlarged on hover to add a visual effect.

## Getting Started

1. **Install Dependencies**:
   ```sh
   npm install
   ```

2. **Run Development Environment**:
   ```sh
   npm run dev
   ```

3. **Build for Production**:
   ```sh
   npm run build
   ```

4. **Preview Build**:
   ```sh
   npm run preview
   ```

## Conclusion

EatMORE is a comprehensive online restaurant project that provides a unique user experience using the latest technologies. It can be improved and developed by adding new features, optimizing performance, and enhancing the user experience.