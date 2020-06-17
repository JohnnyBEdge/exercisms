export const hey = (message) => {
  let response = "Whatever.";

  const upperCase = message => 
    message === message.toUpperCase();
  const question = message => 
    message.trim().charAt(message.trim().length-1) === "?";
  const empty = message => 
    message.trim().length === 0;
  const nonLetters = message => !!message.trim().match(/[a-zA-Z]+/);
  
  if(upperCase(message) && question(message) && nonLetters(message)){
    response = "Calm down, I know what I'm doing!";
  } else if(empty(message)){
    response = "Fine. Be that way!"
    } else if(upperCase(message) && nonLetters(message)){
    response = "Whoa, chill out!";
  } else if(question(message)){
    response = "Sure."
  }
  
  return response;


};