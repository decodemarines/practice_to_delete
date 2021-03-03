// There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

// Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

// Implement the OrderedStream class:

// OrderedStream(int n) Constructs the stream to take n values.
// String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 

// Example:



// Input
// ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
// [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
// Output
// [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

// Explanation
// // Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
// OrderedStream os = new OrderedStream(5);
// os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
// os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
// os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
// os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
// os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
// // Concatentating all the chunks returned:
// // [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// // The resulting order is the same as the order above.
 

// Constraints:

// 1 <= n <= 1000
// 1 <= id <= n
// value.length == 5
// value consists only of lowercase letters.
// Each call to insert will have a unique id.
// Exactly n calls will be made to insert.



const OrderedStream = function(n) {
    this.arr = Array(n + 1)
    this.ptr = 1
  };
  OrderedStream.prototype.insert = function(id, value) {
  
    this.arr[id] = value
    const res = []
    let i
    for(i = this.ptr; i < this.arr.length; i++) {
      if (this.arr[i] != null) res.push(this.arr[i])
      else {
        break
      }
    }
    this.ptr = i
      
    return res
};
  
/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)  // OrderedStream { arr: [ <11 empty items> ], ptr: 1 }
 * var param_1 = obj.insert(id,value)
 */

let os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns []. //  пустой потому что стартует с индекса ptr который равен 0 
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns []. // потому что ptr стартует с индекса 4 он не занят
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
console.log(os)
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// // The resulting order is the same as the order above.


// OrderedStream {arr: Array(6), ptr: 6}
// arr: (6) [empty, "aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// ptr: 6


// ["OrderedStream",    "insert",       "insert",     "insert",         "insert",        "insert"]
// [       [5],       [3, "ccccc"],   [1, "aaaaa"],   [2, "bbbbb"],   [5, "eeeee"],   [4, "ddddd"]]
//       [null,            [],          ["aaaaa"],  ["bbbbb","ccccc"],      [],     ["ddddd","eeeee"]]




// fast
OrderedStream.prototype.insert = function(id, value) {
  this.ptr = this.arr.indexOf(undefined)
  this.arr[id - 1] = value
  index = (this.arr.indexOf(undefined) !== -1
      ? this.arr.indexOf(undefined)
      : this.arr.length)
  return this.arr[this.ptr]
      ? this.arr.slice(this.ptr, index)
      : []
};

OrderedStream.prototype.insert = function(id, value) {
  const index = id - 1
  this.stream[index] = value
  let output = []
  
  if(index > this.pointer) {
      return output
  } else {
      while(this.stream[this.pointer] != undefined) {
          output.push(this.stream[this.pointer])
          this.pointer++
      }
      return output
  }
};



var OrderedStream = function(n) {
  this.nextItem = 1;
  this.n = n;
  this.stream = new Array(n);
};
OrderedStream.prototype.insert = function(id, value) {
  this.stream[id -1] = value;
  var output = []
  if (id === this.nextItem){
      for (var i = id -1; i<this.n;i++){
          if (!this.stream[i]){
              this.nextItem = i+1;
              break;
          }
          output.push(this.stream[i]);  
      }
  }
  return output;
};





var OrderedStream = function(n) {
  this.tmpArr = [];
  this.lastIdx = 1;
};

OrderedStream.prototype.insert = function(id, value) {
  let result = [];
  this.tmpArr[id] = value;
  if(this.lastIdx) {
      let idx = this.tmpArr.findIndex((el,i) => el === undefined && i !== 0);
      if(idx === -1) idx = this.tmpArr.length;
  
      result = this.tmpArr.slice(this.lastIdx, idx);
      this.lastIdx = idx;
  }     
  return result;
};

