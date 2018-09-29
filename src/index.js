module.exports = function check(str, bracketsConfig) {
  let open =  [];
  let closed = [];
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    closed.push(bracketsConfig[i][1]);
  }
 
  for (let i = 0; i < str.length; i++) {
    let target = str[i] + str[i + 1];
    let closeBracketIndex = closed.indexOf(str[i + 1]);
    let openBracketIndex = open.indexOf(str[i]);
    
    if (closeBracketIndex !== -1) {
      if (closeBracketIndex === openBracketIndex) {
        str = str.replace(target, '');
        i -= 2;
      }
    }
  }
 return str.length === 0;
}
