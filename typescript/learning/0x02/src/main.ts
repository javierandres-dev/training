const d = document;
const $root = d.getElementById("root"),
  $p = d.createElement("p"),
  $xyz = d.createElement("xyz");

$p.textContent = "Hello, World!";
$xyz.textContent = "XYZ";

$root?.appendChild($p);
$root?.appendChild($xyz);
