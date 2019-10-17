/*
    帮助
    所有帮助
      cmd /?
    指定帮助
      命令 /?
 */
// del /?
//

/*
    创建文件
    linux
      touch 文件名.格式

    windows
      type NUL|nul > 文件名.格式
      用 echo 创建 仅包含换行的文件
      echo. > 文件名.格式

 */

// touch yo.txt
// //
// type NUL > yo.txt
//
// echo. > yo.txt
//

/*
  创建 文件夹
  linux
    touch 文件夹

  windows
    mkdir 文件夹
    简写 md 文件夹
 */
// touch test
//
// mkdir test
// md test
//

/*
    删除 目录
    windows
      rmdir 目录名
      空目录直接删除
      有东西则提示：
        目录不是空的
      删除有东西的文件 rmdir /s test
      会有提示防止误删 需要输入 y|n
      直接删除(静默)  rmdir /s /q test
      简写 rd
 */

/*
    删除 文件
    del 文件名.格式 | 目录
    如果 是目录 就删除目录下的所有文件
    删除某个 后缀 的所有文件
 */
/*
    写入文件 内容
    linux
      ?

    windows
      echo 'hello world' >yo.txt
 */
// echo hello > yo.txt
//

/*
  清屏
  linux
    crtl l

  windows
    cls 回车

  Mac
    cammand k
 */

//
// 设置 输出 为 utf-8 
//  set LESSCHARSET=utf-8
