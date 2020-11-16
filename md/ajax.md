```js
var xmlhttp = new XMLHttpRequest()
//async：true（异步）或 false（同步）
xmlhttp.open('GET', 'ajax_info.txt', true)
//string：仅用于 POST 请求
xmlhttp.send()

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    // document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
  }
}

// xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// xmlhttp.send("fname=Henry&lname=Ford");

//enctype="multipart/form-data"   发送文件用
```

encodeURIComponent() 编码所有 URI 内容包括
encodeURI()不会对本身属于 URI 的特殊字符进行编码
