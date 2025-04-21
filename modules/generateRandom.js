//array of jokes
const jokes = [
    "Qual è il cane più cattivo? La can-aglia.",
    "\"Mi scusi, per andare al cimitero dove devo prendere l'autobus?\" \"In faccia.\"",
    "\"Mi rifiuto\". Disse il netturbino.",
    "Tra fantasmi: \"Tu ci credi agli umani?\"",
    "Che cosa fanno otto cani in mare? Il can-otto.",
    "Un uomo entra in un caffè. SPLASH.",
    "Questo aereo è uno schianto! È caduto.",
    "Una pecorella studia geografia. Non vuole fare la pecorella smarrita.",
    "Ma perché i gatti hanno i canini e i cani non hanno i gattini?",
    "La funga dice al fungo: \"Sei un porcino!\"",
    "Chiude una lavanderia. Faceva affari sporchi.",
    "Che cosa fa un gallo in chiesa? Il chicchirichetto.",
    "Qual è la città preferita dai ragni? Mosca.",
    "Qual è l'ape più difficile da digerire? La pe-peronata.",
    "Se io mi metto la camicia di lino, poi Lino che si mette?",
    "Qual è il formaggio servito nei vagoni ristorante? La mozzarella in carrozza.",
    "Ma se un passerotto entra dentro un computer diventa un MicroCIP?",
    "Ma se due vespe bevono una tazza di caffè diventano vispe?",
    "Mario ha smesso di fare il muratore perché aveva paura del cemento armato.",
    "Come si fa a capire se un motociclista è felice? Basta guardare se ha dei moscerini sui denti."
];
//array of motivational quotes
const quotes = [
    "\"Il successo non è mai definitivo, il fallimento non è mai fatale; è il coraggio di continuare che conta\"",
    "\"È meglio fallire nell'originalità che avere successo nell'imitazione\"",
    "\"La strada verso il successo e la strada verso il fallimento sono quasi esattamente la stessa\"",
    "\"Il successo di solito arriva a chi è troppo occupato per cercarlo\"",
    "\"Sviluppa il successo dai fallimenti. Lo scoraggiamento e i fallimenti sono due dei trampolini di lancio più sicuri per il successo\"",
    "\"Niente al mondo può sostituire la tenacia. Il talento non può farlo: non c'è niente di più comune di uomini pieni di talento ma privi di successo. Il genio non può farlo: il genio incompreso è quasi proverbiale. L'istruzione non può farlo: il mondo è pieno di derelitti istruiti. La tenacia e la determinazione invece sono onnipotenti\"",
    "\"Ci sono tre modi per raggiungere il successo finale: il primo è essere gentili. Il secondo modo è essere gentili. Il terzo modo è essere gentili\"",
    "\"Il successo è quello stato mentale di pace che si raggiunge solo attraverso la soddisfazione nel sapere di aver fatto il massimo sforzo per fare ciò di cui si è capaci\"",
    "\"Non ho mai sognato il successo, ho lavorato per ottenerlo\"",
    "\"Il successo è ottenere ciò che si vuole. La felicità è volere ciò che si ottiene\""
];

const displayed = {
    luckyNum: Math.floor(Math.random() * 101),
    randJoke: jokes[Math.floor(Math.random() * jokes.length)],
    randQuote: quotes[Math.floor(Math.random() * quotes.length)]
};

const {luckyNum, randJoke, randQuote} = displayed;

export {luckyNum, randJoke, randQuote};