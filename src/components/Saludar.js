import React from 'react';


export default function Saludar(props) {
  const {userInfo , saludarfn} = props;
  const { nombre = "Anonimo" } = userInfo;
  console.log(userInfo);
  console.log(saludarfn);

  return(
    <div> 
      <button onClick={() => saludarfn(nombre)}> Saludar </button>
    </div>
  )
}