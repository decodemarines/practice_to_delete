 var deleteDuplicates = function(head) {
    let cn = head
   while (head && cn.next) {
   (cn.next.val === cn.val)?cn.next = cn.next.next:cn = cn.next
  }
  return head
 };


 // 1.
 var deleteDuplicates = function(head) {
    let pointer = head;
    while(pointer) {
        if(pointer.next && pointer.next.val == pointer.val) {
            pointer.next = pointer.next.next;
        }else {
            pointer = pointer.next;
        }
    }
    return head;
};