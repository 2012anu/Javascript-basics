var nodelist = document.getElementsByTagName("LI");
var i;
//from here 
for (i = 0; i < nodelist.length; i++) {

    var span = document.createElement("SPAN");
    var text = document.createTextNode("U+000D7");
    //\u0007 means uni code for multiple sign
    span.className = "close";
    span.appendChild(text);
    nodelist[i].appendChild(span);

}
//for clicking into mark so tht it can close
var close = document.getElementsByClassName("close");

var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {

        var div = this.parentElement;

        div.style.display = "none";
    }
}
//to here we r not using in code




//this function is written to get elemnt element and add 
//then it ll show in list
function todo() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("input").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("you must write something");
    } else {

        document.getElementById("myUL").appendChild(li);
        //this line ll make added element to sit in styled list
        li.className = "list-group-item";
    }
    document.getElementById("input").value = "";
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    //this code will get multipliction mARK ONCLICKING THT IT WILL DELETE THE CONTENT
    span.appendChild(text);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}