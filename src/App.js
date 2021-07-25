import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import IntroTabs from "./components/IntroTabs";

function App() {
  return (
    <Container>
      <NavBar />
      <IntroPage />
      <IntroTabs />
    </Container>
  );
}

export default App;
