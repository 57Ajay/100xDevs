import './App.css';
import CardWrapper from './components/CardWrapper';
import TextComponent from './components/TextComponent';

const App = ()=>{
  return(
    <div >
      <CardWrapper>
        <h1>Ajay</h1>
      </CardWrapper>
      <CardWrapper>
        <TextComponent text="This is Ajay"/>
      </CardWrapper>
           
    </div>
  );
};

export default App;
