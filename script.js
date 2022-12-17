//Special character remove in string

let pun = `!()-[]{};:'"\,<>./?@#$%^&*_~`;
let my_str = "Hello!!!, he said ---and went.";
let nstr = "";
for (let x of my_str) {
  if (pun.includes(x)) {
  } else {
    nstr += x;
  }
}
console.log(nstr);
