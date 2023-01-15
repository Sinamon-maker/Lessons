"use strict";
;
const persons = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Илья Совушкин',
        age: 25,
        group: 'Повар',
    },
    {
        name: 'Денис Войнов',
        age: 29,
        group: 'Певец',
    },
    {
        name: 'Денис Войнов',
        age: 29,
        role: 'SuperAdmin',
    },
];
const isAdmin = (person) => {
    return 'role' in person;
};
const isUser = (person) => {
    return 'group' in person;
};
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
