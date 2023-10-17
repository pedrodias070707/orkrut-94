function addUser(){
    var inputName = document.getElementById("inputLogin").value;
    localStorage.setItem("inputLogin",inputName);
    window.location="ourkrut_page.html"
    
    }