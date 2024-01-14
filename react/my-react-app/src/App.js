import logo from './logo.svg';
import './App.css';
import Car from './components/Car'

function App() {
				const cars = ['Volvo', 'BMV', 'Subaru']
  return (
    <div className="App">
      <h1>Cars</h1>
      {cars.map((car) => <Car name={car} />)}
      
    </div>
  );
}

export default App;
