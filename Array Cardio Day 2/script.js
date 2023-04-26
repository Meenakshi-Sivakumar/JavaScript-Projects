// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  // Array.prototype.every() // is everyone 19 or older?
  const year = new Date().getFullYear();
  const atleastOneLegalAge = people.some(person => {
    const age = year-person.year;
    return age>18;
  })
  
  const EveryOneLegalAge = people.every(person => {
    const age = year-person.year;
    return age>18;
  })
  // Array.prototype.find()
  // find the comment with the ID of 823423
  const comment = comments.find(e => e.id === 823423).text;

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const commentIndex = comments.findIndex(e => e.id === 823423);
  comments.splice(commentIndex,1);
  console.log(comments);