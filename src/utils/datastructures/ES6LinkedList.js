
class ES6Node{

    constructor(value=null, nextNode=null){
        /**
         * Creates a node
         * @param   {any}       value       Node value
         * @param  {ES6Node}    nextNode    Child node
         */
        this.value = value;
        this.nextNode = nextNode;
    }

}


class ES6LinkedList{

    constructor(){
        this.root = null;
        this.currentNode = null;
        this._length = 0;
    }

    get length(){
        return this._length;
    }

    _getParentNode = (parent ,index=null) => {
        /**
         * Finds the last node with no child or a node in a given index
         * @param   {ES6Node}   parent  Parent node, starting from root
         * @param   {Number}    index   Node index
         * @return  {ES6Node}           Last node or the node on index provided    
         */
        if(parent.nextNode === null || index === 1){
            return parent;
        }
        return this._getParentNode(parent.nextNode, index === null ? null : --index);
    }

    append = (value) => {
        /**
         * Adds a new node at the end of the list
         * @param   {any}   value  Node value
         */
        const newNode = new ES6Node(value);
        this._length++;
        if(this.root)
            this._getParentNode(this.root).nextNode = newNode;
        else
            this.root = newNode;
    }

    insert = (value, index) => {
        /**
         * Inserts a new node into the list 
         * @param   {any}   value  Node value
         * @param   {Number}index  Position where the new value will be inserted
         */
        const newNode = new ES6Node(value);
        if(index > this.length)
            throw new Error('Index out of range exception');
        this._length++;
        if(index === 0){
            newNode.nextNode = this.root;
            this.root = newNode;
        }
        else if(this.root){
            let parentNode = this._getParentNode(this.root, index);
            let tmpNode = parentNode.nextNode; 
            parentNode.nextNode = newNode;
            newNode.nextNode = tmpNode;
        }
    }

    [Symbol.iterator]() {
        /**
         * Gets all the list elements
         */
        this.currentNode = this.root;
        return {
            
          next: () => { 
            const node = this.currentNode; 
            this.currentNode = node ? node.nextNode : null;
            const value = node ? node.value : null;
            return {
                value: value, 
                done: (node === null)
            }
        }
    };
    }
}

export default ES6LinkedList;