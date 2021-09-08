function getmarks() {
    //here number will covert the string
    //id are written inside
    //var after the names are placeholder name
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var biology = Number(document.getElementById("biology").value);
    var chemistry = Number(document.getElementById("chemistry").value);

    var totalmarks = 400;
    var grade = "";
    var marksobatined = maths + physics + biology + chemistry;
    var percentage = (marksobatined / totalmarks) * 100;
    document.getElementById("para").innerHTML = percentage + "%";

    if (percentage > 90) {
        grade = "A+";
    } else if (percentage < 90 && percentage > 80) {
        grade = "A";
    } else if (percentage < 80 && percentage > 70) {
        grade = "B";
    } else if (percentage < 70 && percentage > 60) {
        grade = "C";
    } else if (percentage < 60 && percentage > 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;

    if (percentage > 50) {
        document.getElementById("pass").innerHTML = "passed";
    } else {
        document.getElementById("pass").innerHTML = "failed";
    }
}