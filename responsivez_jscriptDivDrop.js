

$(document).ready(function () {
    //javascript
    $('#quickModal').on('shown.bs.modal', function () {
        //var id = $(this).attr('id');

        let widthAtSwitch = 300;
        // NOT WORKING STORING FOR LATER RESEARCH
        let newHeight = $(this).attr("detailsInfo");//.clientHeight;
        let maindiv = $(this).attr("detailsMain");
        let mainHeight = $(this).attr("detailsMain");//.clientHeight;

        if (newHeight >= (mainHeight)) {
            let drops = document.getElementsByClassName("drop");
            drops[0].style.position = "relative";

            let dws = document.getElementsByClassName("dw");

            maindiv.style.columnCount = 1;

            widthAtSwitch = maindiv.clientWidth;
        }

        window.addEventListener("resize", OverflowResponse);

    });


    function OverflowResponse() {
        newHeight = document.getElementById("detailsInfo").clientHeight;
        maindiv = document.getElementById("detailsMain");
        mainHeight = document.getElementById("detailsMain").clientHeight;

        if (newHeight >= (mainHeight)) {
            let drops = document.getElementsByClassName("drop");
            drops[0].style.position = "relative";

            let dws = document.getElementsByClassName("dw");
            let detmain = document.getElementById("detailsMain");

            detmain.style.columnCount = 1;

            widthAtSwitch = maindiv.clientWidth;
        }
        else if (maindiv.clientWidth > widthAtSwitch) {
            let drops = document.getElementsByClassName("drop");
            drops[0].style.position = "absolute";

            let detmain = document.getElementById("detailsMain");
            detmain.style.columnCount = 2;
        }
    }
});


