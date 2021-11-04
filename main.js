console.log('js ok');


// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:

// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// 1 - CREA L'ARRAY DI CARD DA INSERIRE NELL'HTML

// 2 - INDIVIDUARE IL PUNTO DOVE INSERIRE L'ARRAY GENERATO

// 3 - GENERARE LE CARD

// 4 - INSERIRE LE CARD NELLA HTML 


// 1 - 
const cards = [
    {
    nome : 'Pippo',
    ruolo : 'Giullare',
    foto : 'immagine'
    }
];

console.log(cards);
console.table(cards)


// 2 - 
const teamContainer = document.querySelector('.team-container');


// 3 - 
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    console.log(card);
}


