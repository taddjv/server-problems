function firstStep(input) {
  console.log(`input ${input}`);
  return input.split("&");
}

function secondStep(input) {
  return input.map((ele) => {
    return ele.split("=");
  });
}

function thirdStep(input) {
  input.forEach((ele) => {
    ele[1] = ele[1].replace("+", " ");
  });
  return input;
}

function fourthStep(input) {
  input.forEach((ele) => {
    ele.forEach((element, i) => {
      ele[i] = decodeURIComponent(element);
    });
  });
  // Your code here
  return input;
}

function fifthStep(input) {
  let obj = {};
  input.forEach((ele) => {
    obj[ele[0]] = ele[1];
  });
  return obj;
  // Your code here
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
