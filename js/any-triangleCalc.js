function vinkelBeregner() {
    document.getElementById("calculateVinkel").onclick = function () {
        var A = parseFloat(document.getElementById('vinkelA').value);
        var B = parseFloat(document.getElementById('vinkelB').value);
        var C = parseFloat(document.getElementById('vinkelC').value);
        var a = parseFloat(document.getElementById('sidea').value);
        var b = parseFloat(document.getElementById('sideb').value);
        var c = parseFloat(document.getElementById('sidec').value);

// Calculation setup

        function findSidsteVinkel() {
            if (A && B) { // 1
                document.getElementById('vinkelC').value = 180 - A - B;
            } else if (A && C) { // 2
                document.getElementById('vinkelB').value = 180 - A - C;
            } else if (B && C) { // 3
                document.getElementById('vinkelA').value = 180 - B - C;
            }
        }

        function sinusRelation() {
            if (a && A && C) { // 1
                document.getElementById('sidec').value = (Math.sin(C) * a) / Math.sin(A).toFixed(3); //FIXME: Returns a wrong number
           } else if (A && a && b) { // 2
                document.getElementById('vinkelB').value = (Math.asin( (sin(A)*b) /a) )*(180/Math.PI).toFixed(3); //FIXME: Doesnt return anything (calculation.js:464 Uncaught ReferenceError: sin is not defined??)
           }
        }

// Call the setup funcrions - then print result in input boxes

        if (A && B && C) {
            alert('Kan ikke udregne trekanten med kun 3 vinkler. Der skal være mindst en side')
        }

        else if (a && b && c) {
            document.getElementById('vinkelA').value = (180*Math.acos((b*b+c*c-a*a)/(2*b*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelB').value = (180*Math.acos((a*a+c*c-b*b)/(2*a*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelC').value = (180*Math.acos((a*a+b*b-c*c)/(2*a*b))/Math.PI).toFixed(3);
        }

        // Nothing happens in this if statement of some reason but it is entered
        else if (A && a && b) {
            sinusRelation(); // Angle B (sinus 2)
            B = document.getElementById('vinkelB').value; // Gets angle B from last calculation
            findSidsteVinkel(); // Angle C (vinkel 1)
            sinusRelation(); // Side c (sinus 1)
        }

        else if (A && a && c) {

        }

        else if (A && a && b) {

        }

        // Works!! but check side c's math and remake temp_B
        else if (a && A && C) {
            sinusRelation(); // Side c (sinus 1)
            findSidsteVinkel(); // Angle B (sinus 2)
            var temp_B = document.getElementById('vinkelB').value; // Gets angle B from last calculation
            document.getElementById('sideb').value = (Math.sin(temp_B)*a)/Math.sin(A); // Side b
        }

        else {
            alert('Ikke nok/Forkert information')
        }
    }

    document.getElementById("clearVinkelberegner").onclick = function () {
        document.getElementById('vinkelA').value = '';
        document.getElementById('vinkelB').value = '';
        document.getElementById('vinkelC').value = '';
        document.getElementById('sidea').value = '';
        document.getElementById('sideb').value = '';
        document.getElementById('sidec').value = '';
    }
}