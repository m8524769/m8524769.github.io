window.onload = function initiation() {
    changeDescriptionByClick();
    randomMusic();
}

function changeDescriptionByClick() {
    var descriptions = [
        "How are you today?",
        "My name is Wang Lei.",
        "And yk is the nickname.",
        "Here is my GitHub Page,",
        "which is only a demo.",
        "I wish you like it.",
        "Anyway..",
        "Have a good time, bro!",
        "All the best."
    ];
    var i = 0;
    var description = document.getElementById("description");
    description.addEventListener("click", function () {
        if (i == descriptions.length) i = 0;
        description.innerHTML = descriptions[i++];
    });
}

function randomMusic() {
    var songID = [
        "418602088", // Nevada
        "420069116", // Anywhere I Go
        "493551046", // Collide
        "485347980", // I Hear You
        "404783169", // Bright Side
        "427542254", // Kaleidoscope
        "419594258", // Hymn For The Weekend [Remix]
        "407677659", // Faded (Conor Maynard Cover)
        "428350510", // Shanghai
        "409031839", // I Took A Pill In Ibiza
        "29761105",  // Downtown
        "30064291",  // Green Sky
    ];
    var srcPrefix = "//music.163.com/outchain/player?type=2&auto=1&height=66&id=";
    var randomNum = Math.floor(Math.random() * songID.length);
    document.getElementById("neteaseMusic").src = srcPrefix.concat(songID[randomNum]);
}