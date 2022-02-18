import BannerPage from './components/BannerPage';
import ContactUs from './components/ContactUs';
import FourCards from './components/FourCards';
import Header from './components/Header'
import HowDoesItWork from './components/HowDoesItWork';
import OurWorks from './components/OurWorks';
import ThirdComp from './components/ThirdComp';
import Collapsetab from './components/Collapsetab';
function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPage/>
      <FourCards/>
      <ThirdComp/>
      <HowDoesItWork/>
      <OurWorks/>
      <ContactUs/>
      <Collapsetab/>
    </div>
  );
}

export default App;
