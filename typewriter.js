const sentence = "animation logic network";

let time = 0;
const typewriter = function(sentence) {
  sentence += '\n';
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
};
typewriter(sentence);
