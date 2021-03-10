1. Bit shifting: YT.Back To Back SWE:
   Add Two Numbers Without The "+" Sign (Bit Shifting Basics)
   https://www.youtube.com/watch?v=qq64FrA2UXQ

   https://www.youtube.com/watch?v=cOFAmaMBVps Single Number II

   https://tech.liuchao.me/2016/11/count-bits-of-integer/

   https://leetcode.com/discuss/general-discussion/1073221/all-about-bitwise-operations-beginner-intermediate/863477

2. KMP substring search:YT.Back To Back SWE:
   Knuth–Morris–Pratt (KMP) Pattern Matching Substring Search - First Occurrence Of Substring
   https://www.youtube.com/watch?v=BXCEFAzhxGY

3. Rotate Image simple solution C++: YT 3.5 задачи в неделю :reverse + transpose

4. Arrays : https://www.geeksforgeeks.org/array-data-structure
   Strings: https://www.geeksforgeeks.org/string-data-structure/
   Searching: https://www.geeksforgeeks.org/searching-algorithms/
   Matrix: https://www.geeksforgeeks.org/matrix/
   Sorting: https://www.geeksforgeeks.org/sorting-algorithms/

5. Find Minimum in Rotated Sorted Array: Binary Search solution: YT ThinkFWD

6. simple swap var a= [7,8,9,10], i=2, j=3;[a[i],a[j]] = [a[j],a[i]]

   const swap = (a, b) => {
   const temp = nums[a]
   nums[a] = nums[b]
   nums[b] = temp
   }

   https://en.wikipedia.org/wiki/XOR_swap_algorithm

7. YT. Back To Back SWE: Search A 2D Sorted Matrix - Fundamentals of Search Space Reduction
   https://www.youtube.com/watch?v=FOa55B9Ikfg

8. Disjoint set Union
   https://leetcode.com/discuss/general-discussion/1072418/disjoint-set-union-dsuunion-find-a-complete-guide
   List of problems: https://leetcode.com/list/5lhmb4mj/

9. сумма двух в массиве 4 способа https://habr.com/ru/company/skillbox/blog/443886/
   HappyLynx
   10 апреля 2019 в 17:25 0
   Потому что Array.indexOf работает за O(n), в итоге весь ваш алгоритм работает за O(n^2), вы просто переложили половину работы по перебору влоб на плечи реализации метода indexOf.

   ```
   var minMoves = function(nums) {
       return nums.reduce((acc, cur) => acc + cur) - nums.length * Math.min(...nums)
       // sum can overflow & Math.min with destructuring can break (MDN)
   }
   ```

10. -380. Insert Delete GetRandom O(1)// https://www.youtube.com/watch?v=WtkwD7ikxfg
    -609. Find Duplicate File in System
    -703. [-] Kth Largest Element in a Stream
    -706. [x] Design HashMap
    -705. Design HashSet
    -641. Design Circular Deque
    -622. Design Circular Queue
    -707. Design Linked List
    -146. LRU Cache https://www.youtube.com/watch?v=akFRa58Svug&list=PLEJXowNB4kPxQIN2dCUAnQ_92HIziG4x6&index=80
    -635. Design Log Storage System
    -1166. Design File System
    -1472. Design Browser History
    -1500. Design a File Sharing System
    -582. Kill process
    -1756. Design Most Recently Used Queue

    -384. Shuffle an Array
    -1441. Build an Array With Stack Operations

11. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of

```
    Обход TypedArray
    let iterable = new Uint8Array([0x00, 0xff]);

    for (let value of iterable) {
    console.log(value);
   }
   // 0
   // 255

```

```
function* fibonacci() { // функция-генератор
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    // ограничивает последовательность на 1000
    if (n > 1000)
        break;
    console.log(n);
}

```
