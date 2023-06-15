let contador = 0;
const servicios = new Map();

const addservicio = document.getElementById('botonservicio');
addservicio.addEventListener('click', function() {
  contador += 1;

  const idSer = Math.floor(Math.random() * 90000) + 10000;
  const nombreser = document.getElementById('nombreser').value;
  const valorser = document.getElementById('valorser').value;
  const descripcionser = document.getElementById('descripcionser').value;
  const puntosser = document.getElementById('puntosser').value;
  
  

  // document.getElementById('idser').value = '';
  document.getElementById('nombreser').value = '';
  document.getElementById('valorser').value = '';
  document.getElementById('descripcionser').value = '';
  document.getElementById('puntosser').value = '';
 
  

  const servicio = {
    id: idSer,
    nombreser: nombreser,
    valorser: valorser,
    descripcionser: descripcionser,
    puntosser: puntosser,
    
   
  };

  servicios.set(idSer, servicio);
  mostrarservicio(idSer, servicio);
});

function mostrarservicio(idSer, servicio) {
  const tabla = document.getElementById('tbody');
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.textContent = idSer;

  const td2 = document.createElement('td');
  td2.textContent = servicio.nombreser;

  const td3 = document.createElement('td');
  td3.textContent = servicio.valorser;

  const td4 = document.createElement('td');
  td4.textContent = servicio.descripcionser;

  const td5 = document.createElement('td');
  td5.textContent = servicio.puntosser;

  // const td6 = document.createElement('td');
  // td6.textContent = servicio.fechasalida;

  // const td7 = document.createElement('td');
  // td7.textContent = servicio.fechallegada;

  // const td8 = document.createElement('td');
  // td7.textContent = servicio.fechallegada;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('float-sm-str', 'btn', 'btn-outline-dark');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    servicios.delete(idSer);
    tr.remove();
  });

  const updateButton = document.createElement('button');
  updateButton.classList.add('float-sm-str', 'btn', 'btn-outline-dark');
  updateButton.textContent = 'Actualizar';
  updateButton.setAttribute('data-bs-toggle', 'modal');
  updateButton.setAttribute('data-bs-target', '#');
  updateButton.setAttribute('type', 'button');
  updateButton.addEventListener('click', function() {
    updateservicio(tr);
  });

  const td6 = document.createElement('td');
  td6.classList.add('gp');
  td6.appendChild(deleteButton);

  const td7 = document.createElement('td');
  td7.classList.add('gp');
  td6.appendChild(updateButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  // tr.appendChild(td8);
  // tr.appendChild(td9);
  // tr.appendChild(td10);

  tabla.appendChild(tr);
}


function updateservicio(row) {
  var id = row.cells[0].innerHTML;
  var ser = prompt('Ingrese nombre del servicio:', row.cells[1].innerHTML);
  var value = prompt('Ingrese el valor del servicio:', row.cells[2].innerHTML);
  var descrip = prompt('Descripcion del servicio:', row.cells[3].innerHTML);
  var sct = prompt('ingrese los puntos optenidos por el servicio:', row.cells[4].innerHTML);
 

  row.cells[1].innerHTML = ser;
  row.cells[2].innerHTML = value;
  row.cells[3].innerHTML = descrip;
  row.cells[4].innerHTML = sct;
  
  
}


function displayservicio() {
    var idInput = document.getElementById("idbuscarservicio").value;
    var table = document.getElementById("tbody");
    var rows = table.getElementsByTagName("tr");

    // Iterate over each row in the table
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var id = row.cells[0].innerText;

        if (id === idInput) {
            // Display the row if the ID matches the input
            row.style.display = "";
        } else {
            // Hide the row if the ID doesn't match the input
            row.style.display = "none";
        }
    }
}

