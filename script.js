
        function Somar() {

            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
            var resultado = num1 + num2;

            document.getElementById("result").innerHTML = resultado;

            console.log("" +num1 +""+num2 );
            console.log(resultado);
        }

        function Subtrair() {

            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
            var resultado = num1 - num2;

            document.getElementById("result").innerHTML = resultado;

            console.log("" +num1 +""+num2 );
            console.log(resultado);
        }

        function Dividir() {

            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
            var resultado = num1 / num2;

            document.getElementById("result").innerHTML = resultado;

            console.log("" +num1 +""+num2 );
            console.log(resultado);
        }

        function Multiplicar() {

            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
            var resultado = num1 * num2;

            document.getElementById("result").innerHTML = resultado;

            console.log("" +num1 +""+num2 );
            console.log(resultado);
        }