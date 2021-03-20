const d = document,
  participants = [
    "JavaScript",
    "PHP",
    "JAVA",
    "C",
    "Python",
    "Ruby",
    "Go",
    "Visual Basic",
    "Rust",
    "Perl",
  ];
export default function digitalDraw(id) {
  const $box = d.getElementById(id),
    ul = d.createElement("ul"),
    button = d.createElement("button");
  participants.forEach((participant) => {
    const li = d.createElement("li");
    li.innerText = participant;
    ul.appendChild(li);
  });
  $box.appendChild(ul);
  button.innerText = "Get winner";
  $box.appendChild(button);
  button.addEventListener("click", () => {
    const winner = Math.ceil(Math.random() * participants.length) - 1;
    //console.info(participants[winner]);
    alert(`the winner is: ${participants[winner]}`);
  });
}
