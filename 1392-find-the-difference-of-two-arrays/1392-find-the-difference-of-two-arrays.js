/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const unique1 = new Set(nums1);
    const arr1 = [...unique1];
    const unique2 = new Set(nums2);
    const arr2 = [...unique2];

    const answer = [[],[]]

    for (let i = 0; i < arr1.length; i++) {
        if (!unique2.has(arr1[i])) {
            answer[0].push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!unique1.has(arr2[j])) {
            answer[1].push(arr2[j]);
        }
    }

    return answer;
};

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

// let ans1=new Set(nums1)
// nums2.forEach(v=>{ans1.delete(v)});
// let ans2=new Set(nums2);
// nums1.forEach(v=>{ans2.delete(v)});    

// return [[...ans1],[...ans2]];