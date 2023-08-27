import React from 'react';

 const ColorOption = ({ color, onClick }) => {
  const style = {
    backgroundColor: color,
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    margin: '5px',
  };

  return <div style={style} onClick={() => onClick(color)} />;
};

export default ColorOption;