import './App.css';
//import do componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Event from './components/Event';
//import de imagem
import gatinho from './assets/gatinhodandoalingua.jpg';


function App() {
  return (
    
    <div className="App">
      <p>Fundamentos do React</p>
      
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Event/>

      <br />

      <div className="containergato">
        <img src={gatinho} alt="Gatinho dando a língua" className="imagem"/>
      </div>
    </div>
  );
}

export default App;
