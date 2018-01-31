window.onload = () => {
    changeInnerByClick();
    randomMusic();
}

const expandPost = () => {
    let post = document.getElementById("post");
    post.addEventListener("click", () => {
    });
}

const changeInnerByClick = () => {
    let inners = [
        "How are you today?",
        // "My name is Wang Lei.",
        // "And yk is the nickname.",
        "Here is my GitHub Page,",
        "which is only a demo.",
        "I wish you like it.",
        "Anyway..",
        "Have a good time!",
        "All the best."
    ];
    let i = 0;
    let inner = document.getElementById("inner");
    inner.addEventListener("click", () => {
        if (i < inners.length)
            inner.innerHTML = inners[i++];
    });
}

const randomMusic = () => {
    let songID = [
        "418602088", // Nevada
        "420069116", // Anywhere I Go
        "493551046", // Collide
        "512359300", // New Rules
        "404783169", // Bright Side
        "427542254", // Kaleidoscope
        "435592093", // Starboy
        "417833052", // I Want It All
        "419594258", // Hymn For The Weekend [Remix]
        "428350510", // Shanghai
        "409031839", // I Took A Pill In Ibiza
        "29761105",  // Downtown
        "30064291",  // Green Sky
    ];
    let srcPrefix = "//music.163.com/outchain/player?type=2&auto=0&height=66&id=";
    let randomNum = Math.floor(Math.random() * songID.length);
    document.getElementById("neteaseMusic").src = srcPrefix.concat(songID[randomNum]);
}