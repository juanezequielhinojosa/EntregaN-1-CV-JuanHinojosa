/* Esta funcion hace el llamado a la api y obtiene los datos */
async function obtenerDatos(direccion) {
    try {
      let response = await fetch(direccion);
      let apiResponse = await response.json();
      console.log(apiResponse);
      
      let nombre = apiResponse.results[0].name.first;
      let apellido = apiResponse.results[0].name.last;
      let nombreApellido = nombre + " " + apellido;
      let email = apiResponse.results[0].email;
      let cel = apiResponse.results[0].phone;
      let ciudad = apiResponse.results[0].location.city;
      let pais = apiResponse.results[0].location.country;
      let edad = apiResponse.results[0].dob.age;
      let imgUrl = apiResponse.results[0].picture.large;
     
      /**Aqui se agregan los datos obtenidos al documento html */
      document.getElementById("nombreApellido").innerHTML = nombreApellido;
      document.getElementById("photo").innerHTML = `<img src="${imgUrl}" alt="Foto de una persona">`;
      document.getElementById("nombre").innerHTML = " " + nombre;
      document.getElementById("email").innerHTML = " " + email;
      document.getElementById("celular").innerHTML = " " + cel;
      document.getElementById("direccion").innerHTML = " " + ciudad + " " + pais;
    } catch {
      console.log("Error");
    }
  }
  
  const direccion = "https://randomuser.me/api/?results=1";
  document.addEventListener("DOMContentLoaded", obtenerDatos(direccion));
  