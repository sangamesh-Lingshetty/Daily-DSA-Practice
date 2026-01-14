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
      } else {
        break;
      }
    }
  }

  remove() {
    const maxValue = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;

    // now the bubbling
    this.sinking();
    return maxValue;
  }

  sinking() {
    // first is find the chile node
    let idx = 0;
    let length = this.value.length;
    let element = this.value[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChileIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChileIdx < length) {
        rightChild = this.value[rightChileIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChileIdx;
        }
      }

      if (swap === null) break;

      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
// heap.insert(55);
heap.remove();
console.log(heap);
