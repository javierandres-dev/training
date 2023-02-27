import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './components/Navigation';

function App() {
  console.log(import.meta.env.VITE_TOP_SECRET);
  return <Navigation />;
}

export default App;
