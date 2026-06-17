const likeBtn = document.getElementById("likeBtn")
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likeCount");

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");
const keyInput = document.getElementById("keyInput");
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

const keyLog = document.getElementById("keyLog");

const taskList = document.getElementById("taskList");
const contactForm = document.getElementById("contactForm");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");

const formStatus = document.getElementById("formStatus");

let count =0
likeBtn.addEventListener("click", () => {
 
    likeCount.textContent = `likes: ${count++}`
})


resetBtn.addEventListener("click", () => {
count = 0;
  likeCount.textContent = `likes ${count}`;
});


greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (nameInput === "")
  {
    
    console.log("please enter your name ");
    return 
    
  }

  greetMsg.textContent = `Hello , ${name}`;
 nameInput.value = "";

});

liveInput.addEventListener("input", () => {
  const text = liveInput.value

  if (text === "") {
    liveOutput.textContent="waiting..."
  }
  else {
    liveOutput.textContent=text
  }
  if (text.length > 20) {
    liveOutput.classList.add("long");
  } else {
    liveOutput.classList.remove("long");
  }

})


keyInput.addEventListener("keydown", (e) => {
console.log(e);

  if (e.key === "Escape") {
    keyInput.value = ""
    keyLog.textContent = ""
    return
  }
  const modifiers = [];

  if (event.ctrlKey) modifiers.push("Ctrl");
  if (event.shiftKey) modifiers.push("Shift");
  if (event.altKey) modifiers.push("Alt");

  const display =
    modifiers.length > 0
      ? `${modifiers.join(" + ")} + ${event.key}`
      : event.key;

  keyLog.textContent = display;
  
  
  
});


taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
taskList.addEventListener("dblclick", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});


contactForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  if (subjectInput.value === "" || emailInput.value === "") {
    formStatus.textContent = "Please fill in all fields."
   formStatus.style.color="red"
    return
 }

  
  formStatus.textContent = `Message sent to ${emailInput.value}!`;
  formStatus.style.color = "green";

  e.target.emailInput.value = "";
  e.target.subjectInput.value = "";

})