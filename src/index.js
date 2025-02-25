// dom.js
const dom =  {
    count : document.querySelector(".count"),
    increment : document.getElementById("increment"),
    reset : document.getElementById("reset"),
    decrement : document.getElementById("decrement")
}

//data
const data = {
    count: 0
}

// Increment function
const handelIncrement = () => {
    data.count += 1
    dom.count.innerText = data.count
    localStorage.setItem(data.count, dom.count)
}

// Decrement function
const handelDecrement = () => { 
    data.count -= 1
    dom.count.innerText = data.count
}

// Reset function
const handelReset = () => { 
    data.count = 0
    dom.count.innerText = data.count
    
}

// Event Listeners
dom.increment.addEventListener("click", handelIncrement)
dom.reset.addEventListener("click", handelReset)
dom.decrement.addEventListener("click", handelDecrement)