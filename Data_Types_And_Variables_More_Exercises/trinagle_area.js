function heron(n1, n2, n3) {
    let semi_perimeter = (n1 + n2 + n3) / 2;
    let triangle_area = Math.sqrt(semi_perimeter * (semi_perimeter - n1) * (semi_perimeter - n2) * (semi_perimeter - n3))
    console.log(triangle_area);
}