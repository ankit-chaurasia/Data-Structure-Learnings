// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a
// number of people queued up, and each person wears a sticker indicating their initial position
// in the queue. Initial positions increment by 1 from 1 at the front of the line to n at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions.
// If two people swap positions, they still wear the same sticker denoting their original places
// in line. One person can bribe at most two others. For example, if n=8 and Person 5 bribes Person 4,
// the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that
// took place to get the queue into its current state!

// Function Description

// Complete the function minimumBribes in the editor below. It must print an integer representing
// the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

// minimumBribes has the following parameter(s):

// q: an array of integers

function swap(arr, index, target) {
  let temp = arr[index];
  arr[index] = arr[target];
  arr[target] = temp;
}
// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribes = 0,
    chaotic = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }
    if (q[i] != i + 1) {
      if (q[i - 1] == i + 1) {
        bribes++;
        swap(q, i, i - 1);
      } else if (q[i - 2] === i + 1) {
        bribes = bribes + 2;
        swap(q, i - 2, i - 1);
        swap(q, i - 1, i);
      }
    }
  }
  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(bribes);
  }
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4])
