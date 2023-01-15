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
  
  const isAdmin = (person: Person):person is Admin => {
    return  'role' in person;
  }
  
  const isUser = (person: Person): person is User => {
    return  'group' in person;
  }
  
  const logPerson = (person: Person) => {
    let information: string = '';
    if (isAdmin(person)) {
      information = person.role;
    }
    if (isUser(person)) {
      information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
  }
  
  console.log('Admins:');
  persons.filter(isAdmin).forEach(logPerson);
  
  console.log();
  
  console.log('Users:');
  persons.filter(isUser).forEach(logPerson);