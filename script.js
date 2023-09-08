const fortunes = [
    "You will have a great day!",
    "Good things will come your way.",
    "Success is on the horizon.",
    "Happiness is in your future.",
    "You will meet someone special soon."
];

function generateFortune() {
    const name = document.getElementById("name").value;
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    const fortuneResult = document.getElementById("fortuneResult");
    fortuneResult.innerHTML = `${name}, ${fortune}`;
}

const fortuneForm = document.getElementById("fortuneForm");
fortuneForm.addEventListener("submit", function (e) {
    e.preventDefault();
    generateFortune();
});
