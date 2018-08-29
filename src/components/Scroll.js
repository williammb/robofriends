import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '680px'}}>
      {props.children}
    </div>
  );
}

export { Scroll };
