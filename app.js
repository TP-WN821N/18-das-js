// 1.Berilgan foydalanuvchi ismlari massividan eng uzun ismni toping.
function longestName(arr = []) {
  let maxLnName = 0
  let maxName = ""
  arr.forEach(item => {
    if (maxLnName < item.length) {
      maxLnName = item.length
      maxName = item
    }
  })
  return maxName
}
// console.log(longestName(["Alice", "Bob", "Christina", "David"])); 


// 2.Berilgan qator ichidagi bir xil belgilarni olib tashlab, yangi qator hosil qiling.
function removeConsecutiveDuplicates(str = '') {
  let arr = str.split("")
  let new_arr = []
  arr.forEach(item => {
    if (!new_arr.includes(item)) {
      new_arr.push(item)
    }
  })
  return new_arr.join("")
}
// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"


// 3.Berilgan massivning elementlarini k qadamga o'ngga ko'chiring.
function rotateArray(arr = [], k) {
  let new_arr = []
  let result
  for (let i = arr.length - 1; i >= arr.length - k; i--) {
    new_arr.push(arr[i])
  }
  arr.splice(arr.length - k, k)
  new_arr.reverse()
  return [...new_arr, ...arr]
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2)); // [6, 7, 1, 2, 3, 4, 5]


// 4.Berilgan ikki o'lchamli massivni bitta tekis qatorga aylantiring.
function flattenArray(arr = []) {
  return arr.flat(Infinity)
}
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]


// 5.Berilgan son n uchun n x n ko'paytirish jadvali yaratish.
function multiplicationTable(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    let new_arr = []
    for (let j = 1; j <= n; j++) {
      new_arr.push(i * j)
    }
    result.push(new_arr)
  }
  return result
}

// console.log(multiplicationTable(3));
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]



// 6.Berilgan massivni ikkita teng qismga ajrating. Agar massivning uzunligi toq bo'lsa, markaziy elementni ikkinchi qismga qo'shing.
function splitArrayInHalf(arr = []) {
  let oneArr = []
  let twoArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 == 0) {
      if (i < arr.length / 2) {
        oneArr.push(arr[i])
      } else {
        twoArr.push(arr[i])
      }
    } else {
      if (i <= arr.length / 2) {
        oneArr.push(arr[i])
      } else {
        twoArr.push(arr[i])
      }
    }
  }
  return { oneArr, twoArr }
}
// console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]
// console.log(splitArrayInHalf([1, 2, 3, 4]));    // [[1, 2], [3, 4]]


// 7.Berilgan kvadrat matritsaning asosiy va yordamchi diagonallarini almashtiring.
function swapDiagonals(matrix) {
  let asosiyd = []
  let yordamchid = []
  let new_arr = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i == j) {
        asosiyd.push(matrix[i][j])
      } else if (i + j + 1 == matrix.length) {
        yordamchid.push(matrix[i][j])
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i == j) {
        // new_arr[i][j] = yordamchid[i]
        console.log(yordamchid[i]);
      } else if (i + j + 1 == matrix.length) {
        // new_arr[i][j] = asosiyd[i]
        // console.log("qo'shimcha");
      }
      else {
        // new_arr[i][j] = matrix[i][j]
      }
    }
  }
  return new_arr
}
console.log(swapDiagonals([
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
  [7, 8, 9, 11]
]));