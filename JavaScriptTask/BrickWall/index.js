let wall = [[1,2,2,1],[3,1,2],[1,2,3],[2,4],[3,1,2],[1,3,1,1]]


const leastBricks = (wall) => {
    let map = {}

    wall.forEach(row => {
        let sum = 0
        for (let n = 0; n < row.length -1; n ++) {
            sum += row[n]
            map[sum] = map[sum] ? map[sum] + 1 : 1
        }
    })
    
    console.log(map)
}


console.log(leastBricks(wall))