  1.
      如何创建BFC
  1、float的值不是none。
  2、position的值不是static或者relative。
  3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
  4、overflow的值不是visible

  2.
  .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }