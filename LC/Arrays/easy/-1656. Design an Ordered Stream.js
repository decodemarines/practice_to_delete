// There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

// Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

// Implement the OrderedStream class:

// OrderedStream(int n) Constructs the stream to take n values.
// String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 
const OrderedStream = function(n) {
    this.arr = Array(n + 1)
    this.ptr = 1
  };
OrderedStream.prototype.insert = function(id, value) {
  
    this.arr[id] = value
    const res = []
    let i
    for(i = this.ptr, len = this.arr.length; i < len; i++) {
      if (this.arr[i] != null) res.push(this.arr[i])
      else {
        break
      }
    }
    this.ptr = i
      
    return res
  };