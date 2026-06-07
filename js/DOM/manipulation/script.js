const app = document.getElementById("app")

const mainTitle = document.getElementById("mainTitle");

const description = document.querySelector(".description")

const features = document.getElementById("features")

const feature = document.querySelectorAll(".feature")

const search = document.getElementById("search")

const btn = document.getElementById("btn")


const available = document.createElement("h2")

const link = document.getElementById("mainLink");

mainTitle.textContent = "Welcome to the Dashboard";

description.textContent = "descrip your dashbord"

mainTitle.classList.add("highlight")
description.classList.remove("hidden")


feature.forEach(item => {
  
  if (item.textContent.trim() === "REMOVE ME") {
  item.remove()
}
})


//5____________________

available.innerHTML = "Available Features"

features.before(available)


//ex6__________________

link.herf = "https://example.com";
link.textContent="Go to Dashboard"