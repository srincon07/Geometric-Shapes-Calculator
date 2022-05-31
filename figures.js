// Square code
function squarePerimeter(side){
    return side * 4;
};

function squareArea(side){
    return side * side;
};

// Triangle code
function trianglePerimeter(leg, base){
    return (leg * 2) + base;
};

function triangleHeight(leg, base){
    return Math.sqrt((leg * leg) - ((base * base) / 4));
};

function triangleArea(leg, base){
    const height = triangleHeight(leg, base);
    return (base * height) / 2;
};

// Circle code
// Diameter
function circleDiameter(radio){
    return radio * 2;
};

// Pi
const PI = Math.PI;
console.log('PI is: ' + PI);

// Circumference
function circlePerimeter(radio){
    const diameter = circleDiameter(radio);
    return diameter * PI;
};

// Area
function circleArea(radio){
    return (radio * radio) * PI;
}


// Here we interact with HTML

// Functions for Square section 
function calculateSquarePerimeter(){
    const input = document.getElementById('squareInput');
    const value = input.value;

    const perimeter = squarePerimeter(value);
    document.getElementById('squareResult').textContent = `Perimeter: ${perimeter}`;
};


function calculateSquareArea(){
    const input = document.getElementById('squareInput');
    const value = input.value;

    const area = squareArea(value);
    document.getElementById('squareResult').textContent = `Area: ${area}`;
};

// Functions for Triangle section
function calculateTrianglePerimeter(){
    const legs = Number(document.getElementById('legs').value);
    const base = Number(document.getElementById('base').value);

    if (legs >=0 && base >=0) {
        const perimeter = trianglePerimeter(legs, base);
    }
    else {
        alert('Enter positive numbers.')
    }

    document.getElementById('triangleResult').textContent = `Perimeter: ${perimeter}`;
};

function calculateTriangleHeight(){
    const legs = Number(document.getElementById('legs').value);
    const base = Number(document.getElementById('base').value);

    const height = triangleHeight(legs, base);
    document.getElementById('triangleResult').textContent = `Height: ${height}`;
};

function calculateTriangleArea(){
    const legs = Number(document.getElementById('legs').value);
    const base = Number(document.getElementById('base').value);

    const area = triangleArea(legs, base);
    document.getElementById('triangleResult').textContent = `Area: ${area}`;
};

// Functions for Circle section
function calculateCirclePerimeter(){
    const radio = document.getElementById('circleRadio').value;

    const perimeter = circlePerimeter(radio);
    document.getElementById('circleResult').textContent = `Perimeter: ${perimeter}`;
};

function calculateCircleDiameter(){
    const radio = document.getElementById('circleRadio').value;

    const diameter = circleDiameter(radio);
    document.getElementById('circleResult').textContent = `Diameter: ${diameter}`;
};

function calculateCircleArea(){
    const radio = document.getElementById('circleRadio').value;

    const area = circleArea(radio);
    document.getElementById('circleResult').textContent = `Area: ${area}`;
};