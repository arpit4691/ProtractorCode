function add(a, b) {
    var sum;
    sum = a + b;
    return sum;
}
console.log(add(2, 3));

var b = ["hello", "world", "4", "print"];
for (var i = 0; i < b.length; i++) {
    console.log(b[i]);
}

var c = new Array();
c[0] = "Singapore";
c[1] = "India";
c[2] = "Porwal";
c[3] = "Arpit";
for (var i = 0; i < c.length; i++) {
    console.log(c[i]);
}
for (var i = c.length - 1; i >= 0; i--) {
    console.log("Array in reverse order " + c[i])
}

var name = "Arpit";
console.log(name.charAt(3));

var newname = "Porwal"
console.log(name.concat(newname));
console.log(newname.indexOf("o"));
console.log(newname.slice(1, 3));
//in slice, starting index is inclusive and ending index is exclusive
console.log(name.toUpperCase());

var namet = "    Arpit "; //String literal declaration
console.log(namet.trim());

var nameStringObj = new String('Arpit - String Obj Declaration'); // String Object Declaration
console.log(nameStringObj);