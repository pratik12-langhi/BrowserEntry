function show() {
    const drag = document.getElementById("drag");
    drag.classList.remove("hidden");
    drag.classList.add("flex");
    setTimeout(() => {
    }, 900);
}

function hide() {
    const drag = document.getElementById("drag");
    drag.classList.remove("flex");
    drag.classList.add("hidden");
    setTimeout(() => {
    }, 900);
}

function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString(navigator.language, options);
    console.log(formattedTime)

    timeElement.textContent = formattedTime;

    setInterval(updateTime, 55000);
}

window.onload = updateTime;