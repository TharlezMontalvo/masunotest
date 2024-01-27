import './App.scss';
import Header from '../atoms/Header/Header';
import Footer from '../atoms/Footer/Footer';
import Divider from '../atoms/Divider/Divider';
import Body2 from '../Body2/Body2';
import Body3 from '../Body3/Body3';
import Carrusel from '../molecules/Carrusel/Carrusel';
import Bodies from '../organisms/Bodies/Bodies';


function App() {
  return (
    
    <div className="App">
     <Header />
     <body>
      <Bodies />
      <Divider />
      <Body2 />
      <Divider />
      <Body3 />
      <Carrusel />
    </body>
    <Footer />
    </div>
  );
}


export default App;
