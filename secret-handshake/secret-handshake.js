//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  let secretHandshake = [];

  if(num & 1)
    secretHandshake.push('wink');
  if(num & 2)
    secretHandshake.push('double blink');
  if(num & 4)
    secretHandshake.push('close your eyes');
  if(num & 8)
    secretHandshake.push('jump');
  if(num & 16)
    secretHandshake.reverse();

  return secretHandshake;
};
