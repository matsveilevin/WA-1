var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function (element) {
    return element.length;
});


elements.map(element =>{ element.length});

elements.map(element => {
    return element.length;
}); 


elements.map(element => element.length); 


elements.map(({
    length
}) => length); 

