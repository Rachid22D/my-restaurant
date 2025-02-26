import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <TopBar extraClass={"top-bar d-none d-lg-block py-2 px-3"} />
      <Header />
    </>
  );
}

export default App;
