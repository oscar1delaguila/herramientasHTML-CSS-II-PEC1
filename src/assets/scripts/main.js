/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {

  
  const idIdiomas  = document.getElementById("idiomas");
  idIdiomas.addEventListener('click', hasDisplayContainer);

  const idPersonalidad  = document.getElementById("personalidad");
  idPersonalidad.addEventListener('click', hasDisplayContainer);

  const idExperiencia = document.getElementById("experiencia");
  idExperiencia.addEventListener('click', hasDisplayContainer);

  const idDatosPersonales  = document.getElementById("datos-personales");
  idDatosPersonales.addEventListener('click', hasDisplayContainer);

  const idEstudiosAcademicos  = document.getElementById("estudios-academicos");
  idEstudiosAcademicos.addEventListener('click', hasDisplayContainer);

  const idQueBusco = document.getElementById("que-busco");
  idQueBusco.addEventListener('click', hasDisplayContainer);





} )();

function changeColor(menuTargetOption) {


  const element = document.getElementById(menuTargetOption.lastElementChild.id);

  if (element.style.borderLeftColor === 'blue') {

    element.style.borderLeftColor = 'darkblue';

  }  else {

    element.style.borderLeftColor = 'blue';

  }

}


function hasDisplayContainer(event) {


  idClicked = event.target.parentElement.id ;

   

  if (idClicked === "datos-personales") {

    idElementContainer = document.querySelector("section div.container:nth-child(" + 1 + ")");

  } else if (idClicked ==="idiomas") {

    idElementContainer = document.querySelector("section div.container:nth-child(" + 3 + ")");

  } else if (idClicked ==="estudios-academicos") {

    idElementContainer = document.querySelector("section div.container:nth-child(" + 2 + ")");

  } else if (idClicked ==="experiencia"){

    idElementContainer = document.querySelector("section div.container:nth-child(" + 4 + ")");

  } else if (idClicked ==="personalidad"){

    idElementContainer = document.querySelector("section div.container:nth-child(" + 5 + ")");

  } else {

    idElementContainer = document.querySelector("section div.container:nth-child(" + 6 + ")");

  }
  


  let elementClasses = idElementContainer.classList;

  if (elementClasses.contains("u-visualize-container")) {

      idElementContainer.classList.replace("u-visualize-container","u-no-visualize-container");

  } else {

      idElementContainer.classList.replace("u-no-visualize-container","u-visualize-container");

  }

  changeColor(event.target.parentElement);

}
