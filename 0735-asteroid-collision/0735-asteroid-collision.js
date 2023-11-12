/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let currentAsteroid = asteroids[i];

    // Process collisions
    while (stack.length > 0 && stack[stack.length - 1] > 0 && currentAsteroid < 0) {
      let topAsteroid = stack[stack.length - 1];

      if (Math.abs(topAsteroid) < Math.abs(currentAsteroid)) {
        // Current asteroid is larger, pop from stack and keep checking
        stack.pop();
      } else if (Math.abs(topAsteroid) === Math.abs(currentAsteroid)) {
        // Equal size, both explode, do not push current asteroid
        stack.pop();
        currentAsteroid = 0;  // Mark as 'handled'
        break;
      } else {
        // Top asteroid is larger, no need to push current asteroid
        currentAsteroid = 0;  // Mark as 'handled'
        break;
      }
    }

    if (currentAsteroid !== 0) {
      stack.push(currentAsteroid);
    }
  }

  return stack;
};
