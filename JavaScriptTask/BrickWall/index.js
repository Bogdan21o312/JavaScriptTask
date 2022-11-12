// BrickWall ====================================================================================================

/**
 *  By condition: we have a rectangular brick wall with a height of n bricks.
 *  All bricks are the same height, but can be of different widths.
 *  Each row may have a different number of different bricks,
 *  but the width of all rows of bricks will always be the same.
 *
 * If you draw a vertical line along the wall,
 * then such a line will cross a certain number of bricks.
 * It is necessary to find the minimum number of bricks that such a vertical line can cross.
 * It is important to note that if the line passes at the junction of two bricks,
 * then this is not considered an intersection.
 * One more thing - we cannot draw a line from one side of the wall - the line
 * must be exactly in the inner part of the wall.
 */

/**
*
* Algorithm complexity 0(n*m)
*
* Memory difficulty 0(m)
*
* */

let wall = [[1,2,2,1],[3,1,2],[1,2,3],[2,4],[3,1,2],[1,3,1,1]]
let wall2 = [[1],[1],[1]]
let wall3 = [[1,2,2,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[3,1,2],[1,2,3],[2,4],[1,3,1,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[3,1,2],[1,3,1,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[1,3,1,1]]
let wall4 = [[1,2,2,1],[1,3,1,1],[3,1,2],[1,2,3],[2,4],[3,1,2],[1,3,1,1]]
let wall5 = [[1,2,2,1],[1,3,1,1],[1,3,1,1],[1,3,1,1],[3,1,2],[1,2,3],[2,4],[3,1,2],[1,3,1,1]]
let wall6 = [[1,2,2,1],[3,1,2],[1,2,3],[2,4],[1,3,1,1],[1,3,1,1],[3,1,2],[1,3,1,1]]
let wall7 = []



const leastBricks = (wall) => {
    let map = {}
    let max = 0

    wall.forEach(row => {
        let sum = 0
        for (let n = 0; n < row.length -1; n ++) {
            sum += row[n]
            map[sum] = map[sum] ? map[sum] + 1 : 1
            max = Math.max(map[sum], max)
        }
    })
    
    return wall.length - max
}


console.log(leastBricks(wall))
console.log(leastBricks(wall2))
console.log(leastBricks(wall3))
console.log(leastBricks(wall4))
console.log(leastBricks(wall5))
console.log(leastBricks(wall6))
console.log(leastBricks(wall7))

//====================================================================================================