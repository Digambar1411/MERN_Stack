const greeting = (name) =>{
  console.log('good morning',name);
  console.log('how are you doing');
}

const processInput = (callbackFunc) =>{
  const name='mayur';
  callbackFunc(name);
}

processInput(greeting);