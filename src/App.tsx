import styled from "styled-components";
import tw from "twin.macro";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Education } from "./section/Education";
import { Profile } from "./section/Profile";
import { Projects } from "./section/Projects";
import { Volunteer } from "./section/Volunteer";


const AppContainer = tw.div`
  flex
  flex-col
  min-h-screen
  w-full
  h-full
  
`
const Filler = tw.div`
  flex-grow
`

function App() {
  return (
    
    <AppContainer>
      <Navbar/>
      <Profile/>
      <Education/>
      <Projects/>
      <Volunteer/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
