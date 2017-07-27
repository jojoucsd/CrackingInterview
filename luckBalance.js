function processData(input) {
    //console.log("input", input)
    //Enter your code here
    var inputArr = input.split("\n")
    var gameData = inputArr[0].split(" ")
    var important = parseInt(gameData[1])
    var gameResult = []
    var array0 = []
    var array1 = []
    var totalLuck = 0;
    var totalLuckToSubtract = 0;
    
    for (var i = 1; i<= gameData[0]; i++){
        var temp = inputArr[i].split(" ")
        gameResult.push(temp)
    }
    for (var j = 0; j< gameResult.length; j++){
        if(gameResult[j][1] == 1){
            array1.push(gameResult[j][0])
        }
        if(gameResult[j][1] == 0){
            array0.push(gameResult[j][0])
        }
    }
    var sortedArray1 = array1.sort(function(a,b){
        return b - a;
    })
    
    if(sortedArray1.length > 0){
    //console.log('sroted',sortedArray1)
    for (var x = 0; x < important; x++){
            totalLuck = totalLuck + parseInt(sortedArray1[0])
            sortedArray1.splice(0,1)
    }
    for (var z = 0 ; z < sortedArray1.length; z++){
        totalLuckToSubtract = totalLuckToSubtract + parseInt(sortedArray1[z])
    }
        //console.log('total',totalLuck)
    }
    for (var y = 0; y < array0.length; y++){
       totalLuck = totalLuck + parseInt(array0[y])
    }
    
   totalLuck = totalLuck - totalLuckToSubtract
   console.log(totalLuck)
} 