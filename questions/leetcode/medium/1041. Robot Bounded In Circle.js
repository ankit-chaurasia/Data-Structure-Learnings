// https://leetcode.com/problems/robot-bounded-in-circle/
// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

// Constraints:

// 1 <= instructions.length <= 100
// instructions[i] is 'G', 'L' or, 'R'.

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  //  Start form North, East, South and West
  const coordinates = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];
  const position = [0, 0];
  let currDir = 0;
  for(let i of instructions) {
      if(i === "G") {
          position[0] += coordinates[currDir][0];
          position[1] += coordinates[currDir][1];
      }
      if(i === "L") currDir--;
      if(i === "R") currDir++;
      // Circle will be complete if instruction executed at max 4 times
      // Fix the lower bound
      if(currDir < 0) {
        currDir = 4 + currDir;
      }
      // Fix the upper bound
      currDir = currDir % 4;
  }
  if(currDir) return true;
  if(!position[0] && !position[1]) return true;
  return false;
};

// var isRobotBounded = function(instructions) {
//   const position = [0, 0];
//   const direction = [0, 1];
//   for(let ins of instructions) {
//       if(ins === "G") {
//           position[0] +=  direction[0];
//           position[1] += direction[1];
//       } else if(ins === "L") {
//           [direction[0], direction[1]] = [-direction[1], direction[0]];
//       } else if(ins === "R") {
//           [direction[0], direction[1]] = [direction[1], -direction[0]];
//       }
//   }
//   console.log("position", position);
//   console.log("direction", direction);
  
//   return ( (position[0] == 0 && position[1] == 0) || (direction[0] !== 0 && direction[1] !== 1) );
// };