function showDetails(object, type) {
    var stat = false;
    var curr = type;

    stat != stat;
    var stat = document.getElementById(curr).checked;
    stat != stat;
    console.log(stat);
    const formsub = document.getElementById("myform")
    if (stat) {
        document.getElementById("comments1").style.display = "block";   
        document.getElementById("comments11").style.display = "block";
        document.getElementById("comments11").attributes["required"] = true;

    } else {
        document.getElementById("comments1").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments11").attributes["required"] = false;

    }




}
function showText() {

    var e = document.getElementById("drinks").value;
    if (e == "Black Tea") {

        document.getElementById("source2").style.display = "none";
        document.getElementById("drinks22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("drinks33").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("drinks44").style.display = "none";
        document.getElementById("source1").style.display = "block";
        document.getElementById("drinks11").style.display = "block";

    }
    else if (e == "Cold coffee") {

        document.getElementById("source2").style.display = "block";
        document.getElementById("drink22").style.display = "block";
        document.getElementById("source1").style.display = "none";
        document.getElementById("drinks11").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("drinks33").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("drinks44").style.display = "none";

    }
    else if (e == "Lemon Ice Tea") {

        document.getElementById("source3").style.display = "block";
        document.getElementById("drinks33").style.display = "block";
        document.getElementById("source2").style.display = "none";
        document.getElementById("drinks22").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("drinks11").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("drinks44").style.display = "none";

    }
    else if (e == "Espresso") {

        document.getElementById("source4").style.display = "block";
        document.getElementById("drinks44").style.display = "block";
        document.getElementById("source2").style.display = "none";
        document.getElementById("drinks22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("drinks33").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("drinks11").style.display = "none";

    }
    else {

        document.getElementById("source4").style.display = "none";
        document.getElementById("drinks44").style.display = "none";
        document.getElementById("source2").style.display = "none";
        document.getElementById("drinks22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("drinks33").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("drinks11").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments1").style.display = "none";




    }



}


function validatedata (object, type, nameType) {
    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /(?:name)?@northeastern\.edu/;
    var regExPhone = /\d{3}-\d{3}-\d{4}$/;
    var regExZip = /^\d{5}$/;
    var name = 'errorMsg' + nameType;
    switch (type) {
        case 1: if (!object.value.trim().match(regExName)) {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
        }
            break;
        case 3: if (!object.value.trim().match(regExEmail)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgEmail").style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById("errorMsgEmail").style.display = "none";
        }
            break;
        case 4: if (!object.value.trim().match(regExPhone)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgPhone").style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById("errorMsgPhone").style.display = "none";
        }
            break;
        case 5: if (!object.value.trim().match(regExZip)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgZip").style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById("errorMsgZip").style.display = "none";

        }
    }
}




var j = 1;
function getTableData() {
    // var d= DocumentFragment.getElementById("firstName");
    var title = document.getElementsByName("title").value;
    var name = document.getElementById("firstName").value;
    var ag = document.getElementById("lastName").value;
    var fn = name + " " + ag;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("emailId").value;
    var zip = document.getElementById("zipcode").value;
    var comment = document.getElementById("comments").value;
    var drink = document.getElementById("drinks").value;
    var comment1 = document.getElementById('comments1').value;
    var addressline1 = document.getElementById("streetAddress1").value;
    var addressline2 = document.getElementById("streetAddress2").value;


    var radios = document.querySelectorAll('input[name="title"]:checked');
    var vel = radios.length > 0 ? radios[0].value : '';

    var checkbox = document.querySelectorAll('input[name="source"]:checked');
    var checkCount = checkbox.length > 0 ? checkbox[0].value : "";
    var checkboxVals = document.getElementsByName('source');
    var sources = '';
    for (var cc = 0; cc < checkboxVals.length; cc++) {
        console.log(checkboxVals[cc].checked);
        if (cc != (checkboxVals.length - 1) && checkboxVals[cc].checked)
            sources += checkboxVals[cc].value + ', ';
        else if (checkboxVals[cc].checked) {
            sources += checkboxVals[cc].value;
        }
    }



    var vel1 = checkbox.length > 0 ? checkbox[0].value : '';


    var checkbox1 = document.querySelectorAll('input[name="source100"]:checked');
    var vel11 = checkbox1.length > 0 ? checkbox1[0].value : '';




    var checkboxVals1 = document.getElementsByName('source100');
    var sources1 = '';
    for (var cc = 0; cc < checkboxVals1.length; cc++) {
        if (checkboxVals1[cc].checked) {
            sources1 += checkboxVals1[cc].value;
            break;
        }
    }


    if (name == "" || ag == "" || phone == "" || email == "" || zip == "" || vel == "" || vel1 == "" || comment == "" || drink == "default") {
        alert("Please fill the mandatory fields");
    }
    else if (vel11 != '' && comment1 == "") {
        alert("Please fill the mandatory fields");
    }
    else {



        var content = "";

        content += "<tr><td>" + name + "</td><td>" + ag + "</td></tr>";



        var userTable = document.getElementById("userTable");

    
        for (var i = j; i <= j; i++) {
            var row = userTable.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);
            var cell12 = row.insertCell(11);
            cell1.innerHTML = vel;
            cell2.innerHTML = fn;
            cell3.innerHTML = phone;
            cell4.innerHTML = addressline1;
            cell5.innerHTML = addressline2;
            cell6.innerHTML = email;
            cell7.innerHTML = zip;
            cell8.innerHTML = sources;
            cell9.innerHTML = comment;
            cell10.innerHTML = drink;
            cell11.innerHTML = sources1;
            cell12.innerHTML = comment1;
        }
        j = j + 1;


        document.getElementById('drinks').value = '';
        //showUP();
        document.getElementById('myform').reset();


    }


}
