
import { TopBar , Footer, ImageHoverEffect, ToggleMode } from './components';
import { Header } from "./containers";
import AppRoute from './router/AppRoutes';

function App() {
  return (
    <>
      
      <ImageHoverEffect />
      <ToggleMode />
      <TopBar extraClass={"top-bar d-none d-lg-block py-2 px-3"} />
      <Header />
      <AppRoute />
      <Footer />
    
    </>
  );
}

export default App;
