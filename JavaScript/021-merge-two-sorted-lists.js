function ListNode(val) {
  if (!(this instanceof ListNode)) {
    return new ListNode(val)
  }
  this.val = val
  this.next = null
}

let mergeTwoLists = (l1, l2) => {
  let head = (curr = ListNode())

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  curr.next = l1 || l2
  return head.next
}
