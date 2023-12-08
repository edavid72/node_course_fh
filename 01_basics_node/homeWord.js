const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8').toLowerCase();

// ! HomeWork: Filter the word 'react' in different ways and count the number of times it is repeated in text.

// ? Method One: filter

const countFilter = (text) => {
  const arrayText = text.split(' ');

  const countReact = arrayText.filter((word) => {
    return word === 'react';
  });

  return `With method one the word "react" is repeated ${countReact.length} times.`;
};

const methodOne = countFilter(content);
console.log(methodOne);

// ? Method Two: filter + includes

const countFilterIncludes = (text) => {
  const arrayText = text.split(' ');

  const countReact = arrayText.filter((word) => {
    return word.includes('react');
  });

  return `With method two the word "react" is repeated ${countReact.length} times`;
};

const methodTwo = countFilterIncludes(content);
console.log(methodTwo);

// ? Method Three: regex or RegExp (regular phrase)

const regexWord = /react/gi;

const coincidences = content.match(regexWord ?? []).length;
console.log(
  `With method three the word "react" is repeated ${coincidences} times`
);
