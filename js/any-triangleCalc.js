function vinkelBeregner() {
    document.getElementById("calculateVinkel").onclick = function () {
        var A = parseFloat(document.getElementById('vinkelA').value);
        var B = parseFloat(document.getElementById('vinkelB').value);
        var C = parseFloat(document.getElementById('vinkelC').value);
        var a = parseFloat(document.getElementById('sidea').value);
        var b = parseFloat(document.getElementById('sideb').value);
        var c = parseFloat(document.getElementById('sidec').value);



        function definedSides() {
            ([a, b, c].filter(s => !isNaN(s)).length === 2)
            a = document.getElementById('sidea').value;
            b = document.getElementById('sideb').value;
            c = document.getElementById('sidec').value;

        }


            if ([A, B, C].filter(s => !isNaN(s)).length === 3) {
                alert('Kan ikke udregne trekanten med kun 3 vinkler. Der skal være mindst en side');
            } else if ([A, B, C].filter(s => !isNaN(s)).length === 2) {
                if (A && B) {
                    document.getElementById('vinkelC').value = 180 - A - B;
                } else if (A && C) {
                    document.getElementById('vinkelB').value = 180 - A - C;
                } else if (B && C) {
                    document.getElementById('vinkelA').value = 180 - B - C;
                }
            } else if ([A, B, C].filter(s => !isNaN(s)).length === 1) {
                A = document.getElementById('vinkelA').value;
                B = document.getElementById('vinkelB').value;
                C = document.getElementById('vinkelC').value;
                if (A && !B && !C) {
                    //definedSides();
                    if (a && b && !c) {
                        document.getElementById('vinkelB').value = (Math.asin((Math.sin(A)*b)/a))*(180/Math.PI);
                        B = document.getElementById('vinkelB').value;
                        document.getElementById('vinkelC').value = 180- A - B;
                        document.getElementById('sidec').value = (Math.sin(C)*a)/Math.sin(A);
                    } else if (a && c && !b) {

                    } else if (b && c && !a) {

                    }
                } else if (B && !A && !C) {

                } else if (C && !A && !B) {

                }



               /*  if (a && b && !c) {

                } else if (a && c && !b) {

                } else if (b && c && !a) {

                } */
            } else if ([A, B, C].filter(s => !isNaN(s)).length === 0) {
                if (a && b && c) {
                    document.getElementById('vinkelA').value = (180*Math.acos((b*b+c*c-a*a)/(2*b*c))/Math.PI).toFixed(3);
                    document.getElementById('vinkelB').value = (180*Math.acos((a*a+c*c-b*b)/(2*a*c))/Math.PI).toFixed(3);
                    document.getElementById('vinkelC').value = (180*Math.acos((a*a+b*b-c*c)/(2*a*b))/Math.PI).toFixed(3);
                } else {
                    alert('fejl');
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
}