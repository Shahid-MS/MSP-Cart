
import './App.css';
import Homepage from './customer/Pages/HomePage/Homepage';
import Navigation from './customer/components/navigation/Navigation.jsx'

function App() {
  return (
    <>
    <div className="App">
     <Navigation/>
    </div>
    <div>
      <Homepage/>
    </div>
    </>
  );
} 

export default App;
