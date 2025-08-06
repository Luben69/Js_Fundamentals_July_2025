function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floors_done = 0;

    let layer = 1;

    while (base > 2) {
        let totalArea = base * base;
        let innerArea = (base - 2) * (base - 2);
        let outerLayer = totalArea - innerArea;

        if (layer % 5 === 0) {
            lapis += outerLayer * increment;
        } else {
            marble += outerLayer * increment;
        }

        stone += innerArea * increment;

        base -= 2;
        layer++;
        floors_done++;
    }

    gold += base * base * increment;
    floors_done++;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(floors_done * increment)}`);
}