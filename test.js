function SubArraySum(arr, n) {
    let result = 0, temp = 0;

    // Pick starting point
    for (let i = 0; i < n; i++) {
        temp = 0;
        console.log("i >>>>>>>>>>>" + arr[i] + " temp " + temp)

        for (let j = i; j < n; j++) {
            // sum subarray between current
            // starting and ending points
            console.log("J " + arr[j] + " temp" + temp)
            temp += arr[j];
            result += temp;
            console.log("Temp " + temp + " result " + result)
        }
    }
    return result;
}

// driver program to test above function

let arr = [1, 2, 3];
let n = arr.length;
console.log("Sum of SubArray : "
    + SubArraySum(arr, n));