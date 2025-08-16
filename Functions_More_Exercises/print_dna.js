function dnaHelix(n) {
    const seq = "ATCGTTAGGG";
    let idx = 0;

    for (let i = 0; i < n; i++) {
        const a = seq[idx % seq.length];
        const b = seq[(idx + 1) % seq.length];
        idx += 2;

        const mod = i % 4;
        let line;
        if (mod === 0)      line = `**${a}${b}**`;
        else if (mod === 1) line = `*${a}--${b}*`;
        else if (mod === 2) line = `${a}----${b}`;
        else                line = `*${a}--${b}*`;

        console.log(line);
    }
}