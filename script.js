let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


const bars = document.querySelectorAll(".bar");
const tooltiptexts = document.querySelectorAll(".tooltiptext");
console.log(data[1].amount);


function heightOfBar() {
	for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = `calc(${data[i].amount}px * 2)`;
        console.log(bars[i]);
        tooltiptexts[i].innerHTML = `$${data[i].amount}`
        tooltiptexts[i].style.bottom = `calc(${data[i].amount}px * 2 + 5px)`;
    }
}

heightOfBar()
