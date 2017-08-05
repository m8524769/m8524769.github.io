function changeDescriptionByClick() {
    var descriptions = [
        "How are you today?",
        ".........",
        "(･ω´･ )",
        "emmmmmmmmmmmmmm",
        "(´⊙ω⊙`)"
    ];
    var i = 0;
    var description = document.getElementById("description");
    description.addEventListener("click", function () {
        if (i == descriptions.length) i = 0;
        description.innerHTML = descriptions[i++];
    });
}