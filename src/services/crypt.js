const stringToRegex = string => {
  const match = /^\/(.*)\/([a-z]*)$/.exec(string);
  return new RegExp(match[1], match[2]);
};

const B64StringToRegex = base => {
  const string = decodeURIComponent(
    atob(base)
      .split('')
      .map(function(c) {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join('')
  );
  return (string);
};

const B64ArrayDecode = array => {
  const newArray = [];
  array.forEach(elem => {
    newArray.push(B64StringToRegex(elem));
  });
  // console.log(newArray);
  return newArray;
};

module.exports = {B64ArrayDecode, B64StringToRegex};
