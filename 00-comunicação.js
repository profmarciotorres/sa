function dataiso(d) {
    return d.split('/').reverse().join('-');
}

console.log(dataiso('04/12/2025'));