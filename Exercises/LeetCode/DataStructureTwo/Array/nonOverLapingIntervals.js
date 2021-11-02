const eraseOverlapIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log(intervals)
    const len = intervals.length;
    let counter = 0;
    let j = 0;
    for (let i = 1; i < len; i++) {
        let next_start_index = intervals[i][0]
        let next_end_index = intervals[i][1]
        let current_end = intervals[j][1]

        if (current_end > next_start_index) {
            counter++;
            console.log(current_end)
            if (next_end_index < current_end) {
                j = i
            }
        }
        else {
            j = i
        }
    }
    return counter
}

// const arrOfIntervals =  [[1,2],[2,3],[3,4],[1,3]];
// const arrOfIntervals =  [[1,2],[1,2],[1,2]];

const arrOfIntervals = [[1, 100], [11, 22], [1, 11], [2, 12]];

const res = eraseOverlapIntervals(arrOfIntervals);

console.log(res)