//My solution
function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    function makeMap(array) {
        var myMap = new Map();
        //Make Hash Table
        for (var i = 0; i < array.length; i++) {
            if (myMap.has(array[i])) {
                var temp = myMap.get(array[i]);
                temp++;
                myMap.set(array[i], temp);
            }
            else {
                myMap.set(array[i], 1);
            }
        }
        return myMap;
    }

    if (ransom.length <= magazine.length) {
        var magMap = makeMap(magazine);
        var ransomMap = makeMap(ransom);
        var count = 0;
        ransomMap.forEach(function (value, key) {
            if (magMap.has(key) && (value <= magMap.get(key))) {
                count++
            }
        });
        if (count == ransomMap.size) {
            console.log('Yes');
        } else {
            console.log('No')
        }
    } else {
        console.log('No')
    }
}

// Other Solution
function wordsToHashTable(hashTable, word) {
    if (hashTable[word]) {
        hashTable[word]++;
    } else {
        hashTable[word] = 1;
    }
    return hashTable;
}

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    let hashTable = magazine.reduce(wordsToHashTable, {});
    let w = null;
    let foundWords = true;

    for (let i = 0; i < ransom.length; i++) {
        w = ransom[i];

        if (hashTable[w] > 0) {
            hashTable[w]--;
        } else {
            foundWords = false;
            break;
        }
    }

    console.log(foundWords ? "Yes" : "No");
}