import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./components/styles/globalStyles";
import { Summary } from "./components/Summary";
import { Meals } from "./components/Meals";
import { DUMMY_MEALS } from "./data";

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Summary />
      <Meals meals={DUMMY_MEALS} />
    </ThemeProvider>
  );
}

export default App;
