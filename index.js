let operacion = "";

    while (operacion !== "salir") {
      operacion = prompt("Escribe la operación a realizar (suma, resta, multiplicación, división) o escribe 'salir' para terminar:");

      if (operacion === "salir") {
        alert("¡Hasta pronto!");
        break;
      }

      let n1 = parseFloat(prompt("Ingresa el primer número:"));
      let n2 = parseFloat(prompt("Ingresa el segundo número:"));

      let resultado = realizarOperacion(n1, n2, operacion);
      alert("Resultado: " + resultado);
    }

    function realizarOperacion(num1, num2, operacion) {
      if (
        operacion !== "suma" &&
        operacion !== "resta" &&
        operacion !== "multiplicación" &&
        operacion !== "división"
      ) {
        return "Error: operación no válida.";
      }

      if (operacion === "división" && num2 === 0) {
        return "Error: no se puede dividir por cero.";
      }

      switch (operacion) {
        case "suma":
          return num1 + num2;
        case "resta":
          return num1 - num2;
        case "multiplicación":
          return num1 * num2;
        case "división":
          return num1 / num2;
      }
    }