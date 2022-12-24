// ? 1 where  to add

const ul = document.getElementById("chad");
// ! 2  where to be added
const li = document.createElement("li");
li.innerText = "kochuBan";

//? 3. addd the child

// ul.appendChild(li);

// section
const mainCainer = document.getElementById("main");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);

const ull = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriani";
ull.appendChild(li1);

const li2 = document.createElement("li");
li1.innerText = "Borhani";
ull.appendChild(li2);

const li3 = document.createElement("li");
li1.innerText = "salad";
ull.appendChild(li3);

// ! aita akhono main a add kora hoy nai tai show kortase na
section.appendChild(ul);
mainCainer.appendChild(section);

// ? set inner html direcly

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `

<h1>My dress section </h1>
 <ul>
 <li>T-shirt</li>
 <li>Polo</li>
 <li>Shooe</li>
 <li>Lungi</li>
 </ul>
 
`;
mainCainer.appendChild(sectionDress);
