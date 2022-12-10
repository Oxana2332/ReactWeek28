import './app.css';
import Rate from '../rate/Rate.jsx';

const tariffs = [{
  price: "300",
  speed: "10",
  header: "blue-header",
  section: "blue-section"
}, {
  price: "450",
  speed: "50",
  header: "green-header",
  section: "green-section"
}, {
  price: "550",
  speed: "100",
  header: "red-header",
  section: "red-section",
}, {
  price: "1000",
  speed: "200",
  header: "black-header",
  section: "black-section"
}];

function App() {

  return ( <div className = "App" > {
      tariffs.map((rate) =>
        <
        Rate price = {
          rate.price
        }
        speed = {
          rate.speed
        }
        classHeader = {
          rate.header
        }
        classSection = {
          rate.section
        }
        isSelected={rate.isSelected}
        />
      )
    } </div>
  );
}

export default App;