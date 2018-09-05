
const chai = require('chai');
const program = require('./BST')

const test1 = new program.BST(10)
test1.insert(5)
test1.insert(15)
test1.insert(5)
test1.insert(2)
test1.insert(14)
test1.insert(22);


const test4 = new program.BST(10)
test4.insert(5)
test4.insert(15)
test4.insert(22)
test4.insert(17)
test4.insert(34)
test4.insert(7)
test4.insert(2)
test4.insert(5)
test4.insert(1)
test4.insert(35)
test4.insert(27)
test4.insert(16)
test4.insert(30)
test4.remove(22)
test4.remove(17);

function inOrderTraverse(tree, array) {
if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
}
return array;
}

describe('Test', function () {

    it('Test #1', function() {
        chai.expect(test1.left.value).to.deep.equal(5);
    });

    it('Test #2', function() {
        chai.expect(test1.right.right.value).to.deep.equal(22);
    });

    it('Test #3', function() {
        chai.expect(test1.left.right.value).to.deep.equal(5);;
    });

    
    it('Test #4', function() {
        chai.expect(test1.right.left.value).to.deep.equal(14);
    });

    it('Test #5', function() {
        chai.expect(test1.left.left.value).to.deep.equal(2);
    });

    it('Test #6', function() {
        chai.expect(test1.contains(2)).to.deep.equal(true);
    });


    it('Test #7', function() {
        chai.expect(test1.contains(5)).to.deep.equal(true);
    });


    it('Test #8', function() {
        chai.expect(test1.contains(10)).to.deep.equal(true);
    });

    it('Test #9', function() {
        chai.expect(test4.right.right.left.value).to.deep.equal(16);
    });

    it('Test #10', function() {
        chai.expect(test4.right.right.value).to.deep.equal(27);
    });

    it('Test #11', function() {
        chai.expect(inOrderTraverse(test4, [])).to.deep.equal([1, 2, 5, 5, 7, 10, 15, 16, 27, 30, 34, 35]);
    });

});