function lcs (x, y) {
    var aSub = a.substr(0, a.length-1);
    var bSub = b.substr(0, b.length-1);

    if (a.length === 0 || b.length === 0){
        return 
    } else if (a.chartAt(a.length-1) === b.chartAt(b.length-1)){
        return lcs(aSub, bSub) + a.chartAt(a.length-1);
    } else {
        var x = lcs(a, bSub);
        var y = lcs(aSub, b);
        return (x.length > y.length) ? x : y;
    }
}

//ES6

var longest = (xs, ys) => (xs.length > ys.length) ? xs : ys;
 
var lcs = (xx, yy) => {
  if (!xx.length || !yy.length) { return ''; }
 
  var x = xx[0],
      y = yy[0];
  xs = xx.slice(1);
  ys = yy.slice(1);
 
  return (x === y) ? lcs(xs, ys) :
                     longest(lcs(xx, ys), lcs(xs, yy));
};