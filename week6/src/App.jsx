import './App.css';
import PropTypes from 'prop-types';

const TextComponent = ()=>{
  return(
    <h1>Hi! there</h1>
  );
};
const CardWrapper = ({children})=>{

  return (
    <div className = "cardWrapper">
      {children}
    </div>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
const App = ()=>{
  return(
    <div >
      <CardWrapper>
        <h1>Ajay</h1>
      </CardWrapper>
      <CardWrapper>
        <TextComponent text = "Aman"/>
      </CardWrapper>      
    </div>
  );
};

export default App;
