// named function
function hola() {
  return 'hola';
}

function hola2() {
  return function() {
    return 'hola desde anonymous function'
  };
}

function hola3() {
  return () => {
    return 'hola desde lambda function'
  }
}

function hola4() {
  return () => 'hola desde lambda function'
}
console.log(hola())
console.log(hola2()())
console.log(hola3()())
console.log(hola4()())



