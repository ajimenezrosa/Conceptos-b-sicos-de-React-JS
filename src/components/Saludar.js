import React from 'react';


export default function Saludar(props) {
  console.log(props.userInfo);

  return(
    <div> 
      <p>
        Hola {props.userInfo.nombre} , tiene {props.userInfo.edad} Años ,
        su color favorito es el {props.userInfo.color}
      </p>
    </div>
  )
}