class MaxBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    // step 01 find the parent index using the formula.
    let idx = this.value.length - 1;
    let element = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];
      console.log(parentIdx);
      if (element > parent) {
        this.value[parentIdx] = element;
        this.value[idx] = parent;
        idx = parentIdx;
      }else{
        break;
      }
    }
  }

  remove(){
    const popup = this.value.shift();
    const lastValue = this.value.pop();

    this.value[0] = lastValue;
    while(lastValue )
    return popup;
  }
}

const heap = new MaxBinaryHeap();
// heap.insert(55);
heap.remove();
console.log(heap);
