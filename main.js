console.log('js ok');


// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:

// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// 1 - CREA L'ARRAY DI CARD DA INSERIRE NELL'HTML

// 2 - INDIVIDUARE IL PUNTO DOVE INSERIRE L'ARRAY GENERATO

// 3 - GENERARE LE CARD

// 4 - INSERIRE LE CARD NELLA HTML 

// 5 - CREO LA FUNZIONE PER GENERARE I NUOVI POST

// 6 - PRENDERE GLI ELEMENTI DA LABEL



// 1 - 
const cards = [
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/wayne-barnett-founder-ceo.jpg',
        },
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/angela-caroll-chief-editor.jpg',
        },
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/walter-gordon-office-manager.jpg',
        },
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/angela-lopez-social-media-manager.jpg',
        },
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/scott-estrada-developer.jpg',
        },
    {
        nome : 'Pippo',
        ruolo : 'Giullare',
        foto : 'img/barbara-ramos-graphic-designer.jpg',
        },
];


// 2 - 
const teamContainer = document.querySelector('.team-container');






// 3 - 4 - 

generatoreNuovaCard(cards, teamContainer);

// for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     console.log(card);

//     teamContainer.innerHTML += `
//     <div class="team-card">

//         <div class="card-image">
//             <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>
//         </div>

//         <div class="card-text">
//             <h3>${card.nome}</h3>
//             <p>${card.ruolo}</p>
//         </div>

//     </div>`
// }


const btn = document.getElementById('addMemberButton')

btn.addEventListener('click', function () {


    const nomeUtente = document.getElementById('name').value;
    const ruoloUtente = document.getElementById('role').value;
    const imgUtente = document.getElementById('image').value;
    
    const nuovoUtente = {};

    nuovoUtente.nome = nomeUtente;
    nuovoUtente.ruolo = ruoloUtente;
    nuovoUtente.foto = imgUtente;

    console.log(nuovoUtente);

    cards.push(nuovoUtente);
    console.log(cards);

    teamContainer.innerHTML += `
    <div class="team-card">

        <div class="card-image">
            <img src="${imgUtente}"/>
        </div>

        <div class="card-text">
            <h3>${nomeUtente}</h3>
            <p>${ruoloUtente}</p>
        </div>

    </div>`


})




// 5 -  
function generatoreNuovaCard(cards, teamContainer) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        // console.log(card);
    
        teamContainer.innerHTML += `
            <div class="team-card">
        
                <div class="card-image">
                    <img src="${card.foto}" alt="Wayne Barnett"/>
                </div>
        
                <div class="card-text">
                    <h3>${card.nome}</h3>
                    <p>${card.ruolo}</p>
                </div>
        
            </div>`
    }
    
}


