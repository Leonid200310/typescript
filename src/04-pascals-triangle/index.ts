export function getPascalsTriangleRow(rowIndex: number): number[] {
    if (rowIndex < 0) {
        throw new Error('Row index cannot be negative');
    }

    const result: number[] = [];

    for (let i = 0; i <= rowIndex; i++) {
        let currentNumber = 1;

        // Each element in a row is a combination (n choose k)
        for (let j = 0; j <= i; j++) {
            if (j > 0) {
                currentNumber = (currentNumber * (i - j + 1)) / j;
            }
            result.push(currentNumber);
        }
    }

    return result;
}
