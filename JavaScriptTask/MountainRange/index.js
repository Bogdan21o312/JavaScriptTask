// MountainRange ====================================================================================================

/**
 *
 * A mountain range is an array that can be conditionally
 * divided into 2 parts - increasing and decreasing,
 * and at the junction of these two parts there is a peak that we need to find.
 * In the ascending part,
 * the numbers are sorted in ascending order.
 * And in descending order - in descending order.
 * In this case, there may be a situation where the increasing or decreasing part is completely absent.
 * And the highest point (peak) will still be present.
 *
 */

/**
 *
 * Algorithm complexity 0(log n)
 *
 * */

let arr1 = [1, 2, 3, 4, 3, 2, 1]
let arr3 = [10, 9, 8, 7, 6]
let arr2 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2]

let peakIndexInMountainArray = (arr) => {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        const middle = Math.floor((start + end) / 2)

        console.log({s: arr[start], m: arr[middle], e: arr[end], start, middle, end})

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1
        } else {
            end = middle
        }
    }
    console.log({s: arr[start], e: arr[end], start, end})
    return start
};

console.log(peakIndexInMountainArray(arr1))
console.log(peakIndexInMountainArray(arr2))
console.log(peakIndexInMountainArray(arr3))

//====================================================================================================
