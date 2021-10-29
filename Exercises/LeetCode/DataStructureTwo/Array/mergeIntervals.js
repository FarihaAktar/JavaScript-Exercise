const intervals = [[1, 3], [2, 6], [15, 18], [8, 10]];


const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log(intervals);

    let result = [];
    result[0] = intervals[0];
    // console.log(result)
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= result[result.length - 1][1]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    return result;

}

const res = mergeIntervals(intervals);

console.log(res)