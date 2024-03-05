// Select the cursor element
const cursor = document.querySelector(".cursor");
var timeout;

// Follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStooped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStooped, 1000);
});

// Hide cursor on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
