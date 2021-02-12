# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Componentes y propiedades

## Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. Esta página proporciona una introducción a la idea de los componentes. Puedes encontrar una API detallada sobre componentes aquí.

###### Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

Ejemplos del codigo del Componente de Ejemplo
~~~javascript
import React from 'react';

export default function Saludar(props) {
  console.log(props);

  return(
    <div> 
      <button onClick={() => props.saludarfn(props.userInfo.nombre)}> Saludar </button>
    </div>
  )
}
~~~
# 
# Uso de la Asignación por Destructuring
## Introducción
#### Desde la Edición 2015 de la especificación ECMAScript, hay disponibles muchas nuevas funciones para el lenguaje JavaScript para trabajar con conjuntos y objetos. Algunas de las más notables que aprenderá en este artículo son desestructurar, parámetros rest y propagar sintaxis. Estas funciones ofrecen formas más directas de acceder a los miembros de una matriz o un objeto, y pueden hacer que trabajar con estas estructuras de datos sea más rápido y conciso.

#### Muchos otros lenguajes no tienen la sintaxis correspondiente para desestructurar, los parámetros rest y propagar, de forma que estas funciones pueden tener una curva de aprendizaje para los nuevos desarrolladores de JavaScript y para aquellos que provienen de otro lenguaje. En este artículo, aprenderá cómo desestructurar objetos y conjuntos, cómo usar el operador de propagación para descomprimir objetos y conjuntos y cómo usar los parámetros rest en las invocaciones de funciones.

## Desestructurar
#### La asignación de desestructurar es una sintaxis que le permite asignar propiedades de objetos o elementos de una matriz como variables. Esto puede reducir enormemente las líneas de código necesarias para manipular datos en estas estructuras. Existen dos tipos de desestructuración: desestructurar objetos y desestructurar conjuntos.

## Desestructurar objetos
#### La desestructuración de objetos permite crear nuevas variables usando una propiedad de objeto como el valor.

#### Considere este ejemplo, un objeto que representa una nota con ***id, title y date***:
~~~javascript
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
}
~~~
#### Tradicionalmente, si quería crear una nueva variable para cada propiedad, tendría que asignar cada variable individualmente, con muchas repeticiones:
~~~javascript
// Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date
~~~
#### Con la desestructuración de objetos, esto puede hacerse en una línea. Al rodear cada variable entre corchetes {}, JavaScript creará nuevas variables desde cada propiedad con el mismo nombre:
~~~javascript
// Destructure properties into variables
const { id, title, date } = note
~~~
#### Ahora console.log() las nuevas variables:
~~~javascript
console.log(id)
console.log(title)
console.log(date)
~~~
Obtendrá los valores originales de la propiedad como resultado:
~~~
Output
1
My first note
01/01/1970
~~~