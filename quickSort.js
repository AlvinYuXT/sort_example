function quickSort(arr, left, right) {
  if (left < right) {
    let standard = arr[right], i = left
    for (let j = left; j <= right; j++) {
      if (arr[j] <= standard) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
      }
    }
    quickSort(arr, left, i - 2)
    quickSort(arr, i, right)
  }
  return arr
}


var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.time('time')
quickSort(arr, 0, arr.length - 1)
console.timeEnd('time')