function catchThief(X, Y) {
    const distance = Y - X;
    const relSpeed = 1;
    let time = distance / relSpeed;
    return time;
  }

console.log(catchThief(-5,10));