function dictMaker(str){
    var dict = {};
    for (let i in str) {
        if (!(str[i] in dict))
            dict[str[i]] =1 ;
        else
            dict[str[i]]++;
    }
    return dict;
}

function main() {
    var a = readLine();
    var b = readLine();
    var count = 0;
    let bCount = 0; 
    let b_dict = dictMaker(b);
    
    for (var char in a) {
        if (b_dict[a[char]] > 0) {
            count++;
            b_dict[a[char]]--;
        }
    }
    for (let key in b_dict)
        bCount += b_dict[key];
   
    console.log(a.length - count + bCount)
}