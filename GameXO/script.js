const tds = document.querySelectorAll("td");
const resetEl = document.getElementById("reset");
let turnX = true;
let statusEl = document.createTextNode("");
document.getElementById("status").append(statusEl);
const submitEl = document.getElementById("submit");
const node1 = document.getElementById("1");
const node2 = document.getElementById("2");
const node3 = document.getElementById("3");
const node4 = document.getElementById("4");
const node5 = document.getElementById("5");
const node6 = document.getElementById("6");
const node7 = document.getElementById("7");
const node8 = document.getElementById("8");
const node9 = document.getElementById("9");
const status = document.getElementById("status");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
let count = 0;
const formEl = document.getElementById("form");
formEl.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    submitEl.hidden = true;
    let player1 = name1.value;
    let player2 = name2.value;
    let turnNode = document.createTextNode(player1);
    document.getElementById("turnNode").append(turnNode);
    tds.forEach(function (td) {
      td.addEventListener(
        "click",
        function (e) {
          count++;
          this.textContent = turnX == true ? "X" : "O";
          if (
            (node1.textContent !== "" &&
              node1.textContent === node2.textContent &&
              node2.textContent === node3.textContent) ||
            (node1.textContent !== "" &&
              node1.textContent === node4.textContent &&
              node4.textContent === node7.textContent) ||
            (node1.textContent !== "" &&
              node1.textContent === node5.textContent &&
              node5.textContent === node9.textContent) ||
            (node4.textContent !== "" &&
              node4.textContent === node5.textContent &&
              node5.textContent === node6.textContent) ||
            (node7.textContent !== "" &&
              node7.textContent === node8.textContent &&
              node8.textContent === node9.textContent) ||
            (node2.textContent !== "" &&
              node2.textContent === node5.textContent &&
              node5.textContent === node8.textContent) ||
            (node3.textContent !== "" &&
              node3.textContent === node6.textContent &&
              node6.textContent === node9.textContent) ||
            (node3.textContent !== "" &&
              node3.textContent === node5.textContent &&
              node3.textContent === node7.textContent)
          ) {
              if (this.textContent === "X") {
              statusEl.textContent = `Winner : ${player1} `;
              alert("Game over");
            } else {
              statusEl.textContent = `Winner : ${player2} `;
              alert("Game over");
            }
            resetEl.hidden = false;
          } else {
            turnX = !turnX; 
            turnNode.textContent = turnX == true ? player1 : player2;
            if (count === 9) {
              statusEl.textContent = "DRAW";
              resetEl.hidden = false;
            }
          }
        },
        {
          once: true,
        }
      );
    });
  },
  {
    once: true,
  }
);
