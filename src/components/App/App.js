import './App.scss';
import Header from '../atoms/Header/Header';
import Footer from '../atoms/Footer/Footer';
import Divider from '../atoms/Divider/Divider';
import Step from '../molecules/Step/Step';
import PreCarousel from '../atoms/PreCarousel/PreCarousel';
import Carousel from '../molecules/Carousel/Carousel';
import PrincipalView from '../organisms/PrincipalView/PrincipalView';


function App() {
  return (
    <div className="App">
     <Header />
      <body>
        <PrincipalView />
        <Divider />
        <Step />
        <Divider />
        <PreCarousel />
        <Carousel />
      </body>
      <Footer />
    </div>
  );
}

export default App;
