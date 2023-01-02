import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import { Title, P } from "./components/Typography";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Header />
      <Main>
        <Title>Make remote work</Title>
        <P>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </P>
        <Button clickHandler={() => console.log("Button clicked!")}>
          Learn more
        </Button>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
