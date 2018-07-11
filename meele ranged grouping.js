function meleeRangedGrouping (str) {
  //your code here
  var h=str.split(',')
  
  var r=[]
  var m=[]
  
  for(var i=0;i<h.length;i++)
  {
      if(h[i].indexOf('Melee')>0)
      {
        var g=h[i].split('-')
        m.push(g[0])
      }
      if(h[i].indexOf('Ranged')>0)
      {
        var g=h[i].split('-')
        r.push(g[0])
      }
  } 
  
  var hasil=[]
  if(r.length!=0||m.length!=0)
  {
    hasil.push(r)
    hasil.push(m)
  }
  else
  {
      return hasil
  }
  return hasil
  
}
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

