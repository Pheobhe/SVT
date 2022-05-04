
# 📓 S V T  ➡️


![Screenshot](https://user-images.githubusercontent.com/88856308/165524046-c7a097d3-77a5-4404-8b55-d073de98d60f.png)

<br/>
<p align="center">
    <a href="https://SVT.io/" target="_blank">
       <img src="https://user-images.githubusercontent.com/88856308/166707385-6815acb8-ee4c-4735-99bd-5e8b76aa647e.gif">
       </a>
</p>

<br/>


El objetivo de este sistema es proveer una interfaz segura para la visualización de tableros de PowerBI, con la finalidad de sumar capas de seguridad a la visualización de estos tableros, a partir de 1) autenticación y 2) enmascaramiento de url del tablero.



<p align="center">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/pheobhe/svt/master?color=yellow&label=Checks&style=plastic">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/pheobhe/svt/master?color=orange&label=Branches&style=plastic">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pheobhe/svt?color=yellow&label=Languajes&style=plastic">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/pheobhe/svt?style=plastic">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/pheobhe/svt?color=FF5733&label=Size&style=plastic">
    <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/pheobhe/svt/total?color=bbff33&label=Download&style=plastic">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/pheobhe/svt?label=Issues&style=plastic">
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/pheobhe?logoColor=8dfe55&style=social">
</p>
<br/>

 
Proyecto iniciado con [Create React App](https://github.com/facebook/create-react-app).

<br/>
<p align="center">
    <a href="https://SVT.io/" target="_blank">
        <img width="50%" src="https://user-images.githubusercontent.com/88856308/162249053-f55a6626-f1f4-44f8-a879-4d92658803ed.png">
    </a>
</p>

<br/>

## 🧱&nbsp; Stack 
El backend está implementado con [Strapi](https://strapi.io/), que es un [headless CMS](https://ed.team/blog/que-es-un-headless-cms-y-en-que-se-diferencia-de-un-cms-comun), con base de datos Postgres. Por otro lado, el front está hecho con React.
Toda la aplicación está dockerizada, por ahora en un solo entorno.

## 🌵&nbsp; Características 
Existen dos tipos de roles de usuario: admin y usuario.
<ul>
 <li> El admin tiene los permisos para crear, editar y eliminar usuarios, grupos y tableros. Los grupos son asignaciones fáciles a usuarios de una selección de tableros agrupados. </li>

  <li>Los usuarios solo pueden ver los tableros asignados.</li>
</ul>
<h3 dir="auto" data-sourcepos="19:1-19:23">
<a aria-hidden="true" href="#monitoreo-de-errores" class="anchor" id="user-content-monitoreo-de-errores"></a>Monitoreo de errores</h3>
 
Para monitorear los errores, el sistema utiliza , una implementacion gratuita de Sentry. Se accede al panel de monitoreo a través de https://reportes.mjus.gba.gob.ar, con usuario y contraseña de la dirección de Desarrollo.


## ✅&nbsp;  Montaje de la aplicación 

Para trabajar sobre el proyecto, recordar siempre que hacemos modificaciones a partir de issues, creando nuevas ramas, siempre partiendo de la rama develop. No trabajamos sobre master / main.
Hay un backup de base de datos, que se inicializa en docker por entrypoint. Para levantar el proyecto, luego de clonar el proyecto:
<p dir="auto" data-sourcepos="28:1-30:19">
  <code>git checkout develop</code>
  <code>docker-compose build</code>
  <code>docker-compose up</code>
</p>

## 🌟&nbsp; `npm start` 

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

## 🧪&nbsp; `npm test` 

Consulte la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

## 🏗️&nbsp; `npm run build` 

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!

Consulte la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

## 🚀&nbsp;  `npm run eject` 

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En cambio, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos, excepto "expulsar", seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto estás por tu cuenta.

No tienes que usar nunca `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para hacerlo.

## 📫&nbsp; Aprende más 

Puedes aprender más en el  [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, echa un vistazo a la[React documentation](https://reactjs.org/).

