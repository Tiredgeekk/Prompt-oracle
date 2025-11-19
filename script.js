// ====== PROMPTS ======

const prompts = [
    "Give a superhero a food-related superpower.",
    "Invent a magical holiday.",
    "Describe a ghost who's terrible at haunting.",
    "Create a creature by mixing two animals.",
    "Write about a wizard with a cursed snack.",
    "Design a sandwich that grants a magical ability.",
    "A dragon with an embarrassing secret.",
    "A knight afraid of something ridiculous.",
    "A magical shop that only appears once a year.",
    "A potion that smells nostalgic.",
    "A spell powered by an unusual emotion.",
    "A magical item with a questionable downside.",
    "A familiar with a dramatic personality.",
    "A fairy addicted to human snack foods.",
    "A hero who keeps losing their sidekick.",
    "A map that updates itself.",
    "A monster who wants a career change.",
    "A witch who mispronounced a spell.",
    "A talking sword that loves gossip.",
    "A magical bakery selling cursed pastries.",
    "A mysterious door that wasn't there yesterday."
    // Add more here as needed ♥
];


// ====== FUNCTION ======

function newPrompt() {
    const box = document.getElementById("promptBox");

    // restart animation
    box.classList.remove("rolling");
    void box.offsetWidth;
    box.classList.add("rolling");

    // pick random prompt
    const random = Math.floor(Math.random() * prompts.length);
    box.textContent = prompts[random];
}
