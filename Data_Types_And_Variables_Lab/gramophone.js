function checking(band, album, song) {
    const full_plate_rotatin_in_sec = 2.5;

    let plate_length = (album.length * band.length) * song.length / 2;

    let rotations = Math.ceil(plate_length/full_plate_rotatin_in_sec)

    console.log(`The plate was rotated ${rotations} times.`);
}