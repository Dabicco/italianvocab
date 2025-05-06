// Conversations data
const conversationsData = {
    restaurant: {
        title: "Restaurant Conversation",
        subtitle: "Waiter & 2 Customers",
        description: "Learn how to order food, discuss menu options, and pay the bill at an Italian restaurant. Practice essential dining vocabulary and phrases.",
        sections: [
            {
                title: "Greetings",
                dialogues: [
                    { 
                        speaker: "Cameriere", 
                        text: "Buongiorno Signore/ Signori",
                        translation: "Good morning Sir/Gentlemen" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Vogliamo una tavola per due.",
                        translation: "We would like a table for two." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Sì, signori abbiamo un tavolo molto bello.",
                        translation: "Yes, gentlemen, we have a very nice table." 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Va bene. Grazie / Si, mi piace!",
                        translation: "Okay. Thank you / Yes, I like it!" 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Ecco il menu. I piatti del giorno sono: Antipasto ___________ Primo ______________ Secondo _____________ ( main dish plus veggies) Che cosa vuole da bere?",
                        translation: "Here is the menu. The dishes of the day are: Appetizer ___________ First course ______________ Second course _____________ (main dish plus veggies) What would you like to drink?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Vorrei _______________ e (antipasto)____________________",
                        translation: "I would like _______________ and (appetizer)____________________" 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Va bene signore. (brings food) Ecco il cibo.",
                        translation: "Very well, sir. (brings food) Here is the food." 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Grazie.",
                        translation: "Thank you." 
                    }
                ]
            },
            {
                title: "Conversation between the 3 Clients!",
                dialogues: [
                    { 
                        speaker: "Cameriere", 
                        text: "Che vuole da primo?",
                        translation: "What would you like for the first course?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Vorrei _________________ e per secondo mi porta ______________ .",
                        translation: "I would like _________________ and for the second course bring me ______________ ." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Va bene. E di contorno?",
                        translation: "Very well. And for the side dish?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "____________________ per favore.",
                        translation: "____________________ please." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Li piace?",
                        translation: "Do you like it?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "___________________________",
                        translation: "___________________________" 
                    }
                ]
            },
            {
                title: "Conversation between the 3 Clients!",
                dialogues: [
                    { 
                        speaker: "Cameriere", 
                        text: "Vuole formaggio?",
                        translation: "Would you like cheese?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Si, vorrei _______________.",
                        translation: "Yes, I would like _______________." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Ecco signore. Vogliono un dolce o caffè?",
                        translation: "Here you are, sir. Would you like a dessert or coffee?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Si, vorrei ___________ e _______________.",
                        translation: "Yes, I would like ___________ and _______________." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Tutto bene?",
                        translation: "Everything good?" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "_________________.",
                        translation: "_________________." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Grazie,",
                        translation: "Thank you," 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Il conto per piacere.",
                        translation: "The bill please." 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Pago io!!!",
                        translation: "I'll pay!!!" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "No, No!!! Pago io!!!",
                        translation: "No, No!!! I'll pay!!!" 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Fa _______#_______ Euro.",
                        translation: "It's _______#_______ Euros." 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Come possiamo pagare?",
                        translation: "How can we pay?" 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Accettiamo assegni, carte di credito e contanti.",
                        translation: "We accept checks, credit cards and cash." 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Ecco ___________________.",
                        translation: "Here is ___________________." 
                    },
                    { 
                        speaker: "Cameriere", 
                        text: "Grazie! Arrivederci",
                        translation: "Thank you! Goodbye" 
                    },
                    { 
                        speaker: "Cliente", 
                        text: "Grazie! Arrivederla!",
                        translation: "Thank you! Goodbye!" 
                    }
                ]
            }
        ]
    },
    store: {
        title: "Store Conversation",
        subtitle: "A= Commesso/a- Salesperson, B= Cliente- Client",
        description: "Practice shopping vocabulary and phrases in an Italian store. Learn how to ask about sizes, colors, try on clothes, and negotiate prices.",
        sections: [
            {
                title: "",
                dialogues: [
                    { 
                        speaker: "A", 
                        text: "Buon Giorno",
                        translation: "Good Morning" 
                    },
                    { 
                        speaker: "B", 
                        text: "Buon Giorno",
                        translation: "Good Morning" 
                    },
                    { 
                        speaker: "A", 
                        text: "Come posso aiutarla?",
                        translation: "How can I help you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei ___.",
                        translation: "I would like ___." 
                    },
                    { 
                        speaker: "A", 
                        text: "Che taglia/misura porta?",
                        translation: "What size do you wear?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Porto _____.",
                        translation: "I wear _____." 
                    },
                    { 
                        speaker: "A", 
                        text: "Che colore desidera?",
                        translation: "What color would you like?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei _____.",
                        translation: "I would like _____." 
                    },
                    { 
                        speaker: "A", 
                        text: "Ecco ____________. Le piace?",
                        translation: "Here is ____________. Do you like it?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Si, mi piace! È perfetto! / No, non mi piace./ È troppo grande./ È troppo piccolo/",
                        translation: "Yes, I like it! It's perfect! / No, I don't like it./ It's too big./ It's too small/" 
                    },
                    { 
                        speaker: "B", 
                        text: "Posso provare ________?",
                        translation: "Can I try on ________?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sì prego! Vada in cabina.",
                        translation: "Yes, please! Go to the fitting room." 
                    },
                    { 
                        speaker: "B", 
                        text: "Che bello! Mi sta proprio bene! / Non mi piace! Non mi va. È fuori moda!!!",
                        translation: "How nice! It fits me very well! / I don't like it! I don't want it. It's out of fashion!!!" 
                    },
                    { 
                        speaker: "B", 
                        text: "Quanto costa?",
                        translation: "How much does it cost?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Costa _____ Euro.",
                        translation: "It costs _____ Euros." 
                    },
                    { 
                        speaker: "B", 
                        text: "Ma, è troppo caro!!! Mi fa uno sconto?",
                        translation: "But it's too expensive!!! Can you give me a discount?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Si uno sconticino si può fare. Facciamo ______ Euro. / No mi dispiace ma il prezzo è fisso!",
                        translation: "Yes, I can give you a small discount. Let's make it ______ Euros. / No, I'm sorry but the price is fixed!" 
                    },
                    { 
                        speaker: "B", 
                        text: "Va bene. Come posso pagare?",
                        translation: "Okay. How can I pay?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Prendiamo assegni, carte di credito o contanti.",
                        translation: "We accept checks, credit cards or cash." 
                    },
                    { 
                        speaker: "B", 
                        text: "Va bene, io ho _____.",
                        translation: "Okay, I have _____." 
                    },
                    { 
                        speaker: "A", 
                        text: "Grazie. Arrivederci!",
                        translation: "Thank you. Goodbye!" 
                    },
                    { 
                        speaker: "B", 
                        text: "Grazie a Lei. Arrivederla.",
                        translation: "Thank you. Goodbye." 
                    }
                ]
            }
        ]
    },
    hotel: {
        title: "Conversazione in Albergo",
        subtitle: "",
        description: "Learn how to book a hotel room, ask about amenities, and check in at an Italian hotel. Essential vocabulary for travelers.",
        sections: [
            {
                title: "",
                dialogues: [
                    { 
                        speaker: "A", 
                        text: "Buongiorno, Come posso aiutarla?",
                        translation: "Good morning, how can I help you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Voglio prenotare una camera.",
                        translation: "I want to book a room." 
                    },
                    { 
                        speaker: "A", 
                        text: "Quando vuola la camera?",
                        translation: "When do you want the room?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Voglio una camera per venerdì il 12 marzo.",
                        translation: "I want a room for Friday, March 12th." 
                    },
                    { 
                        speaker: "A", 
                        text: "Per quanti giorni vuole la camera?",
                        translation: "For how many days do you want the room?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Devo partire domenica il 14 marzo.",
                        translation: "I have to leave on Sunday, March 14th." 
                    },
                    { 
                        speaker: "A", 
                        text: "Che tipo di camera vuole? Singola, doppia o matrimoniale/",
                        translation: "What type of room do you want? Single, double or matrimonial?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei _____________________________. Quanto costa per notte?",
                        translation: "I would like _____________________________. How much is it per night?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Vuole la camera con prima colazione inclusa?",
                        translation: "Do you want the room with breakfast included?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sì, vorrei prima colazione. L'albergo ha anche una piscina e ristorante?",
                        translation: "Yes, I would like breakfast. Does the hotel also have a pool and restaurant?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sì abbiamo una piscina, palestra, sauna e ristorante. Una camera con prima colazione costa duecentodieci Euro per notte.",
                        translation: "Yes, we have a pool, gym, sauna and restaurant. A room with breakfast costs two hundred and ten Euros per night." 
                    },
                    { 
                        speaker: "B", 
                        text: "Va bene, voglio fare una prenotazione. Che cosa posso fare vicino all'albergo?",
                        translation: "Okay, I want to make a reservation. What can I do near the hotel?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Ci sono molti ristoranti, teatri e monumenti vicino all'albergo. Lei può anche prendere il metro o l'autobus per andare in centro a la citta. L'albergo è molto centrale.",
                        translation: "There are many restaurants, theaters and monuments near the hotel. You can also take the subway or bus to go downtown. The hotel is very central." 
                    },
                    { 
                        speaker: "B", 
                        text: "Perfetto!!!",
                        translation: "Perfect!!!" 
                    },
                    { 
                        speaker: "A", 
                        text: "Accettiamo carte di credito per la prenotazione.",
                        translation: "We accept credit cards for the reservation." 
                    },
                    { 
                        speaker: "B", 
                        text: "Ecco _________________.",
                        translation: "Here is _________________." 
                    },
                    { 
                        speaker: "A", 
                        text: "La camera e' pronta dopo le 13:00 venerdì 12 marzo.",
                        translation: "The room will be ready after 1:00 PM on Friday, March 12th." 
                    },
                    { 
                        speaker: "B", 
                        text: "A presto.",
                        translation: "See you soon." 
                    },
                    { 
                        speaker: "A", 
                        text: "Grazie e Buon Viaggio.",
                        translation: "Thank you and have a good trip." 
                    },
                    { 
                        speaker: "B", 
                        text: "Grazie Arrivederci.",
                        translation: "Thank you. Goodbye." 
                    }
                ]
            }
        ]
    },
    introduction: {
        title: "Conversation",
        subtitle: "",
        description: "Basic introductory conversation covering greetings, personal information, and preferences. Perfect for beginners learning essential Italian phrases.",
        sections: [
            {
                title: "",
                dialogues: [
                    { 
                        speaker: "A", 
                        text: "Ciao",
                        translation: "Hello/Hi" 
                    },
                    { 
                        speaker: "B", 
                        text: "Buon Giorno",
                        translation: "Good Morning" 
                    },
                    { 
                        speaker: "A", 
                        text: "Come stai?",
                        translation: "How are you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Bene/male/cosi,cosi E tu?",
                        translation: "Good/bad/so-so. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sto Bene/male/cosi,cosi Come ti chiami?",
                        translation: "I'm good/bad/so-so. What's your name?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mi chiamo ____________. Piacere Qual' e` il tuo nome e cognome?",
                        translation: "My name is ____________. Nice to meet you. What is your first and last name?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio nome e` ____________ e mio cognome e` _______. Molto Lieto. Di dove sei?",
                        translation: "My first name is ____________ and my last name is _______. Very pleased to meet you. Where are you from?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sono di _______________. E Tu?",
                        translation: "I'm from _______________. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sono di _______________. Dove abiti?",
                        translation: "I'm from _______________. Where do you live?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Abito a ___________________. Dove abiti?",
                        translation: "I live in ___________________. Where do you live?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Abito a ___________________. Qual'è la tua nazionalità?",
                        translation: "I live in ___________________. What is your nationality?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sono americano/a. Qual'è la tua nazionalità?",
                        translation: "I am American (male/female). What is your nationality?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sono americano/a. Achiuuu",
                        translation: "I am American (male/female). Achoo! [sneeze]" 
                    },
                    { 
                        speaker: "B", 
                        text: "Salute",
                        translation: "Bless you! (lit: Health)" 
                    },
                    { 
                        speaker: "A", 
                        text: "Grazie",
                        translation: "Thank you" 
                    },
                    { 
                        speaker: "B", 
                        text: "Prego",
                        translation: "You're welcome" 
                    },
                    { 
                        speaker: "A", 
                        text: "Quanti anni hai?",
                        translation: "How old are you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Ho _______________ anni. Qual'è la tua età?",
                        translation: "I am _______________ years old. What is your age?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Ho _______________ anni. Qual' è il tuo numero di telefono?",
                        translation: "I am _______________ years old. What is your phone number?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio numero è _________________________. E tu?",
                        translation: "My number is _________________________. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio numero è _________________________. Qual'è il tuo indirizzo?",
                        translation: "My number is _________________________. What is your address?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio indirizzo è via ___________ numero _________________. E tu?",
                        translation: "My address is street ___________ number _________________. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio indirizzo è via ___________ numero _________________. Qual'è il tuo codice postale?",
                        translation: "My address is street ___________ number _________________. What is your postal code?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio codice postale è ______________________. Qual'è il tuo codice postale?",
                        translation: "My postal code is ______________________. What is your postal code?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio codice postale è ______________________.",
                        translation: "My postal code is ______________________." 
                    },
                    { 
                        speaker: "B", 
                        text: "Qual'e` il tuo cibo preferito? Mio cibo preferito e`________________.",
                        translation: "What is your favorite food? My favorite food is ________________." 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio cibo preferito e` ______________________.",
                        translation: "My favorite food is ______________________." 
                    },
                    { 
                        speaker: "B", 
                        text: "Qual'e` il tuo film (movie) preferito? Mio film preferito e` ____________.",
                        translation: "What is your favorite movie? My favorite movie is ____________." 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio film preferito e` ____________. Qual'e` il tuo libro (book) preferito?",
                        translation: "My favorite movie is ____________. What is your favorite book?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio libro preferito e` _____________. Quando e` il tuo compleanno?",
                        translation: "My favorite book is _____________. When is your birthday?" 
                    },
                    { 
                        speaker: "A", 
                        text: "E` il ___________ ______________. E tu?",
                        translation: "It's on ___________ ______________. And you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "E` il ______________ _______________. Chi e` il tuo attore (actor) preferito?",
                        translation: "It's on ______________ _______________. Who is your favorite actor?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio attore preferito e` _______________. E tu?",
                        translation: "My favorite actor is _______________. And you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "E ________________. A Dopo",
                        translation: "It's ________________. See you later" 
                    },
                    { 
                        speaker: "A", 
                        text: "Ciao!!!!! A Domani",
                        translation: "Bye!!!!! See you tomorrow" 
                    },
                    { 
                        speaker: "B", 
                        text: "Gelato!!",
                        translation: "Ice cream!!" 
                    },
                    { 
                        speaker: "A", 
                        text: "Biscotti!",
                        translation: "Cookies!" 
                    }
                ]
            }
        ]
    },
    doctor: {
        title: "At the Doctor's Office: A Simple Italian Conversation",
        subtitle: "Sample Conversation",
        description: "Learn medical vocabulary and phrases for visiting a doctor in Italy. Practice describing symptoms and understanding medical advice.",
        sections: [
            {
                title: "",
                dialogues: [
                    { 
                        speaker: "Dottore", 
                        text: "Buongiorno! Come sta?",
                        translation: "Good morning! How are you?" 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Buongiorno, dottore. Non sto bene. Sono malato.",
                        translation: "Good morning, doctor. I'm not feeling well. I'm sick." 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Mi dispiace. Che cosa ha?",
                        translation: "I'm sorry to hear that. What do you have?" 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Ho mal di testa e mal di gola.",
                        translation: "I have a headache and a sore throat." 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Capisco. Ha la febbre?",
                        translation: "I understand. Do you have a fever?" 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Sì, ho la febbre.",
                        translation: "Yes, I have a fever." 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Ha la tosse?",
                        translation: "Do you have a cough?" 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Sì, ho anche la tosse.",
                        translation: "Yes, I also have a cough." 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Sembra un raffreddore. Le raccomando di prendere un'aspirina per la febbre e il mal di testa.",
                        translation: "It seems like a cold. I recommend taking an aspirin for the fever and headache." 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Va bene. Devo stare a letto?",
                        translation: "Okay. Should I stay in bed?" 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Sì, stia a letto per due giorni e beva molta acqua.",
                        translation: "Yes, stay in bed for two days and drink plenty of water." 
                    },
                    { 
                        speaker: "Paziente", 
                        text: "Grazie, dottore.",
                        translation: "Thank you, doctor." 
                    },
                    { 
                        speaker: "Dottore", 
                        text: "Prego. Si senta meglio presto!",
                        translation: "You're welcome. Feel better soon!" 
                    }
                ]
            }
        ]
    },
    introduction2: {
        title: "Conversation",
        subtitle: "",
        description: "Extended introductory conversation with family-related vocabulary. Practice talking about relatives, their interests, and personal details.",
        sections: [
            {
                title: "",
                dialogues: [
                    { speaker: "A", text: "Ciao" },
                    { speaker: "B", text: "Buon Giorno" },
                    { speaker: "A", text: "Come stai?" },
                    { speaker: "B", text: "Sto bene/male/cosi,cosi E tu?" },
                    { speaker: "A", text: "Sto Bene/male/cosi,cosi Come ti chiami?" },
                    { speaker: "B", text: "Mi chiamo ____________. Piacere E tu?" },
                    { speaker: "A", text: "Mi chiamo ____________. Molto Lieto. Di dove sei?" },
                    { speaker: "B", text: "Sono di _______________. E Tu?" },
                    { speaker: "A", text: "Sono di _______________. Qual è la tua nazionalità?" },
                    { speaker: "B", text: "Sono americano/a. Qual è la tua nazionalità?" },
                    { speaker: "A", text: "Sono americano/a.. Qual è il tuo numero di telefono?" },
                    { speaker: "B", text: "Mio numero di telefono è _________________________. Qual è il tuo numero di telefono?" },
                    { speaker: "A", text: "Mio numero di telefono è _________________________. Qual è il tuo indirizzo?" },
                    { speaker: "B", text: "Mio indirizzo è via ___________ numero _________________. Qual è il tuo indirizzo?" },
                    { speaker: "A", text: "Mio indirizzo è via ___________ numero _________________. Qual è il tuo cibo preferito?" },
                    { speaker: "B", text: "Mio cibo preferito è __________________________. Qual è il tuo cibo preferito?" },
                    { speaker: "A", text: "Mio cibo preferito è __________________. Come si chiama tua madre e tuo padre?" },
                    { speaker: "B", text: "Mia madre si chiama ____ e mio padre si chiama ______. E tu?" },
                    { speaker: "A", text: "Mia madre si chiama ____ e mio padre si chiama ______. Di dove e' tuo nonno?" },
                    { speaker: "B", text: "E' di ____________. Di dove e' tua nonna?" },
                    { speaker: "A", text: "E' di ____________. Quanti anni ha tua sorella o fratello?" },
                    { speaker: "B", text: "Ha _________ anni. Quando e' il compleanno di tua madre?" },
                    { speaker: "A", text: "E' il __________ _______________. Quando e' il tuo compleanno?" },
                    { speaker: "B", text: "E' il __________ _______________. Qual e' il film preferito di tuo padre?" },
                    { speaker: "A", text: "Il film preferito di mio padre e' _____________. Dove abita tua zia?" },
                    { speaker: "B", text: "Mia zia abita a ____________. Qual e' la nazionalita di tuo cugino?" },
                    { speaker: "A", text: "Mio cugino e' _________________ Tua nonna parla italiano?" },
                    { speaker: "B", text: "_____________________________________________________. E tua nonna?" },
                    { speaker: "A", text: "___________________________________ Tuo padre guarda sport alla televisione?" },
                    { speaker: "B", text: "____________________________________. Tua madre lavora molto?" },
                    { speaker: "A", text: "_________________________________________________________." },
                    { speaker: "B", text: "Arrivederci. Arrivederla. A presto!!!" }
                ]
            }
        ]
    },
    family: {
        title: "Conversazione in Italiano: La Famiglia",
        subtitle: "Introduzione",
        description: "Comprehensive family-themed conversation covering relationships, personal details, and preferences. Great for intermediate learners to practice family vocabulary.",
        sections: [
            {
                title: "Conversazione (Unit 1)",
                dialogues: [
                    { 
                        speaker: "A", 
                        text: "Ciao!",
                        translation: "Hi!" 
                    },
                    { 
                        speaker: "B", 
                        text: "Buon Giorno!",
                        translation: "Good day!" 
                    },
                    { 
                        speaker: "A", 
                        text: "Come stai?",
                        translation: "How are you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sto bene, e tu?",
                        translation: "I'm well, and you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sto bene! Come ti chiami?",
                        translation: "I'm well! What's your name?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mi chiamo Marco. Piacere! E tu?",
                        translation: "My name is Marco. Nice to meet you! And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mi chiamo Anna. Molto lieto! Di dove sei?",
                        translation: "My name is Anna. Very pleased to meet you! Where are you from?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sono di Roma. E tu?",
                        translation: "I'm from Rome. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sono di Milano. Qual è la tua nazionalità?",
                        translation: "I'm from Milan. What is your nationality?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sono italiano/a. Qual è la tua nazionalità?",
                        translation: "I am Italian. What is your nationality?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sono italiano/a. Qual è il tuo numero di telefono?",
                        translation: "I am Italian. What is your phone number?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio numero di telefono è 333-1234567. Qual è il tuo numero di telefono?",
                        translation: "My phone number is 333-1234567. What is your phone number?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio numero di telefono è 334-7654321. Qual è il tuo indirizzo?",
                        translation: "My phone number is 334-7654321. What is your address?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio indirizzo è via Roma numero 10. Qual è il tuo indirizzo?",
                        translation: "My address is Roma Street number 10. What is your address?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio indirizzo è via Milano numero 20. Qual è il tuo cibo preferito?",
                        translation: "My address is Milano Street number 20. What is your favorite food?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mio cibo preferito è la pizza. Qual è il tuo cibo preferito?",
                        translation: "My favorite food is pizza. What is your favorite food?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio cibo preferito è la pasta. Come si chiama tua madre e tuo padre?",
                        translation: "My favorite food is pasta. What are your mother and father's names?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mia madre si chiama Laura e mio padre si chiama Giovanni. E tu?",
                        translation: "My mother's name is Laura and my father's name is Giovanni. And you?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mia madre si chiama Maria e mio padre si chiama Luca. Di dove è tuo nonno?",
                        translation: "My mother's name is Maria and my father's name is Luca. Where is your grandfather from?" 
                    },
                    { 
                        speaker: "B", 
                        text: "È di Napoli. Di dove è tua nonna?",
                        translation: "He's from Naples. Where is your grandmother from?" 
                    },
                    { 
                        speaker: "A", 
                        text: "È di Torino. Quanti anni ha tua sorella o tuo fratello?",
                        translation: "She's from Turin. How old is your sister or brother?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Ha 15 anni. E tu, hai fratelli o sorelle?",
                        translation: "She/He is 15 years old. And you, do you have brothers or sisters?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Ho una sorella che ha 12 anni. Quando è il compleanno di tua madre?",
                        translation: "I have a sister who is 12 years old. When is your mother's birthday?" 
                    },
                    { 
                        speaker: "B", 
                        text: "È il 5 marzo. Quando è il tuo compleanno?",
                        translation: "It's March 5th. When is your birthday?" 
                    },
                    { 
                        speaker: "A", 
                        text: "È il 10 luglio. Qual è il film preferito di tuo padre?",
                        translation: "It's July 10th. What is your father's favorite movie?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Il film preferito di mio padre è \"Il Padrino\". E il film preferito di tua madre?",
                        translation: "My father's favorite movie is \"The Godfather\". And your mother's favorite movie?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Il film preferito di mia madre è \"La Vita è Bella\". Dove abita tua zia?",
                        translation: "My mother's favorite movie is \"Life is Beautiful\". Where does your aunt live?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Mia zia abita a Firenze. Qual è la nazionalità di tuo cugino?",
                        translation: "My aunt lives in Florence. What is your cousin's nationality?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Mio cugino è italiano. Tua nonna parla italiano?",
                        translation: "My cousin is Italian. Does your grandmother speak Italian?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sì, parla italiano. E tua nonna?",
                        translation: "Yes, she speaks Italian. And your grandmother?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sì, parla italiano anche lei. Tuo padre guarda sport alla televisione?",
                        translation: "Yes, she speaks Italian too. Does your father watch sports on television?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sì, guarda il calcio. E tua madre?",
                        translation: "Yes, he watches soccer. And your mother?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sì, mia madre guarda il tennis. Tua madre lavora molto?",
                        translation: "Yes, my mother watches tennis. Does your mother work a lot?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Sì, lavora come insegnante. E tua madre?",
                        translation: "Yes, she works as a teacher. And your mother?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Sì, lavora come infermiera.",
                        translation: "Yes, she works as a nurse." 
                    },
                    { 
                        speaker: "B", 
                        text: "Arrivederci!",
                        translation: "Goodbye!" 
                    },
                    { 
                        speaker: "A", 
                        text: "Arrivederla! A presto!",
                        translation: "Goodbye! See you soon!" 
                    }
                ]
            }
        ]
    },
    train: {
        title: "Conversazione in Stazione di Treno",
        subtitle: "",
        description: "Learn how to buy train tickets, ask about schedules, and navigate an Italian train station. Essential vocabulary for travelers using public transportation in Italy.",
        sections: [
            {
                title: "",
                dialogues: [
                    { 
                        speaker: "A", 
                        text: "Buongiorno, Come posso aiutarla?",
                        translation: "Good morning, how can I help you?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei un biglietto per Torino. A che ora è il prossimo treno per Torino.",
                        translation: "I would like a ticket to Turin. What time is the next train to Turin?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Il prossimo treno parte alle 13:25. Vuole un treno diretto o locale?",
                        translation: "The next train leaves at 1:25 PM. Do you want a direct or local train?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Voglio un treno diretto. A che ora arriva il treno a Torino?",
                        translation: "I want a direct train. What time does the train arrive in Turin?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Il treno arriva alle 15:10. Va bene?  Quanti biglietti vuole?",
                        translation: "The train arrives at 3:10 PM. Is that okay? How many tickets do you want?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Si, perfetto. Voglio un biglietto.",
                        translation: "Yes, perfect. I want one ticket." 
                    },
                    { 
                        speaker: "A", 
                        text: "Vuole un biglietto di andata e ritorno o solo andata?",
                        translation: "Do you want a round-trip or one-way ticket?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei ___________________________.",
                        translation: "I would like ___________________________." 
                    },
                    { 
                        speaker: "A", 
                        text: "Vuole un biglietto di prima o seconda classe?",
                        translation: "Do you want a first or second class ticket?" 
                    },
                    { 
                        speaker: "B", 
                        text: "Vorrei ________________________. Quanto costa il biglietto?",
                        translation: "I would like ________________________. How much is the ticket?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Costa trentanove Euro. Il treno parte dal binario numero 5.\nE' importante arrivare dieci minuti prima.",
                        translation: "It costs thirty-nine Euros. The train departs from platform number 5. It's important to arrive ten minutes early." 
                    },
                    { 
                        speaker: "B", 
                        text: "Posso prenotare un posto?",
                        translation: "Can I reserve a seat?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Si, il numero del posto e sul biglietto.",
                        translation: "Yes, the seat number is on the ticket." 
                    },
                    { 
                        speaker: "B", 
                        text: "Come posso pagare?",
                        translation: "How can I pay?" 
                    },
                    { 
                        speaker: "A", 
                        text: "Accettiamo contanti e carte di credito",
                        translation: "We accept cash and credit cards." 
                    },
                    { 
                        speaker: "B", 
                        text: "Ecco ____________.",
                        translation: "Here is ____________." 
                    },
                    { 
                        speaker: "A", 
                        text: "Grazie e Buon Viaggio.",
                        translation: "Thank you and have a good trip." 
                    },
                    { 
                        speaker: "B", 
                        text: "Grazie Arrivederci.",
                        translation: "Thank you. Goodbye." 
                    }
                ]
            }
        ]
    }
};

// Conversation suggestions
const conversationSuggestions = [
    "Come stai?",
    "Come sta la famiglia?",
    "Ti piace (il ristorante, il cibo etc…)?",
    "Vai al cinema molto?",
    "Ti piace il film __________ nuovo?",
    "Qual è il tuo film preferito?",
    "Chi è il tuo attore preferito?",
    "Leggi molti libri? Qual è il tuo libro preferito?",
    "Vai al centro commerciale?",
    "Mi piace comprare vestiti.",
    "Qual è il tuo negozio preferito?",
    "Ti piace giocare allo sport?",
    "Che cosa giochi?",
    "Qual è la tua squadra (team) preferita?",
    "Ascolti musica?",
    "Qual è il tuo gruppo musicale preferito?",
    "Vai a concerti?",
    "Dove vai per le vacanze?",
    "Ti piace andare a (il museo, la spiaggia, la piscina, il parco etc…)?",
    "Hai sorelle o fratelli?",
    "Come si chiamano?",
    "Hai un cane?",
    "Come va la scuola?",
    "Ti piace la classe (di italiano, inglese, matematica etc…)?",
    "Chi è il tuo professore preferito?"
];
