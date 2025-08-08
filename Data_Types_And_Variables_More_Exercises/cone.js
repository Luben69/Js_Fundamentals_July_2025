function mathing(radius, height) {
    let volume = (1/3) * Math.PI * radius ** 2 * height;
    let slant_height = Math.sqrt(radius * radius + height * height)
    let area = Math.PI * radius ** 2 + Math.PI * radius * slant_height
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}