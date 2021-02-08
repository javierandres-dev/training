const d = document;

d.addEventListener("DOMContentLoaded", ()=>{
  show("Welcome");
  setName();
  })

const setName = () => {
  const $form = d.querySelector("form"),
   $str = d.getElementById("str"),
   $num = d.getElementById('num'),
  $list = d.getElementById("list");
  $form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const str: String = (<HTMLInputElement>$str).value;
    const num: number = parseInt((<HTMLInputElement>$num).value);
    if (str.length === 0 || isNaN(num) ){
      console.log("stop");
      return;
    }
    $list.textContent = `${str}, ${num}`;
  })
}

const  show = (aString: string) => {
  d.getElementById('test').innerHTML = `${aString}`
}
