
let username = document.getElementById("username");
let password = document.getElementById("password");
let flag1 = 1, flag2 = 1;

function validateFrom() {
    if (username.value == "") {

        document.getElementById("userError").innerHTML = "User Name is empty";
        flag1= 0;
    }
    else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User Name require min 3 char";
        flag1=0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag1=1;
    }


    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Password is emplty";
        flag2= 0;
    }
    else {
        document.getElementById("passError").innerHTML = "";
        flag2=1;
    }

    if(flag1&&flag2) {
        return true;
    }
    else  {
        return false;
    }
}

