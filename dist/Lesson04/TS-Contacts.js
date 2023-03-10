"use strict";
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
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
