
/**
 * typewriter Uses stdout to write a string to console with 50 ms setTimeout per char.
 * @param {array} sentence A string or array to write to console.
 * @returns {string} Each char or element appears 50 ms apart in console.
 */
const typewriter = function(sentence) {
  let time = 0;
  sentence += '\n';
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
};

module.exports = typewriter;
