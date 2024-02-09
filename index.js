/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const data = []
  let a = 0
  let b = 0
  for (let i = 0; i < m + n; i++) {
    const aLol = nums1[a]
    const bLol = nums2[b]
    console.log(i, aLol, bLol)
    if (aLol < bLol && m > a) {
      data.push(aLol)
      a++
      continue
    } else if (n > b) {
      data.push(bLol)
      b++
      continue
    } else {
      data.push(aLol)
      a++
      continue
    }
  }
  console.log(data)
}

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2)
// merge([1], 1, [], 0)
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
