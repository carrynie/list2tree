### Install

``` javascript
 $ npm i li2tree -D
```

### Import

``` javascript
 import Li2tree from "li2tree"
```

### USAGE

``` javascript
 import Li2tree from "li2tree"

 const li2tree = new Li2tree(listDdata, options)

 const treeData = li2tree.convert();

// listData: 列表数据
//  defaultOptions: {
//      top: 0,       // 顶级数据父级id
//      pid: 'pid',   // 父级id标识
//      id: 'id'      // 数据id标识
//  }
```

### DEMO

``` javascript
 import Li2tree from "li2tree";

 const listData = [
    { id: 1, pid: 0 },
    { id: 2, pid: 1 }
]

 const li2tree = new Li2tree(listDdata)

 const treeData = li2tree.convert()

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
