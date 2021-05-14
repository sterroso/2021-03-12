class Node {
    constructor(val, left, right) {
        this.val = val;

        if (typeof left !== 'undefined') {
            this.left = left;
        }

        if (typeof right !== 'undefined') {
            this.right = right;
        }
    }
}

export default Node;