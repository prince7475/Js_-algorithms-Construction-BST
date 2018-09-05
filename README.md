# Js_-algorithms-Construction-BST

​
1
const program = require("./program");
2
const chai = require("chai");
3
​
4
const test1 = new program.BST(10).insert(5).insert(15).insert(5).insert(2)
5
.insert(14).insert(22);
6
​
7
const test2 = new program.BST(10).insert(15).insert(11).insert(22).remove(10);
8
​
9
const test3 = new program.BST(10).insert(5).insert(7).insert(2).remove(10);
10
​
11
const test4 = new program.BST(10).insert(5).insert(15).insert(22).insert(17)
12
.insert(34).insert(7).insert(2).insert(5).insert(1).insert(35).insert(27)
13
.insert(16).insert(30).remove(22).remove(17);
14
​
15
function inOrderTraverse(tree, array) {
16
  if (tree !== null) {
17
    inOrderTraverse(tree.left, array);
18
    array.push(tree.value);
19
    inOrderTraverse(tree.right, array);
20
  }
21
  return array;
22
}
23
​
24
it('Test Case #1', function() {
25
  chai.expect(test1.left.value).to.deep.equal(5);
26
});
27
​
28
it('Test Case #2', function() {
29
  chai.expect(test1.right.right.value).to.deep.equal(22);
30
});
31
​
32
it('Test Case #3', function() {
33
  chai.expect(test1.right.left.value).to.deep.equal(14);
34
});
35
​
36
it('Test Case #4', function() {
37
  chai.expect(test1.left.right.value).to.deep.equal(5);
38
});
39
​
40
it('Test Case #5', function() {
41
  chai.expect(test1.left.left.value).to.deep.equal(2);
42
});
43
​
Output:Custom OutputRaw Output
Run your code when you feel ready.
Question:JavaScriptPythonC++JavaGoQuestions List

​
BST Construction
​
Write a Binary Search Tree (BST) class. The class should have a "value" property set to be an integer, as well as "left" and "right" properties, both of which should point to either the None (null) value or to another BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. The BST class should support insertion, searching, and removal of values. The removal method should only remove the first instance of the target value.
​
Sample input:
            10
          /       \
        5         15
      /    \     /      \
    2      5 13     22
  /                  \
1                    14
Help:HideShow
Average (all 3 methods): 0 (log(n)) time | 0 (1) space - where n is the number of nodes in the BST
Worst (all 3 methods): 0 (n) time | 0 (1) space - where n is the number of nodes in the BST

​
Video ExplanationGo to Conceptual OverviewGo to Code WalkthroughQuestions List
Copyright © 2018 AlgoExpert, LLC. All rights reserved.Legal StuffContact Us
