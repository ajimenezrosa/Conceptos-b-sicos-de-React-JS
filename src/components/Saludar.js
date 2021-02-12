import React from 'react';


export default function Saludar(props) {
  const {userInfo , saludarfn} = props;
  console.log(userInfo);
  console.log(saludarfn);

  return(
    <div> 
      <button onClick={() => saludarfn(userInfo.nombre)}> Saludar </button>
    </div>
  )
}