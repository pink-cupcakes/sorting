(() => {
  class Heap{
    constructor(arr) {
      console.log(this);
      this.heap = arr;
      console.log(this)
    };
    
    insertHeap(value) {
      this.heap.push(value);
      this.bubbleUp({value: value, index: this.heap.length - 1});
    };

    deleteFromHeap(index) {
      let deletedValue = this.heap[index];
      this.heap[index] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.bubbleDown({value: this.heap[index], index: index});
      return deletedValue;
    };

    bubbleUp(child) {
      let parent = {
        index: Math.floor(child.index/2),
        value: this.heap[Math.floor(child.index/2)]
      };
      // refactor for comparison func
      if (parent.value > child.value) {
        this.heap[parent.index] = child.value;
        this.heap[child.index] = parent.value;
        this.bubbleUp({value: this.heap[parent.index], index: parent.index});
      };
    };

    bubbleDown(parent) {
      let child1 = {
        index: parent.index * 2,
        value: this.heap[parent.index * 2]
      };
      let child2 = {
        index: parent.index * 2 + 1,
        value: this.heap[parent.index * 2 + 1]
      };
      // refactor direction to take a cb to order
      let direction = child1.value < child2.value ? child1 : child2;
      if (parent.value > direction.value) {
        this.heap[parent.index] = direction.value;
        this.heap[direction.index] = parent.value;
        this.bubbleDown({value: this.heap[direction.index], index: direction.index});
      };
    }
  };

  let test = [7, 2, 5, 8, 10, 25, 347, 16, 36, 85, 83, 52, 34 ,7234, 1, 3, 6, 6234986];
  let test1 = new Heap([null]);
  let orderedArr = [];
  console.log(test.length);
  for (const val of test) {
    test1.insertHeap(val);
  };
  while(test1.heap.length != 0) {
    let val1 = test1.deleteFromHeap(0);
    orderedArr.push(val1);
  };
  console.log(test1.heap);
  console.log(orderedArr);
})();