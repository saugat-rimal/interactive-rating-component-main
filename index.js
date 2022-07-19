const frontend = document.querySelector("#front-card");
const backend = document.querySelector("#back-card");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  frontend.classList.toggle("hidden");
  backend.classList.toggle("hidden");
});

const num = document.querySelectorAll(".num");
const rate = document.querySelector("#rate");

num.forEach((rates) => {
  rates.addEventListener("click", function () {
    // console.log(rates.innerHTML);
    rate.innerHTML = rates.innerHTML;
    rate.style.backgroundColor = "grey";
  });
});
