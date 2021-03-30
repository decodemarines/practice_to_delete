/**
 * Initialize your data structure here.
 */

var MyLinkedList = function() {
    this.node = []
     
 };
 

 MyLinkedList.prototype.get = function(index) {
     
   if(index < this.node.length) return this.node[index]   
    return -1 
 };
 

 MyLinkedList.prototype.addAtHead = function(val) {
   this.node.unshift(val)
 };
 
 MyLinkedList.prototype.addAtTail = function(val) {
    this.node.push(val)
 };
 

 MyLinkedList.prototype.addAtIndex = function(index, val) {
   this.node.splice(index,0,val)
 };
 
 MyLinkedList.prototype.deleteAtIndex = function(index) {
     this.node.splice(index,1)
 };
 
 
 /** 
  * Your MyLinkedList object will be instantiated and called as such:
  * var obj = new MyLinkedList()
  * var param_1 = obj.get(index)
  * obj.addAtHead(val)
  * obj.addAtTail(val)
  * obj.addAtIndex(index,val)
  * obj.deleteAtIndex(index)
  */



 class Node {
    constructor(val) {
      this.val = val
      this.next = null
    }
  }
  
  class MyLinkedList {
    constructor() {
      this.head = new Node('head')
    }
  
  
    get(index) {
      if (index < 0 || index > 1000) return -1
      let cn = this.head.next
      let count = 0
      while (cn && count !== index) {
        cn = cn.next
        count++
      }
      return cn ? cn.val : -1
    }
  
  
    addAtHead(val) {
      const node = new Node(val)
      node.next = this.head.next
      this.head.next = node
    }
  
  
    addAtTail(val) {
      let cn = this.head
      while (cn.next) cn = cn.next
      const node = new Node(val)
      cn.next = node
    }
  
    addAtIndex(index, val) {
      if (index < 0 || index > 1000) return -1
      let currentNode = this.head
      let count = 0
      while (currentNode && count !== index) {
        currentNode = currentNode.next
        count++
      }
      if (currentNode) {
        const node = new Node(val)
        node.next = currentNode.next
        currentNode.next = node
      }
    }
  
  
    deleteAtIndex(index) {
      if (index < 0 || index > 1000) return -1
      let cn = this.head;
      let count = 0;
      while (cn.next && count !== index) {
        cn = cn.next;
        count++;
      }
      if (cn.next) cn.next = cn.next.next;
    }
  }


// ######################################
  var Node=function(val){
    this.val=val;
    this.next=null;
}

var MyLinkedList = function() {
    this.head=null;
    this.tail=null
    this.size=0;
};


MyLinkedList.prototype.get = function(index) {
    
    if(index<0||this.size===0||index>=this.size){
        return -1;
    }
    let curr=this.head;
    for(let i=0;i<index;i++){
        curr=curr.next;
    }
    return curr.val;
    
};


MyLinkedList.prototype.addAtHead = function(val) {
    
    let node=new Node(val);
    if(!this.head){
        this.head=node;
        this.tail=node;
    }
    else{
        node.next=this.head;
        this.head=node;
    }
    this.size++;
    
};


MyLinkedList.prototype.addAtTail = function(val) {
    let node=new Node(val);
    if(!this.head){
        this.head=node;
        this.tail=node;
    }
    else{
        this.tail.next=node;
        this.tail=node;
    }
    this.size++;
    
};


MyLinkedList.prototype.addAtIndex = function(index, val) {
const newNode = new Node(val);
    if (index > this.size) return;
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.size) {
      return this.addAtTail(val);
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next ? cur.next : null;
    cur.next = newNode;
    this.size++;
};


MyLinkedList.prototype.deleteAtIndex = function(index) {
    
    if (index >= this.size || index < 0) return;  
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return this;
    }
  
    let cur = this.head;  
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    
    cur.next = cur.next.next ? cur.next.next : null;
    if(!cur.next) {
      this.tail = cur;
    }
    this.size--;
    
};
