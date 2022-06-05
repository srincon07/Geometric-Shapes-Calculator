// Square code
function squarePerimeter(side) {
  return side * 4;
};

function squareArea(side) {
  return side * side;
};

// Triangle code
function validateTriangle(leg, base) {
  if (leg > 0 && base > 0) {
    document.getElementById('alert').style.display = 'none';
    return true;
  }

  document.getElementById('alert').textContent = 'Use positive values';
}

function trianglePerimeter(leg, base) {
  return (leg * 2) + base;
};

function triangleHeight(leg, base) {
  return Math.sqrt((leg * leg) - ((base * base) / 4));
};

function triangleArea(leg, base) {
  const height = triangleHeight(leg, base);
  return (base * height) / 2;
};

// Circle code
// Diameter
function circleDiameter(radio) {
  return radio * 2;
};

// Pi
const PI = Math.PI;
console.log('PI is: ' + PI);

// Circumference
function circlePerimeter(radio) {
  const diameter = circleDiameter(radio);
  return diameter * PI;
};

// Area
function circleArea(radio) {
  return (radio * radio) * PI;
}


// Here we interact with HTML

// Functions for Square section 
function calculateSquarePerimeter() {
  const input = document.getElementById('squareInput');
  const value = input.value;

  const perimeter = squarePerimeter(value);
  document.getElementById('squareResult').textContent = `Perimeter: ${perimeter}`;
};


function calculateSquareArea() {
  const input = document.getElementById('squareInput');
  const value = input.value;

  const area = squareArea(value);
  document.getElementById('squareResult').textContent = `Area: ${area}`;
};

// Functions for Triangle section
function calculateTrianglePerimeter() {
  const legs = Number(document.getElementById('legs').value);
  const base = Number(document.getElementById('base').value);

  if (validateTriangle(legs, base)) {
    const perimeter = trianglePerimeter(legs, base);
    document.getElementById('triangleResult').textContent = `Perimeter: ${perimeter}`;
  };

};

function calculateTriangleHeight() {
  const legs = Number(document.getElementById('legs').value);
  const base = Number(document.getElementById('base').value);

  if (validateTriangle(legs, base)) {
    const height = triangleHeight(legs, base);
    document.getElementById('triangleResult').textContent = `Height: ${height}`;
  };
};

function calculateTriangleArea() {
  const legs = Number(document.getElementById('legs').value);
  const base = Number(document.getElementById('base').value);

  if (validateTriangle(legs, base)) {
    const area = triangleArea(legs, base);
    document.getElementById('triangleResult').textContent = `Area: ${area}`;
  };
};

// Functions for Circle section
function calculateCirclePerimeter() {
  const radio = document.getElementById('circleRadio').value;

  const perimeter = circlePerimeter(radio);
  document.getElementById('circleResult').textContent = `Perimeter: ${perimeter}`;
};

function calculateCircleDiameter() {
  const radio = document.getElementById('circleRadio').value;

  const diameter = circleDiameter(radio);
  document.getElementById('circleResult').textContent = `Diameter: ${diameter}`;
};

function calculateCircleArea() {
  const radio = document.getElementById('circleRadio').value;

  const area = circleArea(radio);
  document.getElementById('circleResult').textContent = `Area: ${area}`;
};

// Functions to calculate mean
function calculateMean(list) {

  const numbersList = [];

  for (element of list) {
    numbersList.push(Number(element));
  }

  const sumList = numbersList.reduce(
    function (accumulatedValue = 0, listElement) {
      return accumulatedValue + listElement;
    }
  );

  return sumList / list.length;
};

function calculateListMean() {
  const input = document.getElementById('meanNumbersSet').value;
  const data = input.split(' ');

  const mean = calculateMean(data);
  document.getElementById('meanResult').innerText = 'Mean: ' + mean;
};

// Functions to calculate median
function mean(list) {
  const numbersList = [];

  for (element of list) {
    numbersList.push(Number(element));
  }

  const sumList = numbersList.reduce(
    function (accumulatedValue = 0, listElement) {
      return accumulatedValue + listElement;
    }
  );

  return sumList / list.length;
};

function findMedian(list) {

  const mapped = list.map(function (el, i) {
    return { index: i, value: el };
  });

  mapped.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  var result = mapped.map(function (el) {
    return list[el.index];
  });

  const halfList = parseInt(result.length / 2);

  function isEven(value) {
    if (value % 2 === 0)
      return true;

    return false;
  };

  let median = 0;

  if (isEven(result.length)) {
    const value1 = result[halfList - 1];
    const value2 = result[halfList];

    median = mean([value1, value2]);

  } else {
    median = result[halfList];
  }

  return median;
};

function calculateMedian() {
  const input = document.getElementById('medianNumbersSet').value;
  const data = input.split(' ');

  const median = findMedian(data);
  document.getElementById('medianResult').innerText = 'Median: ' + median;
};

// Functions to Calculate Mode
function calculateMode(list) {

  const listCount = {};

  list.map(
    function (el) {
      if (listCount[el]) {
        listCount[el] += 1;
      } else {
        listCount[el] = 1;
      }
    }
  );

  const listArray = Object.entries(listCount).sort(
    function (cummulatedValue, newValue) {
      return cummulatedValue[1] - newValue[1];
    }
  );
  var mode = [];
  for (let i = 0; i < listArray.length; i++){
    for (let j = 0; j < listArray[i].length; j++){
      if (listArray[i][j] === (listArray[listArray.length - 1][1]))
        mode.push(listArray[i][0]);
    }
  }

  mode = mode.join(', ');
  return mode;
};

function calculateListMode() {
  const input = document.getElementById('modeDataSet').value;
  const listInput = input.split(' ');

  const mode = calculateMode(listInput);
  document.getElementById('modeResult').innerText = 'Mode: ' + mode;
};

//   Functions to calculate harmonic mean
function calculateHarmonic(list) {

  let cummulated = 0;
  for (element of list) {
    cummulated += (1 / element);
  }

  const result = list.length / cummulated;

  return result;
};

function calculateHarmonicMean() {
  const input = document.getElementById('harmonicNumbersSet').value;
  const data = input.split(' ');

  const harmonic = calculateHarmonic(data);
  document.getElementById('harmonicResult').innerText = 'Harmonic Mean: ' + harmonic;
};