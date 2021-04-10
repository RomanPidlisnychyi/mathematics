let event = 0;

export default function ownThrottle(time) {
  event += 1;
  if (event > 1) {
    return false;
  }

  setTimeout(() => {
    event = 0;
  }, time);

  return true;
}
