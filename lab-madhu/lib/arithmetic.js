module.exports = exports = {};

exports.add = (num1, num2) => {
  if((typeof num1 !== 'number') || (typeof num2 !== 'number') ){
    return null;
  }
  if((typeof num1 === 'number') && (typeof num2 === 'number') ){
    return num1 + num2;
  }
};

exports.sub = (num1, num2) =>{
  if((typeof num1 !== 'number') || (typeof num2 !== 'number') ){
    return null;
  }
  if((typeof num1 === 'number') && (typeof num2 === 'number') ){
    return num1-num2;
  }
};