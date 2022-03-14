interface student {
    name: string;
    id: number;
}

interface studentMarks extends student {
    marks: number;
}

let s1 : student = {name: 'Alex', id: 1};

let s2 : studentMarks = {name:'bruce',id: 2,marks: 55};

function printStudent (st : student) {
    document.write(`<p>Id: ${st.id}, Name: ${st.name}</p>`);
}

function printStudentMarks (stm : studentMarks) 
{
    document.write(`<p>Id: ${stm.id}, Name: ${stm.name} and Marks is ${stm.marks}</p>`);
}

printStudent(s1);
printStudentMarks(s2);
