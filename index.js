// Sample servi data
var costumerlist = [
    {
        nombre: "Carlos Humberto Gonzalez Leal",
        servicio:"polichada"
 
    },
    {
        nombre: "Ana Atuesta",
        servicio:"lavado"
        
       
    },
    {
        nombre: "Juan perez",
        servicio:"mantenimineto" 
    },

    {
        nombre: "Diego Leal",
        servicio:"polichada " 
    },
    
];


function searchserv() {
    // Retrieve the entered values
    var nombre = document.getElementById("nombre").value;
    var servicio = document.getElementById("servicio").value;
   

    // Filter the servi data based on the entered values
    var filteredcpoust = costumerlist.filter(function (servi) {
        return servi.nombre.toLowerCase() === nombre.toLowerCase() &&
        servi.servicio.toLowerCase() === servicio.toLowerCase() ;
    });

    // Display the filtered servi information//call parent
    var resultDiv = document.getElementById("serviciooResults");
    resultDiv.innerHTML = "";

    if (filteredcpoust.length > 0) {
        filteredcpoust.forEach(function (servi) {
            var serviInfo = document.createElement("p");
            serviInfo.textContent =
                "nombre: " + servi.nombre + ", servicio: " + servi.servicio ;

            var purchaseBtn = document.createElement("button");
            purchaseBtn.setAttribute("type", "button");
            purchaseBtn.setAttribute("class", "btn btn-primary mx-2")
            //type="button" class="btn btn-primary mx-2"
            purchaseBtn.textContent = "Purchase";
            purchaseBtn.addEventListener("click", function () {
                purchaseservi(servi);
            });

            resultDiv.appendChild(serviInfo);
            resultDiv.appendChild(purchaseBtn);
        });
    } else {
        var noResult = document.createElement("p");
        noResult.textContent = "No servicios found.";
        resultDiv.appendChild(noResult);
    }
}

function purchaseservi(servi) {
    // Perform the purchase logic here
    // ...
    
    // Display the "Purchase Successful" message
    alert("Purchase Successful");

    // Reset the input values
document.getElementById("nombre").value ="";
document.getElementById("servicio").value ="";   
}


// function ecuacion(){
//     if (nombre == polichada){
//         var cuesta=((50*0.6)-50)+((50*0.14)+50)
        
//     }else if(nombre ==lavado){
//         cuesta=((100*0.6)-100)+((100*0.14)+100)
//     }else{
//         cuesta=((150*0.6)-150)+((150*0.14)+150)
//     }
// }