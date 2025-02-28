const btn = document.querySelector("button");

let start;
let count = 0;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const what = document.querySelector("#what");
    const how = document.querySelector("#how");
    const display = document.querySelector("#display");
    const name = what.value;
    const number = parseInt(how.value);

    start = setInterval(() => {
        if (count < number) {
            const para = document.createElement("p"); 
            para.innerHTML = name;
            display.appendChild(para);
            count++;
        } else {
            clearInterval(start);
        }
    }, 1000)
});
