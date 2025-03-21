import { useEffect, useState } from 'react';
import axios from 'axios';
import { TopBar, Footer, ImageHoverEffect, ToggleMode } from './components';
import { Header } from "./containers";
import AppRoute from './router/AppRoutes';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    axios.get('https://literate-broccoli-j7v95xgj6r7c956-8000.app.github.dev/api/welcome/')
      .then(response => {
        setWelcomeMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <ImageHoverEffect />
      <ToggleMode />
      <TopBar extraClass={"top-bar d-none d-lg-block py-2 px-3"} />
      <Header welcomeMessage={welcomeMessage} /> 
      <div>{welcomeMessage}</div> 
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;