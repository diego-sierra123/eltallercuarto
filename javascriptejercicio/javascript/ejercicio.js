function calcularMedia() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var parcial = document.getElementById("parcial").value;
    var trabajo = document.getElementById("trabajoFinal").value;

    if (num1 === "" || num2 === "" || num3 === "" || parcial === "" || trabajo === "") {
        document.getElementById("res").innerHTML = "<div style='padding:4%; border-radius: 8px; border: 4px solid black;'><h5 style='color: white;'><b>Por favor, complete todos los campos o ingrese todos los números en sus respectivos campos de manera correcta (Ingresar números enteros positivos).</b></h5></div>";
    } else if (num1 < 0 || num2 < 0 || num3 < 0 || parcial < 0 || trabajo < 0 || num1 > 50 || num2 > 50 || num3 > 50 || parcial > 50 || trabajo > 50 || !Number.isInteger(parseFloat(num1)) || !Number.isInteger(parseFloat(num2)) || !Number.isInteger(parseFloat(num3)) || !Number.isInteger(parseFloat(parcial)) || !Number.isInteger(parseFloat(trabajo))) {
        document.getElementById("res").innerHTML = "<div style='padding:4%; border-radius: 8px; border: 4px solid black;'><h5 style='color: white;'><b>Por favor, ingrese números enteros positivos entre 0 a 50 en todos los campos para poder calcular el promedio final de la materia de algoritmos.</b></h5></div>";
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);
        parcial = parseInt(parcial);
        trabajo = parseInt(trabajo);

        var promedioTalleres = (num1 + num2 + num3) / 3;
        var porcentajeTalleres = promedioTalleres * 0.55;
        var porcentajeParcial = parcial * 0.3;
        var porcentajeTrabajo = trabajo * 0.15;
        var promedioFinal = porcentajeTalleres + porcentajeParcial + porcentajeTrabajo;

        if (promedioTalleres % 1 === 0) {
            promedioTalleres = promedioTalleres.toFixed(0);
        } else {
            promedioTalleres = promedioTalleres.toFixed(2);
        }

        if (porcentajeTalleres % 1 === 0) {
            porcentajeTalleres = porcentajeTalleres.toFixed(0);
        } else {
            porcentajeTalleres = porcentajeTalleres.toFixed(2);
        }

        if (porcentajeParcial % 1 === 0) {
            porcentajeParcial = porcentajeParcial.toFixed(0);
        } else {
            porcentajeParcial = porcentajeParcial.toFixed(2);
        }

        if (porcentajeTrabajo % 1 === 0) {
            porcentajeTrabajo = porcentajeTrabajo.toFixed(0);
        } else {
            porcentajeTrabajo = porcentajeTrabajo.toFixed(2);
        }
        document.getElementById("res").innerHTML =
            "<div class='row' style='padding:4%; border-radius: 20px; border: 4px solid black;'>" +
            "<table style='border-collapse: collapse; border: 2px solid black;'>" +
            "<tbody>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Promedio de los tres talleres:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + promedioTalleres + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Nota del parcial:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + parcial + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Nota del trabajo final:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + trabajo + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Porcentaje de los talleres en el promedio final:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + porcentajeTalleres + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Porcentaje del parcial en el promedio final:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + porcentajeParcial + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Porcentaje del trabajo final en el promedio final:</b></td>" +
            "<td class='text-dark' style='border: 2px solid black; text-align: left;'><b>" + porcentajeTrabajo + "</b></td>" +
            "</tr>" +
            "<tr>" +
            "<td class='text-white' style='border: 2px solid black; text-align: left;'><b>Promedio final de la materia de algoritmos:</b></td>" +
            "<td class='text-danger' style='border: 2px solid black; text-align: left;'><b>" + promedioFinal.toFixed(0) + "</b></td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</div>";
    }
}

function borrar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("parcial").value = "";
    document.getElementById("trabajoFinal").value = "";
    document.getElementById("res").innerHTML = "";
}
