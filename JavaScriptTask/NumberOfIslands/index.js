// NumberOfIslands ====================================================================================================

/**
 *
 *  It is necessary to count the number of islands in the matrix.
 *  An island is considered to be units (1)
 *  that are next to each other horizontally and vertically.
 *  Matrix cells with zeros are considered water.
 *
 */


let grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

let grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

let grid3 = [
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1']
];

let grid4 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0']
];

let grid5 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

let numIslands = (grid) => {
    if (grid.length === 0) return 0
    let rowsL = grid.length;
    let colsL = grid[0].length;
    let counter = 0;

    const markNeighbours = (binaryMatrix, R, C) => {
        binaryMatrix[R][C] = '6';
        if (binaryMatrix?.[R - 1]?.[C] === '1') {
            markNeighbours(binaryMatrix, R - 1, C)
        }
        if (binaryMatrix?.[R + 1]?.[C] === '1') {
            markNeighbours(binaryMatrix, R + 1, C)
        }
        if (binaryMatrix[R][C - 1] === '1') {
            markNeighbours(binaryMatrix, R, C - 1)
        }
        if (binaryMatrix[R][C + 1] === '1') {
            markNeighbours(binaryMatrix, R, C + 1)
        }
    }

    for (let R = 0; R < rowsL; R++) {
        for (let C = 0; C < colsL; C++) {

            if (grid[R][C] === '1') {
                counter++;
                markNeighbours(grid, R, C);
            }
        }
    }

    return counter;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));
console.log(numIslands(grid4));
console.log(numIslands(grid5));

//====================================================================================================