import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Divider from '../Divider/Divider';
import Body2 from '../Body2/Body2';
import Body3 from '../Body3/Body3';
import Carrusel from '../Carrusel/Carrusel';
import Anuncio from '../Anuncio/Anuncio';


function App() {
  return (
    
    <div className="App">
     <Header />
     <body>
      <Anuncio />
      <Form />
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
