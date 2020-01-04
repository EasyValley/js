var hanZi = [
  '\x68\x6F\x73\x74',
  '\x6C\x6F\x63\x61\x74\x69\x6F\x6E',
  '\x74\x6F\x70',
  '\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D',
  '\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x65\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F',
  '\x5C\x75',
  '\x72\x65\x70\x6C\x61\x63\x65',
  '\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x4C\x6F\x77\x65\x72\x43\x61\x73\x65',
  '\x5C',
  '\x3F',
  '\x3C',
  '\x3E',
  '\x20',
  '\x3D',
  '\x5D',
  '\x5B',
  '\x22',
  '\x27',
  '\x2C',
  '\x3A',
  '\x7D',
  '\x7B',
  '\x25\x75',
  '\x6A\x73\x6F\x6E\x5F\x69\x6E\x70\x75\x74',
  '\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64',
  '\x76\x61\x6C\x75\x65',
  '\x74\x72\x69\x6D'
]

var GB2312UnicodeConverter = {
  ToUnicode: function(strInput) {
    var str = escape(strInput)
      [hanZi[7]]()
      [hanZi[6]](/%u/gi, hanZi[5])
    return str[hanZi[6]](/%7b/gi, hanZi[21])
      [hanZi[6]](/%7d/gi, hanZi[20])
      [hanZi[6]](/%3a/gi, hanZi[19])
      [hanZi[6]](/%2c/gi, hanZi[18])
      [hanZi[6]](/%27/gi, hanZi[17])
      [hanZi[6]](/%22/gi, hanZi[16])
      [hanZi[6]](/%5b/gi, hanZi[15])
      [hanZi[6]](/%5d/gi, hanZi[14])
      [hanZi[6]](/%3D/gi, hanZi[13])
      [hanZi[6]](/%20/gi, hanZi[12])
      [hanZi[6]](/%3E/gi, hanZi[11])
      [hanZi[6]](/%3C/gi, hanZi[10])
      [hanZi[6]](/%3F/gi, hanZi[9])
      [hanZi[6]](/%5c/gi, hanZi[8])
  },
  ToGB2312: function(strInput) {
    return unescape(strInput[hanZi[6]](/\\u/gi, hanZi[22]))
  }
}
let myText = '啊哈哈\ud83d\ude02你哈你是事实'
let s = GB2312UnicodeConverter.ToGB2312(myText)
console.log(myText)
console.log('----')
console.log(s)
