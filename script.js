function check(){
    var urs = document.getElementById('user').value;
    var pwd = document.getElementById('pwd').value;

    var email_regx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var upper_regx = /[A-Z]/;
    var num_regx = /\d/;
    var sp_regx = /[@]/;

    if (urs.trim() == '' || pwd.trim() == ''){
        alert("User or Password cannot be empty.");
    }
    else if (!email_regx.test(urs)){
        alert("Invalid Username.");
    }
    else if (!upper_regx.test(pwd)){
        alert("Password must have atleast one upper case.");
    }
    else if (!num_regx.test(pwd)){
        alert("Password must have atleast one number.");
    }
    else if (!sp_regx.test(pwd)){
        alert("Password must have only @ special character.");
    }else if (pwd == 'SmartServTest@123'){
        window.open('dashboard.html');
    }
}