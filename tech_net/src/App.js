import logo from './logo.svg';
import './App.css';
import { TestButton } from './TestButton.js';
import { LoginForm } from './LoginForm.js';
import { PageNavigation } from './PageNavigation.js';
import { WelcomePage } from './WelcomePage.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageNavigation />
      </header>
      <div className="pageContainer">
        <WelcomePage />
      </div>
    </div>
  );
}

export default App;
