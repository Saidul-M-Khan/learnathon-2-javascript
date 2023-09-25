const myParagraph = document.querySelector("#my-paragraph");

// Change the existing text
const changeText = () => {
    const myParagraphText = myParagraph.innerText;
    if(myParagraphText==="I am Saidul."){
        myParagraph.innerText="I am a Software Engineer."
    } else{
        myParagraph.innerText=myParagraphText;
    }
};


// Create a new text
const addText = () => {
    const textContainer = document.getElementById('text-container');
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "I have studied in AIUB.";
    textContainer.appendChild(newParagraph);
}


// Remove the existing text
const removeText = () => {
    myParagraph.remove();
}


// Add style to the exiting text
const styleText = () => {
    myParagraph.style.backgroundColor = "red";
}


// Remove style from the exiting text
const removeStyle = () => {
    myParagraph.style.backgroundColor = "";
}


// Add a class to the exiting text
const addClass = () => {
    myParagraph.classList.add("my-paragraph-style");
}


// Remove a class from the exiting text
const removeClass = () => {
    myParagraph.classList.remove("my-paragraph-style");
}


// Add an attribute to the exiting text
const addAttribute = () => {
    myParagraph.setAttribute("style", "color: blue;");
}


// Remove an attribute from the exiting text
const removeAttribute = () => {
    myParagraph.removeAttribute("style");
}


// Add an event listener to the exiting text
const addEventListener = () => {
    myParagraph.addEventListener("click", () => {
        alert("You clicked me!");
    });
}


// Remove an event listener from the exiting text
const removeEventListener = () => {
    myParagraph.removeEventListener("click", () => {
        alert("You clicked me!");
    });
}


// Create a list of items based on an array of data
const createList = () => {
    const data = ["Item 1", "Item 2", "Item 3"];
    const list = document.getElementById("itemList");
    
    data.forEach(itemText => {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        list.appendChild(listItem);
    });
};


// Event Delegation
const list = document.getElementById("itemList");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        alert("Clicked on " + event.target.textContent);
    }
});


// Event Capturing and Bubbling
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const log = document.getElementById("log");

parent.addEventListener("click", () => {
    log.innerHTML += "<p>Parent Clicked - Bubbling Phase</p>";
});

child.addEventListener(
    "click",
    () => {
        log.innerHTML += "<p>Child Clicked - Capturing Phase</p>";
    },
    true
);

