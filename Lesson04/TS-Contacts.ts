type User = {
    name: string;
    age: number;
    group: string;
};

const persons: User[] = [
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
  }
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);
