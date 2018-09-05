class BST {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    if(this.value > value){
        if(this.left){
            this.left.insert(value)
        }else {
            this.left = new BST(value)
        }
    }else {
        if(this.right){
            this.right.insert(value)
        }else {
            this.right = new BST(value)
        }
    }
    return this;
}

contains(value) {
    // Write your code here.
    if(this.value === value){
        return true
    }
    if(!this.left && !this.right) return false
    if(this.value > value){
        if(this.left){
            return this.left.contains(value)
        }else {
            return false
        }
    }else {
        if(this.right){
            return this.right.contains(value)
        }else {
            return false
        }
    }
}

remove(value, parent = null) {
    if(this.value > value){
        if(this.left){
            this.left.remove(value, this)
        }
    }else if (this.value < value){
        if(this.value){
            this.right.remove(value, this)
        }
    }else {
        if(this.left && this.right){
            this.value = this.right.getMin(this.right)
            this.right.remove(this.value,this)
        }else if (!this.parent){
            if(this.left){
                this.value = this.left.value
                this.right = this.left.right
                this.left = this.left.left
            }else if (this.right){
                this.value = this.right.value
                this.left = this.right.left
                this.right = this.right.right
            }else {
                this.value = null
                this.left = null
                this.right = null
            }
        }else {
            if(parent.left === this){
                parent.left = this.left ? this.left : this.right
            }else if (parent.right === this){
                parent.right = this.left ? this.left : this.right
            }
        }
    }
    return this
}
getMin(tree){
    let CurrentTree = tree
    while(CurrentTree.left){
        CurrentTree = CurrentTree.left
    }
    return CurrentTree.value
}


}

// Do not edit the line below.
exports.BST = BST;