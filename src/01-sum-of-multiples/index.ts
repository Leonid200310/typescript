export function sumOfMultiples(multiple: number, max: number): number {
    
    if (max < multiple) {
        return 0;
    }

    let sum = 0;

    for (let i = multiple; i <= max; i += multiple) {
        sum += i;
    }

    return sum;
}
