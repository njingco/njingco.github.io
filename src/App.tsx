import tw from "twin.macro";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Education } from "./section/Education";
import { Experience } from "./section/Experience";
import { Profile } from "./section/Profile";
import { Projects } from "./section/Projects";
import { Volunteers } from "./section/Volunteer";

const AppContainer = tw.div`
  text-text_dark
  w-full
  h-full
  flex
  flex-col
  min-h-screen
  overflow-hidden

`;

const Content = tw.div`
  w-full
  flex
  flex-col
  items-center
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Content>
        <Profile />
        <Experience />
        <Education />
        <Projects />
        <Volunteers />
      </Content>
      <Footer />
    </AppContainer>
  );
}

export default App;
