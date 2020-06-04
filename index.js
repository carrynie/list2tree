const defaultOptions = {
    top: 0,
    pid: 'pid',
    id: 'id'
}

class List2tree {
    constructor(listData, options = defaultOptions) {
        this.listData = listData;
        this.top = options.top;
        this.pid = options.pid;
        this.id = options.id;
        this.topList = listData.filter(item => {
            return item[this.pid] == this.top
        })
    }

    convert(data = this.topList) {
        data.forEach(item => {
            let children = this.listData.filter(i => {
                return i[this.pid] === item[this.id];
            });
            if (children.length == 0) {
                item.hasChild = false;
                return;
            } else {
                item.children = children;
                item.hasChild = true;
                this.convert(children);
            }
        });
        return data;
    }


}

export default List2tree;