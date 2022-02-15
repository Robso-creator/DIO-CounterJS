var currentNumberWrapper = document.getElementById("currentNumber")
var count = 0
const INCREMENT = document.getElementById("increment")
const DECREMENT = document.getElementById("decrement")


INCREMENT.addEventListener("click",
    function increment() {
        count++;
        currentNumberWrapper.innerHTML = count;

        if (count >= 0){
            currentNumberWrapper.classList.remove("negative")
        }
    }
)

DECREMENT.addEventListener("click",
    function decrement() {
        count--;
        currentNumberWrapper.innerHTML = count

        if (count < 0){
            currentNumberWrapper.classList.add("negative")
        }
    }
)


