let headerComponent = document.createElement('div');
headerComponent.className = "header";  

let icono_header = document.createElement('div');
icono_header.className = 'icono_header';
icono_header.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
    <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
  </svg>
`;

let title= document.createElement('div');  
title.className = 'title'; 
title.innerText = "Multitasking";

let searchContainer = document.createElement('div');
searchContainer.className = 'search';
searchContainer.innerHTML = `<input type="text" class="input_search">`;

let contenedor_icon_header = document.createElement('div');
contenedor_icon_header.className = 'contenedor_icon_header';

let icon1 = document.createElement('div');
icon1.className = 'icon1';
icon1.innerHTML = `
  <svg class="addtask" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
  </svg>
`;

let icon2 = document.createElement('div');
icon2.className = 'icon2';
icon2.innerHTML = `
  <svg class="foto_perfil" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
    <path d="M480-420q-68 0-123.5 38.5T276-280h408q-25-63-80.5-101.5T480-420Zm-168-60 44-42 42 42 42-42-42-42 42-44-42-42-42 42-44-42-42 42 42 44-42 42 42 42Zm250 0 42-42 44 42 42-42-42-42 42-44-42-42-44 42-42-42-42 42 42 44-42 42 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
  </svg>
`;

let downloadButton = document.createElement('button');
downloadButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>`
downloadButton.className = "download-btn";

downloadButton.addEventListener('click', () => {
  let seccionTareas = document.querySelector('.contenedorTareas');
  if (seccionTareas) {
    html2canvas(seccionTareas).then((canvas) => {
      let link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'tareas.png';
      
      link.click();
    }).catch((error) => {
      console.error('Error capturando la imagen con html2canvas:', error);
      alert("Ocurrió un error al intentar descargar la imagen.");
    });
  } else {
    alert("No se encontró la sección de tareas.");
  }
});

// Agrega el botón de descarga al header
headerComponent.appendChild(downloadButton);

export { downloadButton };

contenedor_icon_header.appendChild(icon1);
contenedor_icon_header.appendChild(icon2);

headerComponent.appendChild(icono_header);
headerComponent.appendChild(title);
headerComponent.appendChild(searchContainer);
headerComponent.appendChild(contenedor_icon_header);

export { icon1, headerComponent };
