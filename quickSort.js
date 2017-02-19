function quickSort(arr, left, right) {
  if (left < right) {
    let standard = arr[right], i = left
    for (let j = left; j <= right; j++) {
      if (arr[j] <= standard) {
        exchange(arr, i, j)
        i++
      }
    }
    quickSort(arr, left, i - 2)
    quickSort(arr, i, right)
  }
  return arr
}


var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time('time')
quickSort(arr, 0, arr.length - 1)
console.timeEnd('time')


function QS(arr, left, right) {
  // if(left < right) throw new Error('left cannot above right')
  // if(left === right) return arr
  if (left === right) return arr
  var standard = arr[left]
  var i = left
  var j = right

  while (j > i) {
    while (j > i && arr[j] > standard) j--

    if (j > i) {
      exchange(arr, i, j) // 大的交换小的 用if是防止i == j
    }

    while (j > i && arr[i] < standard) i++
    if (j > i) {
      exchange(arr, i, j) // 大的交换小的 用if是防止i == j
    }
  }

  if (left < j) QS(arr, left, j - 1)
  if (j < right) QS(arr, j + 1, right)
  return arr
}

function exchange(arr, a, b) {
  if (a === b) return
  arr[a] = arr[a] - arr[b]
  arr[b] = arr[a] + arr[b]
  arr[a] = arr[b] - arr[a]
  console.log('1')
}