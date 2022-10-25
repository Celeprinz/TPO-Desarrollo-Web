function validateForm() {
  
    let a = document.forms["form"]["nombre"].value;
    let b = document.forms["form"]["apellido"].value;
    let c = document.forms["form"]["dni"].value;
    let d = document.forms["form"]["fecha"].value;
    let e = document.forms["form"]["correo"].value;

    if (a === "") {
      alert("Debe completar su nombre.");
      return false;
    } 
    if (b === "") {
      alert("Debe completar su apellido.");
      return false;
    } 
    if (c === "") {
      alert("Debe completar su DNI.");
      return false;
    } 
    if (d === "") {
      alert("Debe completar su fecha de nacimiento.");
      return false;
    } 
    if (e === "") {
      alert("Debe completar su correo electrónico.");
      return false;
    } 


      else {
        let x = document.forms["form"]["cv"].value; 
        if (x === "") {
          alert("No olvide adjuntar su CV");
          return false;
        }
      }

  } 


