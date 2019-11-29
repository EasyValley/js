<script>
  var a =
    "98523134141232331231321323232131457896449000992874903879852313414123233123132132323213145789644";
  var b =
    "80009928749038798523134141232331231321323232131457896449000992874903879852313414123233123132132323213145789644";
  console.log(a);
  console.log(b);

  function strPlus(a, b) {
    let arrA = a
      .split("")
      .map(item => {
        return parseInt(item);
      })
      .reverse();
    let arrB = b
      .split("")
      .map(item => {
        return parseInt(item);
      })
      .reverse();
    let lenObj =
      arrA.length <= arrB.length
        ? {
            len: arrA.length,
            arr: arrB
          }
        : {
            len: arrB.length,
            arr: arrA
          };
    let arrC = [];
    for (let i = 0; i < lenObj.len; i += 1) {
      arrC.push(arrA[i] + arrB[i]);
    }
    for (let i = lenObj.len; i < lenObj.arr.length; i += 1) {
      arrC.push(lenObj.arr[i]);
    }
    let arrD = [];
    for (let i = 0; i < arrC.length; i += 1) {
      let before = arrD[i] ? arrD[i] : 0;
      let item = arrC[i] + before;
      let s1 = item % 10;
      let s2 = parseInt(item / 10);
      if (s2 > 0) {
        arrD[i] = s1;
        arrD[i + 1] = s2;
      } else {
        arrD[i] = s1;
      }
    }
    return arrD.reverse().join("");
  }
  let v = strPlus(a, b);
  console.log(v);
</script>
