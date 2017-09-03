window.onload = function changeDescriptionByClick() {
    var descriptions = [
        "How are you today?",
        "My name is Wang Lei.",
        "And yk is the nickname.",
        "Here is my GitHub Page,",
        "which is only a demo.",
        "I wish you like it.",
        "Anyway..",
        "Have a good time, bro!",
    ];
    var i = 0;
    var description = document.getElementById("description");
    description.addEventListener("click", function () {
        if (i == descriptions.length) i = 0;
        description.innerHTML = descriptions[i++];
    });
}