// code your solution here

function saturdayFun(activity = "roller-skate") {
    const activityPhrase = `This Saturday, I want to ${activity}!`;

    return activityPhrase;
}

const mondayWork = function(workType = "go to the office") {
    return `This Monday, I will ${workType}.`

}

function wrapAdjective(wrapper = "*") {
  return function(innerParam = "special"){
    return `You are ${wrapper}${innerParam}${wrapper}!`

  }
}

