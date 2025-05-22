import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./components/styles/globalStyles";
import { Summary } from "./components/Summary";
import { Meals } from "./components/Meals";
import { DUMMY_MEALS } from "./data";
import Modal from "./components/UI/Modal";
import { Busket } from "./components/Busket";
import { useState } from "react";

const theme = {
  colors: {
    cherry: " #8a2b06;",
    darkCherry: " #5A1F08",
    darkGray: " #383838",
    white: "white",
    lightGray: "rgba(214, 214, 214)",
    black: "rgba(36,36,36,0.08)",
    orange: "rgba(173,85,2)",
    veryDarkgray: "#222222",
    gray: "gray",
  },
};

function App() {
  // useState используется для открытия и закрытия модального окна
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  // Функция, которая управляет состоянием isBasketOpen (useState)
  const basketHandler = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {/*  Функция, которая передаёт isBasketOpen (useState) как пропс в компонент
      Header */}
      <Header onOpen={basketHandler} />
      <Summary />
      <Meals meals={DUMMY_MEALS} />

      {/*
         Функция, которая передаёт isBasketOpen (useState) как пропс в компонент Modal,
         а также само состояние open={isBasketOpen}, чтобы управлять отображением модального окна
      */}
      <Modal onClose={basketHandler} open={isBasketOpen}>

        
        <Busket onClose={basketHandler} />
      </Modal>
    </ThemeProvider>
  );
}

export default App;
