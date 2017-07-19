function main() {
    var matrix = [];
    var target = "#";
    var space = " ";
    
    var n = 6;
  
    for (var i =0; i<n ; i++){
        var tempArr = [];
        for (var j = 0; j< n; j++){
           if((i+j) < (n-1)){
               tempArr.push(space)
           }else {
               tempArr.push(target)
           }
        }
        matrix.push(tempArr)
    }

    for (var k = 0 ; k < matrix.length; k ++){
        console.log(matrix[k].join(""))
    }
}

/* 
input n = 6;
output =      #
             ##
            ###
           ####
          #####
         ######   
*/
