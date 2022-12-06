
import { Navbar, Header, About, Gallery, Contact } from './sections/index';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
