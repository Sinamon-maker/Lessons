import { UsersList} from './user';

interface Employee{
    id: string;
    firstname: string;
    surname: string;
    age: number;
    post: string;

}

export class Employees extends UsersList<Employee>{
}

const employee1={
    id: 'jhbuiho76',
    firstname: 'John',
    surname:'Smith',
    age: 21,
    post: 'engenieer'
}

const employee2={
    id: 'jhuyiho98',
    firstname: 'James',
    surname:'Novac',
    age: 23,
    post: 'physicist'
}

const employee3={
    id: 'jfuymho21',
    firstname: 'Maya',
    surname:'Sims',
    age: 20,
    post: 'designer'
}

const employees = new Employees()

employees.add(employee1);
employees.add(employee2);
employees.add(employee3);

employees.remove('jhkhk');

employees.remove('jhuyiho98')

employees.get('jhuyiho98')

console.log('sorted:', employees.sorted('asc'))