var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
    colors[colors["balck"] = 3] = "balck";
})(colors || (colors = {}));
;
var direc;
(function (direc) {
    direc[direc["left"] = 0] = "left";
    direc[direc["right"] = 1] = "right";
    direc[direc["up"] = 2] = "up";
    direc[direc["down"] = 3] = "down";
})(direc || (direc = {}));
;
var Gender;
(function (Gender) {
    Gender[Gender["M"] = 0] = "M";
    Gender[Gender["F"] = 1] = "F";
})(Gender || (Gender = {}));
;
var c;
c = colors.balck;
document.write("<p>The color is ".concat(c, "</p>"));
var d;
d = direc.left;
document.write("<P>The direction is ".concat(d, "</p>"));
var g;
g = Gender.M;
document.write("<p>U r a ".concat(g, "</p>"));
