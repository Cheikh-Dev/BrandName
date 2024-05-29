import './App.css'
import Navbar from './componants/Navbar'
import Section2 from './componants/Section2'
import SectionExpert from './componants/SectionExpert'
import SectionInfo from './componants/SectionInfo'
import SectionWelcom from './componants/SectionWelcom'

function App() {

  return (
    <>
      <Navbar />
      <SectionWelcom />
      <SectionInfo/>
      <Section2 />
      <SectionExpert/>
    </>
  )
}

export default App
