var n = 10;
var m = 4;
var coins = [2,5,3,6]

coins.sort((a,b) => a-b)

function change(n , coins){
  if(n===0) return 0;
  
  var dict = {};
  
  for (let i = 1; i <= n ; i++) {
    dict[i] = 0
  }
  //console.log('i', dict)
  
  for (let i = coins[0]; i<= n ; i+=coins[0]){
    dict[i] = 1
   // console.log('dict[i]', dict[i])
  }
  //console.log('i', dict)
  
  for (let i = 1 ; i<= coins.length; i++){
    let c = coins[i];
    
    for(let i = 0 ; i<=n; i++){
      
      if(dict[i-c] || i === c){
       // console.log('dict', dict[i-c])
        dict[i] += dict[i-c] || 1
      //  console.log('dict[i]',dict[i])
      }
    }
    //console.log('i', dict)
  }
  console.log('dict', dict[n])
}

change(n, coins)