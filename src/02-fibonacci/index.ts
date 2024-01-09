export function fibonacci(n: number): number[] {
    if (n <= 0) {
        return [];
    }

    const sequence: number[] = [0];

    if (n > 1) {
        sequence.push(1);
        for (let i = 2; i < n; i++) {
            const nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }
    }

    return sequence;
}
