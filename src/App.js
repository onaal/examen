import logo from './logo.svg';
import './styles/tailwind.css';
import Navbar from './client/components/navbar'
import Carosouel from './client/components/carousel'
import  './app.scss';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carosouel></Carosouel>
    </div>
  );
}

export default App;
