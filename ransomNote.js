function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    var count = 0
    if (ransom.length > magazine.length) {
        console.log('No')
    }
    for (var i = 0; i < magazine.length; i++) {
        for (var j = 0; j < ransom.length; j++) {
            if (magazine[i] == ransom[j]) {
                count += 1
            }
        }
    }
    if (count == ransom.length) {
        console.log('Yes')
    }
    else {
        console.log('No')
    }
}