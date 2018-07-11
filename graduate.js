function graduates (students) {
  // Code disini
  var lulusan={}
  var foxes=[]
  var wolves=[]
  var tigers=[]

  for(var i=0;i<students.length;i++)
  {
      var temporary={}
      if(students[i].score>75&&students[i].class==='foxes')
      {
          temporary.name=students[i].name;
          temporary.score=students[i].score;
          foxes.push(temporary)
      }

      if(students[i].score>75&&students[i].class==='wolves')
      {
          temporary.name=students[i].name;
          temporary.score=students[i].score;
          wolves.push(temporary)
      }
      if(students[i].score>75&&students[i].class==='tigers')
      {
          temporary.name=students[i].name;
          temporary.score=students[i].score;
          tigers.push(temporary)
      }
  }

  if(foxes.length!=0)
  {
      lulusan.foxes=foxes
  }
  if(wolves.length!=0)
  {
      lulusan.wolves=wolves
  }
  if(tigers.length!=0)
  {
      lulusan.tigers=tigers
  }
  if(foxes.length===0&&wolves.length===0&&tigers.length===0)
  {
      return ''
  }
  
  return lulusan
}

console.log(graduates([
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

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log()
console.log(graduates([
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
console.log()
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([]));