<<<<<<< HEAD
  
import React from 'react';
import './Button.css';

const Button = ({ loadMore }) => {
  return (
    <div className="load_more">
      <button className="Button" type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

=======
  
import React from 'react';
import './Button.css';

const Button = ({ loadMore }) => {
  return (
    <div className="load_more">
      <button className="Button" type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

>>>>>>> e032552d71e3a59588ddf32d9a6561dc6ae9c4a6
export default Button;