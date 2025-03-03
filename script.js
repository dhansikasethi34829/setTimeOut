const btn = document.querySelector("button");
// const arr=[1,7,10,24,87];

const arr = [
    { name: "Dhansika" },
    { name: "Khushi" },
    { name: "Priyanshi" },
    { name: "Simmi" }
]
btn.addEventListener("click", () => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        let randomValue = randomize(arr);
        output.push(randomValue);
        // output.push(arr[Math.floor(Math.random() * arr.length)].name);
    }
    function randomize(arr) {
        randomValue = arr[Math.floor(Math.random() * arr.length)].name;
        if (output.includes(randomValue)) {
            return randomize(arr);
        }
        return randomValue;
    }
    console.log(output);
    // console.log(arr[Math.floor(Math.random() *arr.length)].name);
})
// let start;
// let count = 0;
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const what = document.querySelector("#what");
//     const how = document.querySelector("#how");
//     const display = document.querySelector("#display");
//     const name = what.value;
//     const number = parseInt(how.value);

//     start = setInterval(() => {
//         if (count < number) {
//             const para = document.createElement("p");
//             para.innerHTML = name;
//             display.appendChild(para);
//             count++;
//         } else {
//             clearInterval(start);
//         }
//     }, 1000)
// });
