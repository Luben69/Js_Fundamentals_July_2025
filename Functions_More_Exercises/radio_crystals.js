function crystalProcessing(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);

        crystal = processCrystal(crystal, target);

        console.log(`Finished crystal ${target} microns`);
    }

    function processCrystal(crystal, target) {
        function cut(x) { return x / 4; }
        function lap(x) { return x * 0.8; }
        function grind(x) { return x - 20; }
        function etch(x) { return x - 2; }

        function applyOperation(op, name) {
            let count = 0;
            while (true) {
                let next = op(crystal);
                if (next < target - 1) break; // stop before overshoot
                crystal = next;
                count++;
            }
            if (count > 0) {
                console.log(`${name} x${count}`);
                crystal = Math.floor(crystal); // wash after batch
                console.log("Transporting and washing");
            }
        }

        // Apply in order
        applyOperation(cut, "Cut");
        applyOperation(lap, "Lap");
        applyOperation(grind, "Grind");
        applyOperation(etch, "Etch");

        // Fix with X-ray if needed
        if (crystal < target) {
            crystal++;
            console.log("X-ray x1");
        }

        return crystal;
    }
}