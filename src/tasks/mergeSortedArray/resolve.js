// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

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

  return data
}

module.exports = merge
