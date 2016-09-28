function heapSort(arr) {
  console.time('test')
  let length = arr.length
  while (length > 0) {
    for (let i = length - 1; i >= 0; i--) {
      let parent = ~~((i - 1) / 2)
      if (arr[i] > arr[parent]) {
        let temp = arr[parent]
        arr[parent] = arr[i]
        arr[i] = temp
      }
    }
    let max = arr[0];
    arr[0] = arr[length - 1]
    arr[length - 1] = max
    length--
  }
  console.timeEnd('test')
  return arr
}


var a = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
heapSort(a)
// console.log(heapSort(a))