const sayHelloWorld = () => {
  document.getElementById('display').innerHTML = 'You just clicked a button'
};

document.getElementById('btn').addEventListener('click', sayHelloWorld)