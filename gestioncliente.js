let contador = 0;
const autos = new Map();

const addButton = document.getElementById('boton');
addButton.addEventListener('click', function() {
  contador += 1;

  const idNumber = document.getElementById('idnumber').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const placa = document.getElementById('placa').value;
  const tipo = document.getElementById('tipo').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  document.getElementById('idnumber').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('placa').value = '';
  document.getElementById('tipo').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('telefono').value = '';

  const auto = {
    id: idNumber,
    nombre: nombre,
    apellido: apellido,
    placa: placa,
    tipo: tipo,
    correo: correo,
    telefono: telefono
  };

  autos.set(idNumber, auto);
  mostrarauto(idNumber, auto);
});

function mostrarauto(idNumber, auto) {
  const tabla = document.getElementById('tbody');
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.textContent = idNumber;

  const td2 = document.createElement('td');
  td2.textContent = auto.nombre;

  const td3 = document.createElement('td');
  td3.textContent = auto.apellido;

  const td4 = document.createElement('td');
  td4.textContent = auto.placa;

  const td5 = document.createElement('td');
  td5.textContent = auto.tipo;

  const td6 = document.createElement('td');
  td6.textContent = auto.correo;

  const td7 = document.createElement('td');
  td7.textContent = auto.telefono;

  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('float-sm-str', 'btn', 'btn-outline-dark');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    autos.delete(idNumber);
    tr.remove();
  });

 //create update button
 const updateButton = document.createElement('button');
  updateButton.classList.add('float-sm-str', 'btn', 'btn-outline-dark');
  updateButton.textContent = 'Actualizar';
  updateButton.setAttribute('data-bs-toggle', 'modal');
  updateButton.setAttribute('data-bs-target', '#');
  updateButton.setAttribute('type', 'button');
  updateButton.addEventListener('click', function() {
    updateauto(tr);
  });

  const td8 = document.createElement('td');
  td8.classList.add("gp")
  td8.appendChild(deleteButton);

  const td9 = document.createElement('td');
  td9.classList.add("gp")//this is too much
  td8.appendChild(updateButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tr.appendChild(td9);

  tabla.appendChild(tr);
};

function updateauto(row) {
  var id = row.cells[0].innerHTML;
  var name = prompt('Ingrese el nombre:', row.cells[1].innerHTML);
  var surname = prompt('Ingrese el apellido:', row.cells[2].innerHTML);
  var placa = prompt('Inglese la placa:', row.cells[3].innerHTML);
  var tipe = prompt('ingrese el tipo de vehiculo:', row.cells[4].innerHTML);
  var email = prompt('Ingrese su correo:', row.cells[5].innerHTML);
  var phone = prompt('Ingrese su numero telefonico:', row.cells[6].innerHTML);

  row.cells[1].innerHTML = name;
  row.cells[2].innerHTML = surname;
  row.cells[3].innerHTML = placa;
  row.cells[4].innerHTML = tipe;
  row.cells[5].innerHTML = email;
  row.cells[6].innerHTML = phone;
  
};


