(() => {
  let heap = [null];
  let insertHeap = (value) => {
    heap.push(value);
    bubbleUp({value: value, index: heap.length - 1});
  };
  let bubbleUp = (child) => {
    let parent = {
      index: Math.floor(child.index/2),
      value: heap[Math.floor(child.index/2)]
    };
    // refactor for comparison func
    if (parent.value > child.value) {
      heap[parent.index] = child.value;
      heap[child.index] = parent.value;
    };
  };
  let bubbleDown = (parent) => {
    let child1 = {
      index: parent.index * 2,
      value: heap[parent.index * 2]
    };
    let child2 = {
      index: parent.index * 2 + 1,
      value: heap[parent.index * 2 + 1]
    };
    // refactor direction to take a cb to order
    let direction = child1.value < child2.value ? child1 : child2;
    if (parent.value > direction.value) {
      heap[parent.index] = direction.value;
      heap[direction.index] = parent.value;
    };
  }
  let test = [7, 2, 5, 8, 10, 5, 25, 347, 16, 36, 85, 83, 52, 34 ,7234];
  console.log(test.length);
  for (const val of test) {
    insertHeap(val);
  };
  console.log(heap);
})()