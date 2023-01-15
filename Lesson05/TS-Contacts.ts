interface User  {
    name: string;
    age: number;
    group: string;
  };
  
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  
  type Person = Admin | User;
  
  const persons: Person[] = [
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
  
  const logPerson = (person: Person) => {
    let information: string;
    if ('role' in person) {
      information = person.role;
    } else {
      information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
  };
  
  console.log('Users:');
  persons.forEach(logPerson);