function checkPasswordMatch() {
    var password = document.getElementById("contraseña").value;
    var confirmPassword = document.getElementById("confirmar-contraseña").value;

    if (password != confirmPassword) {
        document.getElementById("password-match").innerHTML = "Las contraseñas no coinciden. Introduce el mismo valor".fontcolor("red").fontsize("2px");
    }
    else{
        document.getElementById("password-match").innerHTML = "";
    }
  }