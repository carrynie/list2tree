### Install

``` javascript
 $ npm i list2tree -D
```

### Import

``` javascript
 import List2tree from "list2tree"
```

### USAGE

``` javascript
 import List2tree from "list2tree"

 const list2tree = new List2tree(listDdata, options)

 const treeData = list2tree.convert();

// listData: 列表数据
//  defaultOptions: {
//      top: 0,       // 顶级数据父级id
//      pid: 'pid',   // 父级id标识
//      id: 'id'      // 数据id标识
//  }
```

### DEMO

``` javascript
 import List2tree from "list2tree";

 const listData = [
    { id: 1, pid: 0 },
    { id: 2, pid: 1 }
]

 const list2tree = new List2tree(listDdata)

 const treeData = list2tree.convert()

 console.log(treeData)

//  [
//      {
//          id: 1,
//          pid: 0,
//          hasChild: true,
//          childrent:[
//              {
//                  id: 2,
//                  pid: 1,
//                  hasChild: false,
//              }
//          ]
//      }
//  ]
```
