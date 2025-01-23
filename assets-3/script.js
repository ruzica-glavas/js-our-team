const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets-3/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets-3/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets-3/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets-3/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets-3/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets-3/img/female3.png"
  },  
  
];

const flex= document.querySelector(`.flex`)


function addAllMembers (){

  for(i=1; i<teamMembers.length; i++){
    let element= teamMembers[i]

    flex.innerHTML += `

            <div class="flex">
                <figure>
                    <img id="image" height="90px" src= ${element.img} alt="${element.name}">
                </figure>
                <div class="flex flex-column">
                    <h5 id="name">${element.name}</h5>
                    <span id="role">${element.role}</span>
                    <span id="email">${element.email}</span>
                </div>
            </div>
            
            `

  }
}

addAllMembers()

//Parte bonus

const btn = document.getElementById("btn")


btn.addEventListener(`click`, function(event){

  event.preventDefault()

  const name = document.getElementById(`name`).value
  const role = document.getElementById(`role`).value
  const email = document.getElementById(`email`).value
  const img = document.getElementById(`img`).value


  teamMembers.push({
    name,
    role,
    email,
    img

  })

  flex.innerHTML += `

            <div class="flex">
                <figure>
                    <img id="image" height="90px" src= ${img} alt="${name}">
                </figure>
                <div class="flex flex-column">
                    <h5 id="name">${name}</h5>
                    <span id="role">${role}</span>
                    <span id="email">${email}</span>
                </div>
            </div>
            
            `



})