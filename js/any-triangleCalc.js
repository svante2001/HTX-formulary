function vinkelBeregner() {
    document.getElementById("calculateVinkel").onclick = function () {
        var A = parseFloat(document.getElementById('vinkelA').value);
        var B = parseFloat(document.getElementById('vinkelB').value);
        var C = parseFloat(document.getElementById('vinkelC').value);
        var a = parseFloat(document.getElementById('sidea').value);
        var b = parseFloat(document.getElementById('sideb').value);
        var c = parseFloat(document.getElementById('sidec').value);


        if (A && B && C) {
            alert('Kan ikke regne trekant med kun 3 vinkler')
        } else if (a && b && c) {
            document.getElementById('vinkelA').value = (180*Math.acos((b*b+c*c-a*a)/(2*b*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelB').value = (180*Math.acos((a*a+c*c-b*b)/(2*a*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelC').value = (180*Math.acos((a*a+b*b-c*c)/(2*a*b))/Math.PI).toFixed(3);
        }


        else if (A && B && a) {
            document.getElementById('vinkelC').value = 180 - A - B.toFixed(3);
            C = parseFloat(document.getElementById('vinkelC').value);
            document.getElementById('sideb').value = (Math.sin(B)*a) / Math.sin(A).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*a) / Math.sin(A).toFixed(3);
        } else if (A && B && b) {
            document.getElementById('vinkelC').value = 180 - A - B.toFixed(3);
            C = parseFloat(document.getElementById('vinkelC').value);
            document.getElementById('sidea').value = (Math.sin(A)*b) / Math.sin(B).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*b) / Math.sin(B).toFixed(3);
        } else if (A && B && c) {
            document.getElementById('vinkelC').value = 180 - A - B.toFixed(3);
            C = parseFloat(document.getElementById('vinkelC').value);
            document.getElementById('sidea').value = (Math.sin(A)*c) / Math.sin(C).toFixed(3);
            document.getElementById('sideb').value = (Math.sin(B)*c) / Math.sin(C).toFixed(3);
        }


        else if (A && C && a) {
            document.getElementById('vinkelB').value = 180 - A - C.toFixed(3);
            B = parseFloat(document.getElementById('vinkelB').value);
            document.getElementById('sideb').value = (Math.sin(B)*a) / Math.sin(A).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*a) / Math.sin(A).toFixed(3);
        } else if (A && C && b) {
            document.getElementById('vinkelB').value = 180 - A - C.toFixed(3);
            B = parseFloat(document.getElementById('vinkelB').value);
            document.getElementById('sidea').value = (Math.sin(A)*b) / Math.sin(B).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*b) / Math.sin(B).toFixed(3);
        } else if (A && C && c) {
            document.getElementById('vinkelB').value = 180 - A - C.toFixed(3);
            B = parseFloat(document.getElementById('vinkelB').value);
            document.getElementById('sidea').value = (Math.sin(A)*c) / Math.sin(C).toFixed(3);
            document.getElementById('sideb').value = (Math.sin(B)*c) / Math.sin(C).toFixed(3);
        }


        else if (B && C && a) {
            document.getElementById('vinkelA').value = 180 - B - C.toFixed(3);
            A = parseFloat(document.getElementById('vinkelA').value);
            document.getElementById('sideb').value = (Math.sin(B)*a) / Math.sin(A).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*a) / Math.sin(A).toFixed(3);
        } else if (B && C && b) {
            document.getElementById('vinkelA').value = 180 - B - C.toFixed(3);
            A = parseFloat(document.getElementById('vinkelA').value);
            document.getElementById('sidea').value = (Math.sin(A)*b) / Math.sin(B).toFixed(3);
            document.getElementById('sidec').value = (Math.sin(C)*b) / Math.sin(B).toFixed(3);
        } else if (B && C && c) {
            document.getElementById('vinkelA').value = 180 - B - C.toFixed(3);
            A = parseFloat(document.getElementById('vinkelA').value);
            document.getElementById('sidea').value = (Math.sin(A)*c) / Math.sin(C).toFixed(3);
            document.getElementById('sideb').value = (Math.sin(B)*c) / Math.sin(C).toFixed(3);
        }


        else if (a && b && A) {
            document.getElementById('vinkelB').value = Math.asin((Math.sin(A)*b)/a).toFixed(3);
            B = parseFloat(document.getElementById('vinkelB').value);
            document.getElementById('vinkelC').value = 180 - A - B.toFixed(3);
            C = parseFloat(document.getElementById('vinkelC').value);
            document.getElementById('sidec').value = (Math.sin(C)*a) / Math.sin(A).toFixed(3);
        } else if (a && b && B) {
            document.getElementById('vinkelA').value = Math.asin((Math.sin(B)*a)/b).toFixed(3);
            A = parseFloat(document.getElementById('vinkelA').value);
            document.getElementById('vinkelC').value = 180 - A - B.toFixed(3);
            C = parseFloat(document.getElementById('vinkelC').value);
            document.getElementById('sidec').value = (Math.sin(C)*a) / Math.sin(A).toFixed(3);
        } else if (a && b && C) {
            document.getElementById('sidec').value = Math.sqrt(a*a+b*b-2*a*b*Math.cos(C)).toFixed(3);
            c = parseFloat(document.getElementById('sidec').value);
            document.getElementById('vinkelA').value = Math.acos((b*b+c*c-a*a)/2*b*c)*(180/Math.PI).toFixed(3);
            document.getElementById('vinkelB').value = Math.acos((a*a+c*c-b*b)/2*a*c)*(180/Math.PI).toFixed(3);
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