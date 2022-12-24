// const ul = document.getElementById("01");
// const li = document.createElement("li");
// li.innerText = "vhai vlo lagtase na ";
// ul.appendChild(li);

const menu = document.getElementById("main");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Khagrachhari";
section.appendChild(h1);

// ul added
const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "sajik";
ul.appendChild(li);
const li1 = document.createElement("li");
li1.innerText = "Mayabini Lak";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Richang Jhorna";
ul.appendChild(li2);

section.appendChild(ul);
main.appendChild(section);

// set by directly
const sectionNew = document.createElement("section");
sectionNew.innerHTML = `
<h1>Vhai i relly love this girlllllllllll</h1>
<ul>
<spam>Kono karon nai kno ore vlobasi </spam>
<li> dream</li>   
<li>success</li>
<li>i havr to do this </li>
<li>insallah</li>
</ul>



`;
main.appendChild(sectionNew);
