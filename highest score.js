function highestScore (students) {
  // Code disini
  var foxes={}
  var wolves={}
  var tigers={}
  var max_f=0
  var max_w=0
  var max_t=0

  for(var i=0;i<students.length;i++)
  {
      if(students[i].class==='foxes'&&students[i].score>max_f)
      {
          foxes.name=students[i].name
          foxes.score=students[i].score
          max_f=students[i].score
      }
       if(students[i].class==='wolves'&&students[i].score>max_w)
       {
          wolves.name=students[i].name
          wolves.score=students[i].score
          max_w=students[i].score
       }
        if(students[i].class==='tigers'&&students[i].score>max_t)
        {
          tigers.name=students[i].name
          tigers.score=students[i].score
          max_t=students[i].score
       }
  }
 
  var kosongan={}

  if(max_f!=0)
  {
      kosongan.foxes=foxes
  }
  if(max_w!=0)
  {
    kosongan.wolves=wolves
  }
  if(max_t!=0)
  {
    kosongan.tigers=tigers
  }

  return kosongan
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

console.log(highestScore([]))
