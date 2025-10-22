import './App.css';
//import do componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <p>Fundamentos do React</p>
      
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Event/>

    </div>
  );
}

export default App;
