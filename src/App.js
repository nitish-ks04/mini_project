import Navbar from './component/navbar';
import Fotter from './component/fotter';
import "./css/app.css"
import Approute from './route/route';
import Bgimages from './component/bgphoto';

function App() {
  const backgroundStyle = Bgimages(); 
  return (
    <div className="app-container" style={backgroundStyle}>
      <Navbar />
      <main className="main-content">
        <Approute/>
      </main>
      <Fotter />
    </div>
  );
}

export default App;
