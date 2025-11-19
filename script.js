// cute spin symbols
const symbols = ["🔮", "🌙", "✨", "📜", "🪽", "🎴", "⭐", "🌀"];

// your club prompts — add as MANY as you want
const prompts = [
    "Give a superhero a food-based superpower.",
    "Invent a holiday that only goblins celebrate.",
    "Write a prophecy that rhymes… badly.",
    "Describe a wizard who hates magic.",
    "Create a monster that’s scared of small children.",
    "Invent a magical school rule that makes no sense.",
    "Give a dragon a very dumb weakness."
    // add like 100 more here lol
];

const slot = document.getElementById("slot");
const btn = document.getElementById("spin-btn");

btn.addEventListener("click", () => {
    let spins = 20; // how many fast spins
    let count = 0;

    const spinInterval = setInterval(() => {
        slot.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        count++;

        if (count >= spins) {
            clearInterval(spinInterval);

            // final reveal moment
            const finalPrompt = prompts[Math.floor(Math.random() * prompts.length)];
            slot.textContent = finalPrompt;
        }
    }, 60); // speed of animation
});
