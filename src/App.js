//import logo from './logo.svg';
import favicon from "./assets/imgs/logo_250px.png";
import './App.css';
import ContactList from './container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={ logo } className="App-logo" alt="logo" /> */}
        <img src={favicon} className="App-logo" alt="logo"/>
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
