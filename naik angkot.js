function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var awal=[]
  var akhir=[]

  for(var i=0;i<arrPenumpang.length;i++)
  {
    for(var j=0;j<rute.length;j++)
    {
        if(arrPenumpang[i][1]===rute[j])
        {
            awal.push(j)
        }
        if(arrPenumpang[i][2]===rute[j])
        {
            akhir.push(j)
        }
    }    
  }

  //buat object penumpang untuk di push
  var o=[]
  for(var i=0;i<arrPenumpang.length;i++)
  {
      var penumpang={}
      penumpang.penumpang=arrPenumpang[i][0]
      penumpang.naikDari=arrPenumpang[i][1]
      penumpang.tujuan=arrPenumpang[i][2]
      var bayar=Math.abs(akhir[i]-awal[i])*2000
      penumpang.bayar=bayar
      o.push(penumpang)
  }

  return o
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]