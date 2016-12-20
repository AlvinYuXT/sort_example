function heapSort(arr) {
  console.time('test')
  let length = arr.length
  let result = []
  for (let i = parseInt(length / 2); i > 0; i--) {
    sink(arr, i - 1)
  }
  while (arr.length > 0) {
    exchange(arr, 0, arr.length - 1)
    let temp = arr.pop()
    result.unshift(temp)
    sink(arr, 0)
    i++
  }
  console.timeEnd('test')
  return result
}

function sink(arr, index) {
  while (2 * index + 1 < arr.length) {
    let child = 2 * index + 1
    if (arr[child + 1] && arr[child + 1] > arr[child]) child++
    if (arr[child] < arr[index]) break;
    exchange(arr, child, index)
    index = child
  }
}

function exchange(arr, i, j) {
  arr[i] = arr[j] - arr[i]
  arr[j] = arr[j] - arr[i]
  arr[i] = arr[i] + arr[j]
}

var a = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
heapSort(a)
// console.log(heapSort(a))