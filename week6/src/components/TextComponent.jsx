import PropTypes from 'prop-types';

const TextComponent = ({text})=>{
    return(
      <h1>{text}</h1>
    );
};

TextComponent.propTypes = {
    text: PropTypes.string.isRequired
};

export default TextComponent;