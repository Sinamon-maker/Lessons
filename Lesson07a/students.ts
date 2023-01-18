import {User, UsersList} from './user';

interface Student{
    id: string;
    firstname: string;
    surname: string;
    age: number;
    year: number;
    speciality: string;

}

export class Students extends UsersList<Student>{
}

const student1={
    id: 'jhbuiho76',
    firstname: 'John',
    surname:'Smith',
    age: 21,
    year: 1,
    speciality: 'engenieer'
}

const student2={
    id: 'jhuyiho98',
    firstname: 'James',
    surname:'Novac',
    age: 23,
    year: 3,
    speciality: 'physics'
}

const student3={
    id: 'jfuymho21',
    firstname: 'Maya',
    surname:'Sims',
    age: 20,
    year: 1,
    speciality: 'designer'
}

const students = new Students()

students.add(student1)
students.add(student2)
students.add(student3)

console.log(students.get('jfuymho21'))

console.log(students.remove('jfuymho210'))

console.log(students.get('jfuymho21'))

