//stampo in console l'elenco dei membri del team

const elencoTeamMember = [
    {
        nome: "Wayne Barnett",
        lavoro: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
        altpic: "Wayne Barnett",
    }, 
    {
        nome: "Angela Caroll",
        lavoro: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg",
        altpic: "Angela Caroll",
    },
    {
        nome: "Walter Gordon",
        lavoro: "Office Manager",
        picture: "walter-gordon-office-manager.jpg",
        altpic: "Walter Gordon",
    },
    {
        nome: "Angela Lopez",
        lavoro: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg",
        altpic: "Angela Lopez",
    },
    {
        nome: "Scott Estrada",
        lavoro: "Developer",
        picture: "scott-estrada-developer.jpg",
        altpic: "Scott Estrada",
    },
    {
        nome: "Barbara Ramos",
        lavoro: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg",
        altpic: "Barbara Ramos",
    },
];

//console.table(elencoTeamMember); 



//stampo i dati all interno di un contenitore nella pagina html per ogni membro del team 

let membri = document.querySelector('#membri');

for (let i = 0; i < elencoTeamMember.length; i++) {
    membri.innerHTML += `<div class="team-card">
                        <div class="card-image">
                            <img
                                src="img/${elencoTeamMember[i].picture}"
                                alt="${elencoTeamMember[i].altpic}"
                            />
                        </div>
                        <div class="card-text">
                            <h3>${elencoTeamMember[i].nome}</h3>
                            <p>${elencoTeamMember[i].lavoro}</p>
                        </div>
                    </div>`
}




