import PropTypes from 'prop-types';

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

export default CardWrapper;