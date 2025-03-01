import Banner from './components/home_components/Banner';
import Blog from './components/home_components/Blog';
import Descripcion from './components/home_components/Descripcion';
import Logros from './components/home_components/Logros';
import Preguntas from './components/home_components/Preguntas';
import Seguridad from './components/home_components/Seguridad';
import Testimonios from './components/home_components/Testimonios';
import TipoVehiculos from './components/home_components/TipoVehiculos';

export default function Home() {
    return (
      <>
        <Banner />
        <Blog />
        <Descripcion />
        <Logros />
        <Preguntas />
        <Seguridad />
        <Testimonios />
        <TipoVehiculos />
      </>
    );
  }