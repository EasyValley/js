问题：运行脚本出现 Operation not permitted

解决：
   没有执行权限，chmod 777也不行。了解一下，原来出现这个问题的主要原因是：-rwxrwxrwx@ 文件的属性最后带个@，这个@代表的是更多的一些属性，具体含义不太清楚，但有它就是执行不了
最终解决:
   
   在工程根目录，用这个命令来去除这个属性：
   ```bash 
   xattr -d -r com.apple.quarantine ./* 
   ```