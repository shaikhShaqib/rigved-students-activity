var s1 = { name: 'Alex', id: 1 };
var s2 = { name: 'bruce', id: 2, marks: 55 };
function printStudent(st) {
    document.write("<p>Id: ".concat(st.id, ", Name: ").concat(st.name, "</p>"));
}
function printStudentMarks(stm) {
    document.write("<p>Id: ".concat(stm.id, ", Name: ").concat(stm.name, " and Marks is ").concat(stm.marks, "</p>"));
}
printStudent(s1);
printStudentMarks(s2);