function displayPerson() {
    var idInput = document.getElementById("idbuscar").value;
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








// // const agregar=new Map();


// var contador =0
// const boton = document.getElementById('boton');
// boton.addEventListener('click', function(){
//     contador+=1
//     //traigo variables
//     let idnumber=document.getElementById("idnumber").value
//     let nombre=document.getElementById("nombre").value
//     let apellido=document.getElementById("apellido").value
//     let telefono=document.getElementById("telefono").value
//     let email=document.getElementById("email").value
//     let fechanacimiento=document.getElementById("fechanacimiento").value
//     let nacionalidad=document.getElementById("nacionalidad").value


//     //limpiar consola

//     // agregar.set(idnumber,{nombre, apellido, telefono, email, fechanacimiento, nacionalidad});
//     // mostrarauto();

//     document.getElementById("idnumber").value = "";
//     document.getElementById("nombre").value = "";
//     document.getElementById("apellido").value = "";
//     document.getElementById("telefono").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("fechanacimiento").value = "";
//     document.getElementById("nacionalidad").value = "";


// // function mostrarauto(){

//     let tabla=document.getElementById("tbody")

//     //creo etiquetas de la tabla
//     let tr=document.createElement("tr")
//     //me crea etiquetas vacias
//     // let td1=document.createElement("td")
//     let td2=document.createElement("td")
//     let td3=document.createElement("td")
//     let td4=document.createElement("td")
//     let td5=document.createElement("td")
//     let td6=document.createElement("td")
//     let td7=document.createElement("td")
//     let td8=document.createElement("td") 

    
//      /*boton de eliminar */
//     let td9=document.createElement("button");
//     td9.classList.add("float-sm-str", "btn", "btn-outline-dark");
//     td9.textContent = "Eliminar";
//     td9.addEventListener('click', function() {
//         // agregar.delete(idnumber);
//         // mostrarauto();
//         tr.remove();
        
//     });
//     let td10=document.createElement("td");
//     td10.appendChild(td9)

//     /*boton modificar*/
//     let td11=document.createElement("td") 
//     let td12=document.createElement("button")
//     td12.classList.add("float-sm-str", "btn", "btn-outline-dark");
//     td12.textContent = "Update";
//     td12.setAttribute("data-bs-toggle", "modal");
//     td12.setAttribute("data-bs-target", "#updateModal" )
//     const boton8 = document.getElementById('boton8');
//     boton8.addEventListener('click', function() {



//         // Obtén los elementos de entrada desde el modal
//         let idInput = document.getElementById("idnumber1").value;
//         let nameInput = document.getElementById("nombre2").value;
//         let surnameInput = document.getElementById("apellido3").value;
//         let phoneInput = document.getElementById("telefono4").value;
//         let emailInput = document.getElementById("email5").value;
//         let birthdateInput = document.getElementById("fechanacimiento6").value;
//         let nationalityInput = document.getElementById("nacionalidad7").value;




//         td2.textContent = idInput;
//         td3.textContent = nameInput;
//         td4.textContent = surnameInput;
//         td5.textContent = phoneInput;
//         td6.textContent = emailInput;
//         td7.textContent = birthdateInput;
//         td8.textContent = nationalityInput;
    
        
    
//         tabla.appendChild(tr)
        

        
//         let closeButton = document.querySelector(".close-button"); // Replace with the selector for your modal's close button
//         closeButton.click();
//     });

//     td10.appendChild(td12) 

//     // let eliminarbtn=document.createElement("button");
//     // eliminarbtn.classList.add("btn btn-primary ");
//     // eliminarbtn.textContent="Eliminar";
//     // eliminarbtn.addEventListener("click", function(){
//     //     tr .remove
//     // })


//     // td9.innerHTML='<button type="button"  class="btn btn-primary ">Eliminar</button> ' + ' <button type="button" class="btn btn-primary ">Modificar</button>'

//     // // creo nodos texto
//     // let contadorr = document.createTextNode(contador)
//     let contadorr = document.createTextNode(contador)
//     let idnumberr = document.createTextNode(idnumber)
//     let nombree=document.createTextNode(nombre)
//     let apellidoo=document.createTextNode(apellido)
//     let telefonoo=document.createTextNode(telefono)
//     let emaill=document.createTextNode(email)
//     let fechanacimientoo=document.createTextNode(fechanacimiento)
//     let nacionalidadd=document.createTextNode(nacionalidad)



//     tr.setAttribute("id", contador)

//     // let filaUltima=document.getElementById("ultima")

//     // td1.appendChild(contadorr)
//     td2.appendChild(idnumberr)
//     td3.appendChild(nombree)
//     td4.appendChild(apellidoo)
//     td5.appendChild(telefonoo)
//     td6.appendChild(emaill)
//     td7.appendChild(fechanacimientoo)
//     td8.appendChild(nacionalidadd)
//     // td9.appendChild(eliminarbtn)
    

//     // tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     tr.appendChild(td5)
//     tr.appendChild(td6)
//     tr.appendChild(td7)
//     tr.appendChild(td8)
//     tr.appendChild(td10)
//     tr.appendChild(td11)
    


//     tabla.appendChild(tr)
// })


// // const consultarBtn = document.getElementById('buscarr');
// // consultarBtn.addEventListener('click', function() {
// //     let idconsultar= document.getElementById('idnumber').value;
// //     let tabla =document.getElementById(idnumber)
// //     tabla.parentNode.removeChild(tabla)
// //     document.getElementById('idconsultar').value= "";


// //     const buscar = document.getElementById("buscar").value;
// //     mostrarDetallesPelicula(buscar);
// // });

// // function mostrarDetallesPelicula(idnumber) {
// //     const pelicula = peliculas.get(titulo);
// //     if (pelicula) {
// //         alert(`
// //             Título: ${titulo}
// //             Género: ${pelicula.genero}
// //             Duración: ${pelicula.duracion}
// //             Director: ${pelicula.director}
// //         `);
// //     } else {
// //         alert("La película no se encuentra en la lista.");
// //     }
// // }


// const consultarBtn = document.getElementById('buscarr');
// consultarBtn.addEventListener('click', function() {
//   let idconsultar = document.getElementById('idnumber').value;
//   let tabla = document.getElementById(idconsultar);


