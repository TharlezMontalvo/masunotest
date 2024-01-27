import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Divider from '../Divider/Divider';
import Body2 from '../Body2/Body2';
import Body3 from '../Body3/Body3';
import Carrusel from '../Carrusel/Carrusel';
import Bodies from '../Bodies/Bodies';


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
