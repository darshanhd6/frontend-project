import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, content, handles, style }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
      <div>{content.title}</div>
      <div>{content.body}</div>
      
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        /> 
      ))}
    </div>
  );
};

export default BaseNode;
