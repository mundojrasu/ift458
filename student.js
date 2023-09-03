var student = {
    name: 'Joan Smith',
    birthYear: 2002,
    course: 'IFT 458',
    grade: 90,
    age: function() {
        return 2022 - this.birthYear;
    }
};

var student2 = {
    name: 'Andy Smith',
    birthYear: 2000,
    course: 'IFT 458',
    grade: 100,
    age: function() {
        return 2022 - this.birthYear;
    }
};

// console.log(student['name']);
// console.log(student.name);
console.log(student2.age());
console.log(student.age());