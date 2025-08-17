function lastKNumbersSequence(n, k) {
    let seq = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let prevK = seq.slice(start, i);

        let next = prevK.reduce((a, b) => a + b, 0);

        seq.push(next);
    }

    console.log(seq.join(' '));
}