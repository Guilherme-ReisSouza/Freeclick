const epDiv = document.getElementById("ep");
const ceDiv = document.getElementById("ce");
const fdDiv = document.getElementById("fd");
var filtroatual = "ep"

function filtrar(filtro) {

    filtroatual = filtro;
    if(filtroatual == "ep"){
        ceDiv.style.display = "none";
        fdDiv.style.display = "none";
        epDiv.style.display = "block";
    }
    else if(filtroatual == "ce"){
        epDiv.style.display = "none";
        fdDiv.style.display = "none";
        ceDiv.style.display = "block";
    }
    else if(filtroatual == "fd"){
        epDiv.style.display = "none";
        ceDiv.style.display = "none";
        fdDiv.style.display = "block";
    }
    else if(filtroatual == "all"){
        epDiv.style.display = "block";
        ceDiv.style.display = "block";
        fdDiv.style.display = "block";
    }
};