import Node from './Node.js';

const serialize = (object) => {
    return JSON.stringify(object);
}

const deserialize = (string) => {
    return JSON.parse(string);
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.log(node);

console.log(deserialize(serialize(node)).left.left.val);
