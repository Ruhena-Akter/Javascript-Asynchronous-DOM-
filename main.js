//Question 1: Select elements
//getElementById()
const title = document.getElementById("title");
//querySelector()
const firstparagraph = document.querySelector(".text");
//querySelectorAll()
const secondparagraph = document.querySelectorAll(".text");

console.log(title);
console.log(firstparagraph);
console.log(secondparagraph);

//Question 2
document.getElementById("change-btn").addEventListener("click",() => {
    //change text content
    title.textContent = "DOM Updated Successfully.";

    //change Html content
    firstparagraph.innerHTML = "<strong>Content Using Javascript!</strong>";

    //chnage CSS Style
    title.style.color = "blue";
    title.style.fontSize ="40px";

    secondparagraph.forEach((paragraph) => {
        paragraph.style.color ="purple";
    });
});

//Question 3: create and append new element dynamically

document.getElementById("add-btn").addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "New paragraph Added Dynamically!";
    newElement.classList.add("new-item");
    document.getElementById("container").appendChild(newElement);

});

//Question 4: Remove element from DOM

document.getElementById("remove-item").addEventListener("click", () => {
    title.remove();
});

//Question 5 : Event Listeners 
document.getElementById("change-btn").addEventListener("click", () => {
    console.log("Clicked");
    
});

//Input event

document.getElementById("nameInput").addEventListener("input",(event) =>{
    document.getElementById("output").textContent = "Name: " + event.target.value;
});

//submit event

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("message").textContent = "Form Submitted Successfully.";
    alert("Form Submitted Successfully.");

});

