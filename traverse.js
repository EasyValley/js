function traverse(node) {
        let nodes = []
        if (node) {
            nodes.push(node)
            let children = node.children
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    nodes = nodes.concat(traverse(children[i]))
                }
            }
        }
        return nodes;
    }

    var node = {
        name: '1',
        children: [
            {
                name: '2',
                children: [
                    {
                        name: '3'
                    }
                ]
            },
            {
                name: '4',
                children: [
                    {
                        name: '5',
                        children: [
                            {
                                name: '6'
                            },
                            {
                                name: '6-1'
                            },
                            {
                                name: '6-2',
                                children: [
                                    {
                                        name: '6-2-1'
                                    },
                                    {
                                        name: '6-2-2'
                                    },
                                    {
                                        name: '6-2-3'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '7'
                    },
                    {
                        name: '8'
                    }
                ]
            }
        ]
    }

    console.log(traverse(node))
