const vocabularyData = {
    greetings: [
        { italian: "Ciao", english: "Hello/Hi/Bye", type: "greeting", gender: "" },
        { italian: "Buon Giorno", english: "Good morning/Good day", type: "greeting", gender: "" },
        { italian: "Buona Sera", english: "Good evening", type: "greeting", gender: "" },
        { italian: "Buona Notte", english: "Good night", type: "greeting", gender: "" },
        { italian: "Come ti chiami?", english: "What's your name?", type: "question", gender: "" },
        { italian: "Mi chiamo...", english: "My name is...", type: "response", gender: "" },
        { italian: "Come stai?", english: "How are you?", type: "question", gender: "" },
        { italian: "Sto molto bene", english: "I'm very well", type: "response", gender: "" },
        { italian: "Sto bene", english: "I'm well", type: "response", gender: "" },
        { italian: "Sto così, così", english: "I'm so-so", type: "response", gender: "" },
        { italian: "Sto male", english: "I'm not well", type: "response", gender: "" },
        { italian: "Sto molto male", english: "I'm very unwell", type: "response", gender: "" },
        { italian: "Grazie", english: "Thank you", type: "expression", gender: "" },
        { italian: "Prego", english: "You're welcome", type: "expression", gender: "" },
        { italian: "Salute", english: "Bless you (after sneeze)/Health", type: "expression", gender: "" },
        { italian: "Per piacere/Per favore", english: "Please", type: "expression", gender: "" },
        { italian: "Posso?", english: "May I?", type: "question", gender: "" },
        { italian: "Sì", english: "Yes", type: "response", gender: "" },
        { italian: "No", english: "No", type: "response", gender: "" },
        { italian: "Piacere/Molto Lieto", english: "Pleased to meet you", type: "expression", gender: "" }
    ],
    
    goodbyes: [
        { italian: "A presto", english: "See you soon", type: "expression", gender: "" },
        { italian: "A domani", english: "See you tomorrow", type: "expression", gender: "" },
        { italian: "Ciao", english: "Bye/Hello", type: "expression", gender: "" },
        { italian: "Arrivederci", english: "Goodbye (informal)", type: "expression", gender: "" },
        { italian: "Arrivederla", english: "Goodbye (formal)", type: "expression", gender: "" },
        { italian: "A più tardi", english: "See you later", type: "expression", gender: "" },
        { italian: "A dopo", english: "See you later", type: "expression", gender: "" }
    ],
    
    numbers: [
        { italian: "Zero", english: "Zero", type: "number", gender: "" },
        { italian: "Uno", english: "One", type: "number", gender: "" },
        { italian: "Due", english: "Two", type: "number", gender: "" },
        { italian: "Tre", english: "Three", type: "number", gender: "" },
        { italian: "Quattro", english: "Four", type: "number", gender: "" },
        { italian: "Cinque", english: "Five", type: "number", gender: "" },
        { italian: "Sei", english: "Six", type: "number", gender: "" },
        { italian: "Sette", english: "Seven", type: "number", gender: "" },
        { italian: "Otto", english: "Eight", type: "number", gender: "" },
        { italian: "Nove", english: "Nine", type: "number", gender: "" },
        { italian: "Dieci", english: "Ten", type: "number", gender: "" },
        { italian: "Undici", english: "Eleven", type: "number", gender: "" },
        { italian: "Dodici", english: "Twelve", type: "number", gender: "" },
        { italian: "Tredici", english: "Thirteen", type: "number", gender: "" },
        { italian: "Quattordici", english: "Fourteen", type: "number", gender: "" },
        { italian: "Quindici", english: "Fifteen", type: "number", gender: "" },
        { italian: "Sedici", english: "Sixteen", type: "number", gender: "" },
        { italian: "Diciassette", english: "Seventeen", type: "number", gender: "" },
        { italian: "Diciotto", english: "Eighteen", type: "number", gender: "" },
        { italian: "Diciannove", english: "Nineteen", type: "number", gender: "" },
        { italian: "Venti", english: "Twenty", type: "number", gender: "" },
        { italian: "Trenta", english: "Thirty", type: "number", gender: "" },
        { italian: "Quaranta", english: "Forty", type: "number", gender: "" },
        { italian: "Cinquanta", english: "Fifty", type: "number", gender: "" },
        { italian: "Sessanta", english: "Sixty", type: "number", gender: "" },
        { italian: "Settanta", english: "Seventy", type: "number", gender: "" },
        { italian: "Ottanta", english: "Eighty", type: "number", gender: "" },
        { italian: "Novanta", english: "Ninety", type: "number", gender: "" },
        { italian: "Cento", english: "One hundred", type: "number", gender: "" },
        { italian: "Mille", english: "One thousand", type: "number", gender: "" },
        { italian: "Un milione", english: "One million", type: "number", gender: "" }
    ],
    
    dates: [
        // Days of the week
        { italian: "Lunedì", english: "Monday", type: "day", gender: "masculine" },
        { italian: "Martedì", english: "Tuesday", type: "day", gender: "masculine" },
        { italian: "Mercoledì", english: "Wednesday", type: "day", gender: "masculine" },
        { italian: "Giovedì", english: "Thursday", type: "day", gender: "masculine" },
        { italian: "Venerdì", english: "Friday", type: "day", gender: "masculine" },
        { italian: "Sabato", english: "Saturday", type: "day", gender: "masculine" },
        { italian: "Domenica", english: "Sunday", type: "day", gender: "feminine" },
        
        // Months of the year
        { italian: "Gennaio", english: "January", type: "month", gender: "masculine" },
        { italian: "Febbraio", english: "February", type: "month", gender: "masculine" },
        { italian: "Marzo", english: "March", type: "month", gender: "masculine" },
        { italian: "Aprile", english: "April", type: "month", gender: "masculine" },
        { italian: "Maggio", english: "May", type: "month", gender: "masculine" },
        { italian: "Giugno", english: "June", type: "month", gender: "masculine" },
        { italian: "Luglio", english: "July", type: "month", gender: "masculine" },
        { italian: "Agosto", english: "August", type: "month", gender: "masculine" },
        { italian: "Settembre", english: "September", type: "month", gender: "masculine" },
        { italian: "Ottobre", english: "October", type: "month", gender: "masculine" },
        { italian: "Novembre", english: "November", type: "month", gender: "masculine" },
        { italian: "Dicembre", english: "December", type: "month", gender: "masculine" },
        
        // Seasons
        { italian: "L'inverno", english: "Winter", type: "season", gender: "masculine" },
        { italian: "La primavera", english: "Spring", type: "season", gender: "feminine" },
        { italian: "L'estate", english: "Summer", type: "season", gender: "feminine" },
        { italian: "L'autunno", english: "Fall/Autumn", type: "season", gender: "masculine" },
        
        // Date expressions
        { italian: "Oggi è il...", english: "Today is the...", type: "expression", gender: "" },
        { italian: "Oggi è... il... ", english: "Today is... the...", type: "expression", gender: "" },
        
        // Extra date vocabulary
        { italian: "Settimana", english: "Week", type: "time", gender: "feminine" },
        { italian: "Fine settimana", english: "Weekend", type: "time", gender: "masculine" },
        { italian: "Mese", english: "Month", type: "time", gender: "masculine" },
        { italian: "Giorno", english: "Day", type: "time", gender: "masculine" },
        { italian: "Anno", english: "Year", type: "time", gender: "masculine" },
        { italian: "Ieri", english: "Yesterday", type: "time", gender: "" },
        { italian: "Natale", english: "Christmas", type: "holiday", gender: "masculine" },
        { italian: "Il calendario", english: "The calendar", type: "object", gender: "masculine" },
        { italian: "Data di nascita", english: "Date of birth", type: "expression", gender: "feminine" },
        { italian: "Compleanno", english: "Birthday", type: "event", gender: "masculine" }
    ],
    
    weather: [
        { italian: "Che tempo fa?", english: "How's the weather?", type: "question", gender: "" },
        { italian: "Fa freddo", english: "It's cold", type: "expression", gender: "" },
        { italian: "Fa caldo", english: "It's hot", type: "expression", gender: "" },
        { italian: "Fa fresco", english: "It's cool", type: "expression", gender: "" },
        { italian: "C'è sole", english: "It's sunny", type: "expression", gender: "" },
        { italian: "È nuvoloso", english: "It's cloudy", type: "expression", gender: "" },
        { italian: "Tira vento", english: "It's windy", type: "expression", gender: "" },
        { italian: "Nevica", english: "It is snowing", type: "expression", gender: "" },
        { italian: "Piove", english: "It is raining", type: "expression", gender: "" },
        { italian: "Fa bel tempo", english: "It's nice weather", type: "expression", gender: "" },
        { italian: "Fa cattivo tempo", english: "It's bad weather", type: "expression", gender: "" },
        { italian: "Temporale", english: "Storm", type: "noun", gender: "masculine" },
        { italian: "Temperatura", english: "Temperature", type: "noun", gender: "feminine" },
        { italian: "C'è nebbia", english: "It is foggy", type: "expression", gender: "" }
    ],
    
    conversation: [
        { italian: "Come ti chiami?", english: "What's your name?", type: "question", gender: "" },
        { italian: "Mi chiamo...", english: "My name is...", type: "response", gender: "" },
        { italian: "Qual è tuo nome e cognome?", english: "What is your first and last name?", type: "question", gender: "" },
        { italian: "Mio nome è... e mio cognome è...", english: "My first name is... and my last name is...", type: "response", gender: "" },
        { italian: "Achiuuu", english: "Achoo (sneeze)", type: "expression", gender: "" },
        { italian: "Salute", english: "Bless you", type: "expression", gender: "" },
        { italian: "Grazie", english: "Thank you", type: "expression", gender: "" },
        { italian: "Prego", english: "You're welcome", type: "expression", gender: "" },
        { italian: "Quanti anni hai?", english: "How old are you?", type: "question", gender: "" },
        { italian: "Ho... anni", english: "I am... years old", type: "response", gender: "" },
        { italian: "Qual è il tuo numero di telefono?", english: "What is your phone number?", type: "question", gender: "" },
        { italian: "È...", english: "It's...", type: "response", gender: "" },
        { italian: "Quando è il tuo compleanno?", english: "When is your birthday?", type: "question", gender: "" },
        { italian: "È il...", english: "It's on...", type: "response", gender: "" },
        { italian: "Qual è la data di oggi?", english: "What is today's date?", type: "question", gender: "" },
        { italian: "È...", english: "It's...", type: "response", gender: "" },
        { italian: "Qual è tua nazionalità?", english: "What is your nationality?", type: "question", gender: "" },
        { italian: "Sono...", english: "I am...", type: "response", gender: "" },
        { italian: "Dove abiti?", english: "Where do you live?", type: "question", gender: "" },
        { italian: "Abito a...", english: "I live in...", type: "response", gender: "" },
        { italian: "Qual è il tuo indirizzo?", english: "What is your address?", type: "question", gender: "" },
        { italian: "Mio indirizzo è via... numero...", english: "My address is... street number...", type: "response", gender: "" },
        { italian: "Qual è tuo codice postale?", english: "What is your postal code?", type: "question", gender: "" },
        { italian: "Mio codice postale è...", english: "My postal code is...", type: "response", gender: "" },
        { italian: "Di dove sei?", english: "Where are you from?", type: "question", gender: "" },
        { italian: "Sono di...", english: "I'm from...", type: "response", gender: "" },
        { italian: "Che tempo fa?", english: "How's the weather?", type: "question", gender: "" },
        { italian: "Che tempo fa d'inverno/d'estate/di primavera/d'autunno?", english: "How's the weather in winter/summer/spring/fall?", type: "question", gender: "" },
        { italian: "Qual è la tua stagione preferita?", english: "What is your favorite season?", type: "question", gender: "" },
        { italian: "Mia stagione preferita è...", english: "My favorite season is...", type: "response", gender: "" },
        { italian: "Qual è il tuo cibo preferito?", english: "What is your favorite food?", type: "question", gender: "" },
        { italian: "Qual è il tuo libro preferito?", english: "What is your favorite book?", type: "question", gender: "" },
        { italian: "Qual è il tuo film preferito?", english: "What is your favorite movie?", type: "question", gender: "" },
        { italian: "Chi è il tuo attore preferito?", english: "Who is your favorite actor?", type: "question", gender: "" },
        { italian: "Qual è il tuo ristorante preferito?", english: "What is your favorite restaurant?", type: "question", gender: "" },
        { italian: "È...", english: "It's...", type: "response", gender: "" },
        
        // Extra conversation vocabulary
        { italian: "L'indirizzo", english: "Address", type: "noun", gender: "masculine" },
        { italian: "Codice postale", english: "Zip code", type: "noun", gender: "masculine" },
        { italian: "Stagione", english: "Season", type: "noun", gender: "feminine" },
        { italian: "Età", english: "Age", type: "noun", gender: "feminine" },
        { italian: "Data di nascita", english: "Date of birth", type: "noun", gender: "feminine" },
        { italian: "Luogo di nascita", english: "Place of birth", type: "noun", gender: "masculine" },
        { italian: "Nazionalità", english: "Nationality", type: "noun", gender: "feminine" },
        { italian: "Nome/Cognome", english: "First and last name", type: "noun", gender: "masculine" },
        { italian: "Paese", english: "Country or town", type: "noun", gender: "masculine" }
    ],

    verbs: [
        // Helping Verbs (Modal Verbs)
        { italian: "Dovere", english: "Must/To have to", type: "helping verb", gender: "", conjugation: {
            present: { io: "devo", tu: "devi", lui: "deve", noi: "dobbiamo", voi: "dovete", loro: "devono" }
        }},
        { italian: "Potere", english: "Can/To be able to", type: "helping verb", gender: "", conjugation: {
            present: { io: "posso", tu: "puoi", lui: "può", noi: "possiamo", voi: "potete", loro: "possono" }
        }},
        { italian: "Volere", english: "To want", type: "helping verb", gender: "", conjugation: {
            present: { io: "voglio", tu: "vuoi", lui: "vuole", noi: "vogliamo", voi: "volete", loro: "vogliono" }
        }},
        
        // -ARE verbs
        { italian: "Ballare", english: "To dance", type: "verb", gender: "", conjugation: {
            present: { io: "ballo", tu: "balli", lui: "balla", noi: "balliamo", voi: "ballate", loro: "ballano" },
            past: { io: "ho ballato", tu: "hai ballato", lui: "ha ballato", noi: "abbiamo ballato", voi: "avete ballato", loro: "hanno ballato" },
            future: { io: "ballerò", tu: "ballerai", lui: "ballerà", noi: "balleremo", voi: "ballerete", loro: "balleranno" }
        }},
        { italian: "Mangiare", english: "To eat", type: "verb", gender: "", conjugation: {
            present: { io: "mangio", tu: "mangi", lui: "mangia", noi: "mangiamo", voi: "mangiate", loro: "mangiano" },
            past: { io: "ho mangiato", tu: "hai mangiato", lui: "ha mangiato", noi: "abbiamo mangiato", voi: "avete mangiato", loro: "hanno mangiato" },
            future: { io: "mangerò", tu: "mangerai", lui: "mangerà", noi: "mangeremo", voi: "mangerete", loro: "mangeranno" }
        }},
        { italian: "Ascoltare musica", english: "To listen to music", type: "verb", gender: "", conjugation: {
            present: { io: "ascolto", tu: "ascolti", lui: "ascolta", noi: "ascoltiamo", voi: "ascoltate", loro: "ascoltano" },
            past: { io: "ho ascoltato", tu: "hai ascoltato", lui: "ha ascoltato", noi: "abbiamo ascoltato", voi: "avete ascoltato", loro: "hanno ascoltato" },
            future: { io: "ascolterò", tu: "ascolterai", lui: "ascolterà", noi: "ascolteremo", voi: "ascolterete", loro: "ascolteranno" }
        }},
        { italian: "Parlare al telefono", english: "To speak on the phone", type: "verb", gender: "", conjugation: {
            present: { io: "parlo", tu: "parli", lui: "parla", noi: "parliamo", voi: "parlate", loro: "parlano" },
            past: { io: "ho parlato", tu: "hai parlato", lui: "ha parlato", noi: "abbiamo parlato", voi: "avete parlato", loro: "hanno parlato" },
            future: { io: "parlerò", tu: "parlerai", lui: "parlerà", noi: "parleremo", voi: "parlerete", loro: "parleranno" }
        }},
        { italian: "Sciare", english: "To ski", type: "verb", gender: "", conjugation: {
            present: { io: "scio", tu: "scii", lui: "scia", noi: "sciamo", voi: "sciate", loro: "sciano" },
            past: { io: "ho sciato", tu: "hai sciato", lui: "ha sciato", noi: "abbiamo sciato", voi: "avete sciato", loro: "hanno sciato" },
            future: { io: "scierò", tu: "scierai", lui: "scierà", noi: "scieremo", voi: "scierete", loro: "scieranno" }
        }},
        { italian: "Giocare", english: "To play (sports)", type: "verb", gender: "", conjugation: {
            present: { io: "gioco", tu: "giochi", lui: "gioca", noi: "giochiamo", voi: "giocate", loro: "giocano" },
            past: { io: "ho giocato", tu: "hai giocato", lui: "ha giocato", noi: "abbiamo giocato", voi: "avete giocato", loro: "hanno giocato" },
            future: { io: "giocherò", tu: "giocherai", lui: "giocherà", noi: "giocheremo", voi: "giocherete", loro: "giocheranno" }
        }},
        { italian: "Cucinare", english: "To cook", type: "verb", gender: "", conjugation: {
            present: { io: "cucino", tu: "cucini", lui: "cucina", noi: "cuciniamo", voi: "cucinate", loro: "cucinano" },
            past: { io: "ho cucinato", tu: "hai cucinato", lui: "ha cucinato", noi: "abbiamo cucinato", voi: "avete cucinato", loro: "hanno cucinato" },
            future: { io: "cucinerò", tu: "cucinerai", lui: "cucinerà", noi: "cucineremo", voi: "cucinerete", loro: "cucineranno" }
        }},
        { italian: "Studiare", english: "To study", type: "verb", gender: "", conjugation: {
            present: { io: "studio", tu: "studi", lui: "studia", noi: "studiamo", voi: "studiate", loro: "studiano" },
            past: { io: "ho studiato", tu: "hai studiato", lui: "ha studiato", noi: "abbiamo studiato", voi: "avete studiato", loro: "hanno studiato" },
            future: { io: "studierò", tu: "studierai", lui: "studierà", noi: "studieremo", voi: "studierete", loro: "studieranno" }
        }},
        { italian: "Cantare", english: "To sing", type: "verb", gender: "", conjugation: {
            present: { io: "canto", tu: "canti", lui: "canta", noi: "cantiamo", voi: "cantate", loro: "cantano" },
            past: { io: "ho cantato", tu: "hai cantato", lui: "ha cantato", noi: "abbiamo cantato", voi: "avete cantato", loro: "hanno cantato" },
            future: { io: "canterò", tu: "canterai", lui: "canterà", noi: "canteremo", voi: "canterete", loro: "canteranno" }
        }},
        { italian: "Nuotare", english: "To swim", type: "verb", gender: "", conjugation: {
            present: { io: "nuoto", tu: "nuoti", lui: "nuota", noi: "nuotiamo", voi: "nuotate", loro: "nuotano" },
            past: { io: "ho nuotato", tu: "hai nuotato", lui: "ha nuotato", noi: "abbiamo nuotato", voi: "avete nuotato", loro: "hanno nuotato" },
            future: { io: "nuoterò", tu: "nuoterai", lui: "nuoterà", noi: "nuoteremo", voi: "nuoterete", loro: "nuoteranno" }
        }},
        { italian: "Praticare gli sport", english: "To practice sports", type: "verb", gender: "", conjugation: {
            present: { io: "pratico", tu: "pratichi", lui: "pratica", noi: "pratichiamo", voi: "praticate", loro: "praticano" },
            past: { io: "ho praticato", tu: "hai praticato", lui: "ha praticato", noi: "abbiamo praticato", voi: "avete praticato", loro: "hanno praticato" },
            future: { io: "praticherò", tu: "praticherai", lui: "praticherà", noi: "praticheremo", voi: "praticherete", loro: "praticheranno" }
        }},
        { italian: "Disegnare", english: "To draw", type: "verb", gender: "", conjugation: {
            present: { io: "disegno", tu: "disegni", lui: "disegna", noi: "disegniamo", voi: "disegnate", loro: "disegnano" },
            past: { io: "ho disegnato", tu: "hai disegnato", lui: "ha disegnato", noi: "abbiamo disegnato", voi: "avete disegnato", loro: "hanno disegnato" },
            future: { io: "disegnerò", tu: "disegnerai", lui: "disegnerà", noi: "disegneremo", voi: "disegnerete", loro: "disegneranno" }
        }},
        { italian: "Comprare", english: "To buy", type: "verb", gender: "", conjugation: {
            present: { io: "compro", tu: "compri", lui: "compra", noi: "compriamo", voi: "comprate", loro: "comprano" },
            past: { io: "ho comprato", tu: "hai comprato", lui: "ha comprato", noi: "abbiamo comprato", voi: "avete comprato", loro: "hanno comprato" },
            future: { io: "comprerò", tu: "comprerai", lui: "comprerà", noi: "compreremo", voi: "comprerete", loro: "compreranno" }
        }},
        { italian: "Lavorare", english: "To work", type: "verb", gender: "", conjugation: {
            present: { io: "lavoro", tu: "lavori", lui: "lavora", noi: "lavoriamo", voi: "lavorate", loro: "lavorano" },
            past: { io: "ho lavorato", tu: "hai lavorato", lui: "ha lavorato", noi: "abbiamo lavorato", voi: "avete lavorato", loro: "hanno lavorato" },
            future: { io: "lavorerò", tu: "lavorerai", lui: "lavorerà", noi: "lavoreremo", voi: "lavorerete", loro: "lavoreranno" }
        }},
        { italian: "Camminare", english: "To walk", type: "verb", gender: "", conjugation: {
            present: { io: "cammino", tu: "cammini", lui: "cammina", noi: "camminiamo", voi: "camminate", loro: "camminano" },
            past: { io: "ho camminato", tu: "hai camminato", lui: "ha camminato", noi: "abbiamo camminato", voi: "avete camminato", loro: "hanno camminato" },
            future: { io: "camminerò", tu: "camminerai", lui: "camminerà", noi: "cammineremo", voi: "camminerete", loro: "cammineranno" }
        }},
        { italian: "Preparare", english: "To prepare", type: "verb", gender: "", conjugation: {
            present: { io: "preparo", tu: "prepari", lui: "prepara", noi: "prepariamo", voi: "preparate", loro: "preparano" },
            past: { io: "ho preparato", tu: "hai preparato", lui: "ha preparato", noi: "abbiamo preparato", voi: "avete preparato", loro: "hanno preparato" },
            future: { io: "preparerò", tu: "preparerai", lui: "preparerà", noi: "prepareremo", voi: "preparerete", loro: "prepareranno" }
        }},
        { italian: "Fare i compiti", english: "To do homework", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Fare lo shopping", english: "To go shopping", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        
        // -ERE verbs
        { italian: "Leggere", english: "To read", type: "verb", gender: "", conjugation: {
            present: { io: "leggo", tu: "leggi", lui: "legge", noi: "leggiamo", voi: "leggete", loro: "leggono" },
            past: { io: "ho letto", tu: "hai letto", lui: "ha letto", noi: "abbiamo letto", voi: "avete letto", loro: "hanno letto" },
            future: { io: "leggerò", tu: "leggerai", lui: "leggerà", noi: "leggeremo", voi: "leggerete", loro: "leggeranno" }
        }},
        { italian: "Vedere i film", english: "To see a movie", type: "verb", gender: "", conjugation: {
            present: { io: "vedo", tu: "vedi", lui: "vede", noi: "vediamo", voi: "vedete", loro: "vedono" },
            past: { io: "ho visto", tu: "hai visto", lui: "ha visto", noi: "abbiamo visto", voi: "avete visto", loro: "hanno visto" },
            future: { io: "vedrò", tu: "vedrai", lui: "vedrà", noi: "vedremo", voi: "vedrete", loro: "vedranno" }
        }},
        { italian: "Correre", english: "To run", type: "verb", gender: "", conjugation: {
            present: { io: "corro", tu: "corri", lui: "corre", noi: "corriamo", voi: "correte", loro: "corrono" },
            past: { io: "ho corso", tu: "hai corso", lui: "ha corso", noi: "abbiamo corso", voi: "avete corso", loro: "hanno corso" },
            future: { io: "correrò", tu: "correrai", lui: "correrà", noi: "correremo", voi: "correrete", loro: "correranno" }
        }},
        { italian: "Scrivere nelle classi", english: "To write in class", type: "verb", gender: "", conjugation: {
            present: { io: "scrivo", tu: "scrivi", lui: "scrive", noi: "scriviamo", voi: "scrivete", loro: "scrivono" },
            past: { io: "ho scritto", tu: "hai scritto", lui: "ha scritto", noi: "abbiamo scritto", voi: "avete scritto", loro: "hanno scritto" },
            future: { io: "scriverò", tu: "scriverai", lui: "scriverà", noi: "scriveremo", voi: "scriverete", loro: "scriveranno" }
        }},
        { italian: "Rispondere in italiano", english: "To answer in Italian", type: "verb", gender: "", conjugation: {
            present: { io: "rispondo", tu: "rispondi", lui: "risponde", noi: "rispondiamo", voi: "rispondete", loro: "rispondono" },
            past: { io: "ho risposto", tu: "hai risposto", lui: "ha risposto", noi: "abbiamo risposto", voi: "avete risposto", loro: "hanno risposto" },
            future: { io: "risponderò", tu: "risponderai", lui: "risponderà", noi: "risponderemo", voi: "risponderete", loro: "risponderanno" }
        }},
        
        // -IRE verbs
        { italian: "Dormire", english: "To sleep", type: "verb", gender: "", conjugation: {
            present: { io: "dormo", tu: "dormi", lui: "dorme", noi: "dormiamo", voi: "dormite", loro: "dormono" },
            past: { io: "ho dormito", tu: "hai dormito", lui: "ha dormito", noi: "abbiamo dormito", voi: "avete dormito", loro: "hanno dormito" },
            future: { io: "dormirò", tu: "dormirai", lui: "dormirà", noi: "dormiremo", voi: "dormirete", loro: "dormiranno" }
        }},
        { italian: "Uscire con gli amici", english: "To go out with friends", type: "verb", gender: "", conjugation: {
            present: { io: "esco", tu: "esci", lui: "esce", noi: "usciamo", voi: "uscite", loro: "escono" },
            past: { io: "sono uscito/a", tu: "sei uscito/a", lui: "è uscito", noi: "siamo usciti/e", voi: "siete usciti/e", loro: "sono usciti/e" },
            future: { io: "uscirò", tu: "uscirai", lui: "uscirà", noi: "usciremo", voi: "uscirete", loro: "usciranno" }
        }},
        
        // Expressions with verbs
        { italian: "Ti piace studiare?", english: "Do you like to study?", type: "question", gender: "" },
        { italian: "Sì, mi piace studiare", english: "Yes, I like to study", type: "response", gender: "" },
        { italian: "No, non mi piace studiare", english: "No, I don't like to study", type: "response", gender: "" },
        { italian: "Mi piace", english: "I like", type: "expression", gender: "" },
        { italian: "Non mi piace", english: "I don't like", type: "expression", gender: "" },
        { italian: "Amo", english: "I love", type: "expression", gender: "" },
        { italian: "Odio", english: "I hate", type: "expression", gender: "" }
    ],
    
    family: [
        { italian: "La madre", english: "The mother", type: "noun", gender: "feminine" },
        { italian: "Il padre", english: "The father", type: "noun", gender: "masculine" },
        { italian: "Il nonno", english: "The grandfather", type: "noun", gender: "masculine" },
        { italian: "La nonna", english: "The grandmother", type: "noun", gender: "feminine" },
        { italian: "Il fratello", english: "The brother", type: "noun", gender: "masculine" },
        { italian: "La sorella", english: "The sister", type: "noun", gender: "feminine" },
        { italian: "La figlia", english: "The daughter", type: "noun", gender: "feminine" },
        { italian: "Il figlio", english: "The son", type: "noun", gender: "masculine" },
        { italian: "La zia", english: "The aunt", type: "noun", gender: "feminine" },
        { italian: "Lo zio", english: "The uncle", type: "noun", gender: "masculine" },
        { italian: "La cugina", english: "The cousin (f)", type: "noun", gender: "feminine" },
        { italian: "Il cugino", english: "The cousin (m)", type: "noun", gender: "masculine" },
        { italian: "I genitori", english: "The parents", type: "noun", gender: "masculine plural" },
        { italian: "I nonni", english: "The grandparents", type: "noun", gender: "masculine plural" },
        { italian: "Il cane", english: "The dog", type: "noun", gender: "masculine" },
        { italian: "Il gatto", english: "The cat", type: "noun", gender: "masculine" },
        { italian: "Il cognato", english: "Brother-in-law", type: "noun", gender: "masculine" },
        { italian: "La cognata", english: "Sister-in-law", type: "noun", gender: "feminine" },
        { italian: "Il marito", english: "Husband", type: "noun", gender: "masculine" },
        { italian: "La moglie", english: "Wife", type: "noun", gender: "feminine" },
        { italian: "Il papà", english: "Dad", type: "noun", gender: "masculine" },
        { italian: "La mamma", english: "Mom", type: "noun", gender: "feminine" },
        { italian: "Il suocero", english: "Father-in-law", type: "noun", gender: "masculine" },
        { italian: "La suocera", english: "Mother-in-law", type: "noun", gender: "feminine" },
        { italian: "Il fidanzato", english: "Boyfriend", type: "noun", gender: "masculine" },
        { italian: "La fidanzata", english: "Girlfriend", type: "noun", gender: "feminine" },
        { italian: "Il bambino", english: "Boy", type: "noun", gender: "masculine" },
        { italian: "La bambina", english: "Girl", type: "noun", gender: "feminine" },
        { italian: "La nipote", english: "Niece/granddaughter", type: "noun", gender: "feminine" },
        { italian: "Il nipote", english: "Nephew/grandson", type: "noun", gender: "masculine" },
        { italian: "Il compleanno", english: "Birthday", type: "noun", gender: "masculine" },
        { italian: "Il matrimonio", english: "Wedding", type: "noun", gender: "masculine" },
        { italian: "Il battesimo", english: "Baptism", type: "noun", gender: "masculine" },
        { italian: "Cappelli", english: "Hair", type: "noun", gender: "masculine plural" },
        { italian: "Occhi", english: "Eyes", type: "noun", gender: "masculine plural" },
        
        // Family questions
        { italian: "Quanti anni ha...?", english: "How old is...?", type: "question", gender: "" },
        { italian: "Come si chiama...?", english: "What is the name of...?", type: "question", gender: "" },
        { italian: "Quante persone hai nella tua famiglia?", english: "How many people do you have in your family?", type: "question", gender: "" },
        { italian: "Che cosa piace fare a...?", english: "What does... like to do?", type: "question", gender: "" },
        
        // Essere verb
        { italian: "Essere", english: "To be", type: "verb", gender: "", conjugation: {
            present: { io: "sono", tu: "sei", lui: "è", noi: "siamo", voi: "siete", loro: "sono" },
            past: { io: "sono stato/a", tu: "sei stato/a", lui: "è stato", noi: "siamo stati/e", voi: "siete stati/e", loro: "sono stati/e" },
            future: { io: "sarò", tu: "sarai", lui: "sarà", noi: "saremo", voi: "sarete", loro: "saranno" }
        }},
        
        // Adjectives
        { italian: "Bello", english: "Beautiful", type: "adjective", gender: "masculine" },
        { italian: "Brutto", english: "Ugly", type: "adjective", gender: "masculine" },
        { italian: "Grande", english: "Big", type: "adjective", gender: "both" },
        { italian: "Piccolo", english: "Small", type: "adjective", gender: "masculine" },
        { italian: "Buono", english: "Good", type: "adjective", gender: "masculine" },
        { italian: "Cattivo", english: "Bad", type: "adjective", gender: "masculine" },
        { italian: "Intelligente", english: "Smart", type: "adjective", gender: "both" },
        { italian: "Stupido", english: "Stupid", type: "adjective", gender: "masculine" },
        { italian: "Grasso", english: "Fat", type: "adjective", gender: "masculine" },
        { italian: "Magro", english: "Thin", type: "adjective", gender: "masculine" },
        { italian: "Vecchio", english: "Old", type: "adjective", gender: "masculine" },
        { italian: "Nuovo", english: "New", type: "adjective", gender: "masculine" },
        { italian: "Giovane", english: "Young", type: "adjective", gender: "both" },
        { italian: "Allegro", english: "Happy", type: "adjective", gender: "masculine" },
        { italian: "Triste", english: "Sad", type: "adjective", gender: "both" },
        { italian: "Alto", english: "Tall", type: "adjective", gender: "masculine" },
        { italian: "Basso", english: "Short", type: "adjective", gender: "masculine" },
        { italian: "Buffo", english: "Funny", type: "adjective", gender: "masculine" },
        { italian: "Simpatico", english: "Nice", type: "adjective", gender: "masculine" },
        { italian: "Antipatico", english: "Mean", type: "adjective", gender: "masculine" },
        { italian: "Sportivo", english: "Sporty", type: "adjective", gender: "masculine" },
        { italian: "Biondo", english: "Blond", type: "adjective", gender: "masculine" },
        { italian: "Bruno", english: "Brunette", type: "adjective", gender: "masculine" },
        { italian: "Anziano", english: "Elderly", type: "adjective", gender: "masculine" },
        { italian: "Atletico", english: "Athletic", type: "adjective", gender: "masculine" },
        { italian: "Avaro", english: "Stingy", type: "adjective", gender: "masculine" },
        { italian: "Calmo", english: "Calm", type: "adjective", gender: "masculine" },
        { italian: "Caro", english: "Expensive", type: "adjective", gender: "masculine" },
        { italian: "Comprensivo", english: "Understanding", type: "adjective", gender: "masculine" },
        { italian: "Facile", english: "Easy", type: "adjective", gender: "both" },
        { italian: "Elegante", english: "Elegant", type: "adjective", gender: "both" },
        { italian: "Generoso", english: "Generous", type: "adjective", gender: "masculine" },
        { italian: "Musculoso", english: "Muscular", type: "adjective", gender: "masculine" },
        { italian: "Paziente", english: "Patient", type: "adjective", gender: "both" },
        { italian: "Pigro", english: "Lazy", type: "adjective", gender: "masculine" },
        { italian: "Serio", english: "Serious", type: "adjective", gender: "masculine" },
        { italian: "Difficile", english: "Difficult", type: "adjective", gender: "both" },
        { italian: "Nervoso", english: "Nervous", type: "adjective", gender: "masculine" },
        { italian: "Stanco", english: "Tired", type: "adjective", gender: "masculine" },
        { italian: "Malato", english: "Sick", type: "adjective", gender: "masculine" },
        { italian: "Carino", english: "Cute", type: "adjective", gender: "masculine" },
        { italian: "Lungo", english: "Long", type: "adjective", gender: "masculine" },
        { italian: "Corto", english: "Short (thing)", type: "adjective", gender: "masculine" },
        { italian: "Gentile", english: "Polite", type: "adjective", gender: "both" }
    ],
    
    clothing: [
        { italian: "I pantaloni", english: "Pants", type: "noun", gender: "masculine plural" },
        { italian: "Il cappotto", english: "Coat", type: "noun", gender: "masculine" },
        { italian: "Il costume da bagno", english: "Bathing suit", type: "noun", gender: "masculine" },
        { italian: "La biancheria intima", english: "Underwear", type: "noun", gender: "feminine" },
        { italian: "La camicia", english: "Shirt", type: "noun", gender: "feminine" },
        { italian: "I calzini", english: "Socks", type: "noun", gender: "masculine plural" },
        { italian: "La giacca", english: "Jacket", type: "noun", gender: "feminine" },
        { italian: "La maglietta", english: "T-shirt", type: "noun", gender: "feminine" },
        { italian: "Il vestito", english: "Dress", type: "noun", gender: "masculine" },
        { italian: "I pantaloncini/I pantaloni corti", english: "Shorts", type: "noun", gender: "masculine plural" },
        { italian: "Il completo", english: "Suit", type: "noun", gender: "masculine" },
        { italian: "La gonna", english: "Skirt", type: "noun", gender: "feminine" },
        { italian: "I sandali", english: "Sandals", type: "noun", gender: "masculine plural" },
        { italian: "Le scarpe", english: "Shoes", type: "noun", gender: "feminine plural" },
        { italian: "Le scarpe da ginnastica", english: "Sneakers", type: "noun", gender: "feminine plural" },
        { italian: "Gli stivali", english: "Boots", type: "noun", gender: "masculine plural" },
        { italian: "I jeans", english: "Jeans", type: "noun", gender: "masculine plural" },
        { italian: "Il maglione", english: "Sweater", type: "noun", gender: "masculine" },
        { italian: "L'impermeabile", english: "Rain coat", type: "noun", gender: "masculine" },
        { italian: "I pigiama", english: "Pajamas", type: "noun", gender: "masculine plural" },
        { italian: "Le infradito", english: "Flip flops", type: "noun", gender: "feminine plural" },
        { italian: "Le pantacalze/I leggings", english: "Tights", type: "noun", gender: "feminine plural" },
        { italian: "La felpa", english: "Sweatshirt", type: "noun", gender: "feminine" },
        { italian: "I boxer", english: "Boxers", type: "noun", gender: "masculine plural" },
        { italian: "Le pantofole", english: "Slippers", type: "noun", gender: "feminine plural" },
        { italian: "Lo smoking", english: "Tuxedo", type: "noun", gender: "masculine" },
        
        // Accessories
        { italian: "Il cappello", english: "Hat", type: "noun", gender: "masculine" },
        { italian: "La cravatta", english: "Tie", type: "noun", gender: "feminine" },
        { italian: "La borsa", english: "Bag", type: "noun", gender: "feminine" },
        { italian: "I guanti", english: "Gloves", type: "noun", gender: "masculine plural" },
        { italian: "Le muffole", english: "Mittens", type: "noun", gender: "feminine plural" },
        { italian: "La sciarpa", english: "Scarf", type: "noun", gender: "feminine" },
        { italian: "Gli occhiali (da sole)", english: "Glasses (sun)", type: "noun", gender: "masculine plural" },
        { italian: "La cintura", english: "Belt", type: "noun", gender: "feminine" },
        { italian: "L'orologio", english: "Watch", type: "noun", gender: "masculine" },
        { italian: "L'ombrello", english: "Umbrella", type: "noun", gender: "masculine" },
        { italian: "La collana", english: "Necklace", type: "noun", gender: "feminine" },
        { italian: "Il braccialetto", english: "Bracelet", type: "noun", gender: "masculine" },
        { italian: "L'anello", english: "Ring", type: "noun", gender: "masculine" },
        { italian: "Gli orecchini", english: "Earrings", type: "noun", gender: "masculine plural" },
        
        // Colors
        { italian: "Giallo", english: "Yellow", type: "color", gender: "masculine" },
        { italian: "Bianco", english: "White", type: "color", gender: "masculine" },
        { italian: "Marrone", english: "Brown", type: "color", gender: "invariable" },
        { italian: "Rosso", english: "Red", type: "color", gender: "masculine" },
        { italian: "Verde", english: "Green", type: "color", gender: "masculine" },
        { italian: "Azzurro/Blu", english: "Blue", type: "color", gender: "masculine" },
        { italian: "Grigio", english: "Grey", type: "color", gender: "masculine" },
        { italian: "Nero", english: "Black", type: "color", gender: "masculine" },
        { italian: "Rosa", english: "Pink", type: "color", gender: "invariable" },
        { italian: "Viola", english: "Purple", type: "color", gender: "invariable" },
        { italian: "Beige", english: "Beige", type: "color", gender: "invariable" },
        { italian: "Arancione", english: "Orange", type: "color", gender: "invariable" },
        
        // Adjectives for clothing
        { italian: "Caro", english: "Expensive", type: "adjective", gender: "masculine" },
        { italian: "Basso", english: "Short/Low", type: "adjective", gender: "masculine" },
        { italian: "Della moda", english: "In fashion", type: "adjective", gender: "both" },
        { italian: "Nuovo", english: "New", type: "adjective", gender: "masculine" },
        { italian: "Elegante", english: "Elegant", type: "adjective", gender: "both" },
        { italian: "Grande", english: "Big", type: "adjective", gender: "both" },
        { italian: "Lungo", english: "Long", type: "adjective", gender: "masculine" },
        { italian: "Sportivo", english: "Sporty", type: "adjective", gender: "masculine" },
        { italian: "Brutto", english: "Ugly", type: "adjective", gender: "masculine" },
        { italian: "Corto", english: "Short", type: "adjective", gender: "masculine" },
        { italian: "Bello", english: "Beautiful", type: "adjective", gender: "masculine" },
        { italian: "Piccolo", english: "Small", type: "adjective", gender: "masculine" },
        { italian: "Comodo", english: "Comfortable", type: "adjective", gender: "masculine" },
        { italian: "Vecchio", english: "Old", type: "adjective", gender: "masculine" },
        { italian: "Scomodo", english: "Uncomfortable", type: "adjective", gender: "masculine" },
        { italian: "Carino", english: "Cute", type: "adjective", gender: "masculine" },
        
        // Shopping verbs
        { italian: "Portare", english: "To wear", type: "verb", gender: "", conjugation: {
            present: { io: "porto", tu: "porti", lui: "porta", noi: "portiamo", voi: "portate", loro: "portano" },
            past: { io: "ho portato", tu: "hai portato", lui: "ha portato", noi: "abbiamo portato", voi: "avete portato", loro: "hanno portato" },
            future: { io: "porterò", tu: "porterai", lui: "porterà", noi: "porteremo", voi: "porterete", loro: "porteranno" }
        }},
        { italian: "Indossare", english: "To wear", type: "verb", gender: "", conjugation: {
            present: { io: "indosso", tu: "indossi", lui: "indossa", noi: "indossiamo", voi: "indossate", loro: "indossano" },
            past: { io: "ho indossato", tu: "hai indossato", lui: "ha indossato", noi: "abbiamo indossato", voi: "avete indossato", loro: "hanno indossato" },
            future: { io: "indosserò", tu: "indosserai", lui: "indosserà", noi: "indosseremo", voi: "indosserete", loro: "indosseranno" }
        }},
        { italian: "Pagare", english: "To pay", type: "verb", gender: "", conjugation: {
            present: { io: "pago", tu: "paghi", lui: "paga", noi: "paghiamo", voi: "pagate", loro: "pagano" },
            past: { io: "ho pagato", tu: "hai pagato", lui: "ha pagato", noi: "abbiamo pagato", voi: "avete pagato", loro: "hanno pagato" },
            future: { io: "pagherò", tu: "pagherai", lui: "pagherà", noi: "pagheremo", voi: "pagherete", loro: "pagheranno" }
        }},
        { italian: "Costare", english: "To cost", type: "verb", gender: "", conjugation: {
            present: { io: "costo", tu: "costi", lui: "costa", noi: "costiamo", voi: "costate", loro: "costano" },
            past: { io: "ho costato", tu: "hai costato", lui: "ha costato", noi: "abbiamo costato", voi: "avete costato", loro: "hanno costato" },
            future: { io: "costerò", tu: "costerai", lui: "costerà", noi: "costeremo", voi: "costerete", loro: "costeranno" }
        }},
        { italian: "Comprare", english: "To buy", type: "verb", gender: "", conjugation: {
            present: { io: "compro", tu: "compri", lui: "compra", noi: "compriamo", voi: "comprate", loro: "comprano" },
            past: { io: "ho comprato", tu: "hai comprato", lui: "ha comprato", noi: "abbiamo comprato", voi: "avete comprato", loro: "hanno comprato" },
            future: { io: "comprerò", tu: "comprerai", lui: "comprerà", noi: "compreremo", voi: "comprerete", loro: "compreranno" }
        }},
        { italian: "Fare la spesa/spese/compere", english: "To go shopping", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Desiderare", english: "To want", type: "verb", gender: "", conjugation: {
            present: { io: "desidero", tu: "desideri", lui: "desidera", noi: "desideriamo", voi: "desiderate", loro: "desiderano" },
            past: { io: "ho desiderato", tu: "hai desiderato", lui: "ha desiderato", noi: "abbiamo desiderato", voi: "avete desiderato", loro: "hanno desiderato" },
            future: { io: "desidererò", tu: "desidererai", lui: "desidererà", noi: "desidereremo", voi: "desidererete", loro: "desidereranno" }
        }},
        { italian: "Cercare", english: "To look for", type: "verb", gender: "", conjugation: {
            present: { io: "cerco", tu: "cerchi", lui: "cerca", noi: "cerchiamo", voi: "cercate", loro: "cercano" },
            past: { io: "ho cercato", tu: "hai cercato", lui: "ha cercato", noi: "abbiamo cercato", voi: "avete cercato", loro: "hanno cercato" },
            future: { io: "cercherò", tu: "cercherai", lui: "cercherà", noi: "cercheremo", voi: "cercherete", loro: "cercheranno" }
        }},
        { italian: "Vendere", english: "To sell", type: "verb", gender: "", conjugation: {
            present: { io: "vendo", tu: "vendi", lui: "vende", noi: "vendiamo", voi: "vendete", loro: "vendono" },
            past: { io: "ho venduto", tu: "hai venduto", lui: "ha venduto", noi: "abbiamo venduto", voi: "avete venduto", loro: "hanno venduto" },
            future: { io: "venderò", tu: "venderai", lui: "venderà", noi: "venderemo", voi: "venderete", loro: "venderanno" }
        }},
        
        // Shopping expressions
        { italian: "Quanto costa?", english: "How much does it cost?", type: "question", gender: "" },
        { italian: "Qual'è il prezzo?", english: "What is the price?", type: "question", gender: "" },
        { italian: "Il prezzo", english: "The price", type: "noun", gender: "masculine" },
        { italian: "Quale misura porta?", english: "Which size do you wear?", type: "question", gender: "" },
        { italian: "La taglia", english: "The size", type: "noun", gender: "feminine" },
        { italian: "La misura", english: "The size", type: "noun", gender: "feminine" },
        { italian: "Mi va bene", english: "It looks good on me", type: "expression", gender: "" },
        { italian: "Non mi va bene", english: "It does not look good on me", type: "expression", gender: "" },
        { italian: "Posso aiutarLa?", english: "Can I help you?", type: "question", gender: "" },
        { italian: "Vuoi andare a fare spese?", english: "Do you want to go shopping?", type: "question", gender: "" },
        { italian: "Che cosa desidera?", english: "What do you want?", type: "question", gender: "" },
        { italian: "Vorrei...", english: "I would like...", type: "expression", gender: "" },
        { italian: "I Saldi/Lo sconto", english: "Discount/Sale", type: "noun", gender: "masculine" },
        { italian: "Como posso pagare?", english: "How can I pay?", type: "question", gender: "" },
        { italian: "Accettare le carte di credito?", english: "Do you accept credit cards?", type: "question", gender: "" },
        { italian: "Va bene, così", english: "That's fine, nothing else", type: "expression", gender: "" },
        { italian: "La carta di credito", english: "Credit card", type: "noun", gender: "feminine" },
        { italian: "Il dollaro/La lira/Euro", english: "Dollar/Lira/Euro", type: "noun", gender: "masculine/feminine/masculine" },
        { italian: "Devo comprare...", english: "I must buy...", type: "expression", gender: "" },
        { italian: "I vestiti alla moda", english: "Clothing in style", type: "noun", gender: "masculine plural" },
        { italian: "I vestiti fuori di moda", english: "Clothing out of style", type: "noun", gender: "masculine plural" },
        { italian: "Mi dispiace", english: "I'm sorry", type: "expression", gender: "" },
        { italian: "Mi fa un po' di sconto?", english: "Will you give me a discount?", type: "question", gender: "" },
        { italian: "Il cliente", english: "The client", type: "noun", gender: "masculine" },
        { italian: "Il commesso", english: "Salesperson", type: "noun", gender: "masculine" },
        { italian: "Il regalo", english: "Gift", type: "noun", gender: "masculine" },
        { italian: "La vendita (sottoprezzo)", english: "The sale", type: "noun", gender: "feminine" },
        { italian: "Il negozio", english: "The store", type: "noun", gender: "masculine" },
        { italian: "Il mercato", english: "The market", type: "noun", gender: "masculine" },
        { italian: "Il centro commerciale", english: "The mall", type: "noun", gender: "masculine" },
        { italian: "Il grande magazzino/I grandi magazzini", english: "The big department store", type: "noun", gender: "masculine" }
    ],
    
    community: [
        // Places
        { italian: "L'aeroporto", english: "Airport", type: "place", gender: "masculine" },
        { italian: "La banca", english: "Bank", type: "place", gender: "feminine" },
        { italian: "La biblioteca", english: "Library", type: "place", gender: "feminine" },
        { italian: "Il campo", english: "Sports field", type: "place", gender: "masculine" },
        { italian: "La chiesa", english: "Church", type: "place", gender: "feminine" },
        { italian: "Il cinema", english: "Movie theater", type: "place", gender: "masculine" },
        { italian: "Il museo", english: "Museum", type: "place", gender: "masculine" },
        { italian: "Il negozio", english: "Store", type: "place", gender: "masculine" },
        { italian: "L'ospedale", english: "Hospital", type: "place", gender: "masculine" },
        { italian: "Il parco", english: "Park", type: "place", gender: "masculine" },
        { italian: "La piazza", english: "Town square", type: "place", gender: "feminine" },
        { italian: "La piscina", english: "Pool", type: "place", gender: "feminine" },
        { italian: "Il ristorante", english: "Restaurant", type: "place", gender: "masculine" },
        { italian: "La scuola", english: "School", type: "place", gender: "feminine" },
        { italian: "La spiaggia", english: "Beach", type: "place", gender: "feminine" },
        { italian: "Lo stadio", english: "Stadium", type: "place", gender: "masculine" },
        { italian: "La stazione", english: "Station", type: "place", gender: "feminine" },
        { italian: "Il teatro", english: "Theater", type: "place", gender: "masculine" },
        { italian: "L'ufficio postale", english: "Post office", type: "place", gender: "masculine" },
        { italian: "L'università", english: "University", type: "place", gender: "feminine" },
        { italian: "La strada", english: "Street", type: "place", gender: "feminine" },
        { italian: "La via", english: "Avenue", type: "place", gender: "feminine" },
        { italian: "La fermata", english: "Stop", type: "place", gender: "feminine" },
        { italian: "L'albergo", english: "Hotel", type: "place", gender: "masculine" },
        { italian: "Il centro", english: "Center", type: "place", gender: "masculine" },
        { italian: "Il quartiere", english: "Neighborhood", type: "place", gender: "masculine" },
        { italian: "Il Municipio", english: "City hall", type: "place", gender: "masculine" },
        
        // Stores
        { italian: "Il supermercato", english: "Supermarket", type: "store", gender: "masculine" },
        { italian: "Il mercato", english: "Market", type: "store", gender: "masculine" },
        { italian: "La panetteria", english: "Bakery", type: "store", gender: "feminine" },
        { italian: "La gelateria", english: "Ice cream shop", type: "store", gender: "feminine" },
        { italian: "La macelleria", english: "Butcher", type: "store", gender: "feminine" },
        { italian: "La pasticceria", english: "Pastry shop", type: "store", gender: "feminine" },
        { italian: "Il negozio di abbigliamento", english: "Clothing store", type: "store", gender: "masculine" },
        { italian: "La libreria", english: "Bookstore", type: "store", gender: "feminine" },
        { italian: "La farmacia", english: "Pharmacy", type: "store", gender: "feminine" },
        { italian: "Il fruttivendolo", english: "Fruit & vegetable store", type: "store", gender: "masculine" },
        { italian: "La latteria", english: "Dairy store", type: "store", gender: "feminine" },
        
        // Verbs
        { italian: "Arrivare", english: "To arrive", type: "verb", gender: "", conjugation: {
            present: { io: "arrivo", tu: "arrivi", lui: "arriva", noi: "arriviamo", voi: "arrivate", loro: "arrivano" },
            past: { io: "sono arrivato/a", tu: "sei arrivato/a", lui: "è arrivato", noi: "siamo arrivati/e", voi: "siete arrivati/e", loro: "sono arrivati/e" },
            future: { io: "arriverò", tu: "arriverai", lui: "arriverà", noi: "arriveremo", voi: "arriverete", loro: "arriveranno" }
        }},
        { italian: "Attraversare", english: "To cross", type: "verb", gender: "", conjugation: {
            present: { io: "attraverso", tu: "attraversi", lui: "attraversa", noi: "attraversiamo", voi: "attraversate", loro: "attraversano" },
            past: { io: "ho attraversato", tu: "hai attraversato", lui: "ha attraversato", noi: "abbiamo attraversato", voi: "avete attraversato", loro: "hanno attraversato" },
            future: { io: "attraverserò", tu: "attraverserai", lui: "attraverserà", noi: "attraverseremo", voi: "attraverserete", loro: "attraverseranno" }
        }},
        { italian: "Camminare", english: "To walk", type: "verb", gender: "", conjugation: {
            present: { io: "cammino", tu: "cammini", lui: "cammina", noi: "camminiamo", voi: "camminate", loro: "camminano" },
            past: { io: "ho camminato", tu: "hai camminato", lui: "ha camminato", noi: "abbiamo camminato", voi: "avete camminato", loro: "hanno camminato" },
            future: { io: "camminerò", tu: "camminerai", lui: "camminerà", noi: "cammineremo", voi: "camminerete", loro: "cammineranno" }
        }},
        { italian: "Girare", english: "To turn", type: "verb", gender: "", conjugation: {
            present: { io: "giro", tu: "giri", lui: "gira", noi: "giriamo", voi: "girate", loro: "girano" },
            past: { io: "ho girato", tu: "hai girato", lui: "ha girato", noi: "abbiamo girato", voi: "avete girato", loro: "hanno girato" },
            future: { io: "girerò", tu: "girerai", lui: "girerà", noi: "gireremo", voi: "girerete", loro: "gireranno" }
        }},
        { italian: "Guidare", english: "To drive", type: "verb", gender: "", conjugation: {
            present: { io: "guido", tu: "guidi", lui: "guida", noi: "guidiamo", voi: "guidate", loro: "guidano" },
            past: { io: "ho guidato", tu: "hai guidato", lui: "ha guidato", noi: "abbiamo guidato", voi: "avete guidato", loro: "hanno guidato" },
            future: { io: "guiderò", tu: "guiderai", lui: "guiderà", noi: "guideremo", voi: "guiderete", loro: "guideranno" }
        }},
        { italian: "Fare una passeggiata", english: "To take a walk", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Viaggiare", english: "To travel", type: "verb", gender: "", conjugation: {
            present: { io: "viaggio", tu: "viaggi", lui: "viaggia", noi: "viaggiamo", voi: "viaggiate", loro: "viaggiano" },
            past: { io: "ho viaggiato", tu: "hai viaggiato", lui: "ha viaggiato", noi: "abbiamo viaggiato", voi: "avete viaggiato", loro: "hanno viaggiato" },
            future: { io: "viaggerò", tu: "viaggerai", lui: "viaggerà", noi: "viaggeremo", voi: "viaggerete", loro: "viaggeranno" }
        }},
        { italian: "Montare in bici", english: "To ride a bike", type: "verb", gender: "", conjugation: {
            present: { io: "monto", tu: "monti", lui: "monta", noi: "montiamo", voi: "montate", loro: "montano" },
            past: { io: "ho montato", tu: "hai montato", lui: "ha montato", noi: "abbiamo montato", voi: "avete montato", loro: "hanno montato" },
            future: { io: "monterò", tu: "monterai", lui: "monterà", noi: "monteremo", voi: "monterete", loro: "monteranno" }
        }},
        { italian: "Fare spese", english: "To go shopping", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Andare", english: "To go", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        
        // Transportation
        { italian: "Il treno", english: "Train", type: "transportation", gender: "masculine" },
        { italian: "La metropolitana (la metro)", english: "Subway", type: "transportation", gender: "feminine" },
        { italian: "L'autobus", english: "Bus", type: "transportation", gender: "masculine" },
        { italian: "L'aereo", english: "Airplane", type: "transportation", gender: "masculine" },
        { italian: "Il tassì (il taxi)", english: "Taxi", type: "transportation", gender: "masculine" },
        { italian: "La bicicletta", english: "Bicycle", type: "transportation", gender: "feminine" },
        { italian: "La motocicletta (la moto)", english: "Motorcycle", type: "transportation", gender: "feminine" },
        { italian: "La macchina", english: "Car", type: "transportation", gender: "feminine" },
        { italian: "La barca", english: "Boat", type: "transportation", gender: "feminine" },
        { italian: "La nave", english: "Ship", type: "transportation", gender: "feminine" },
        { italian: "A piedi", english: "By foot", type: "transportation", gender: "" },
        
        // Directions
        { italian: "Sinistra", english: "Left", type: "direction", gender: "feminine" },
        { italian: "Destra", english: "Right", type: "direction", gender: "feminine" },
        { italian: "Andare dritto", english: "Go straight", type: "direction", gender: "" },
        { italian: "Lontano", english: "Far", type: "direction", gender: "masculine" },
        { italian: "Accanto", english: "Next to", type: "direction", gender: "" },
        { italian: "Davanti", english: "In front", type: "direction", gender: "" },
        { italian: "Dietro", english: "Behind", type: "direction", gender: "" },
        { italian: "Sopra", english: "Above", type: "direction", gender: "" },
        { italian: "Sotto", english: "Below", type: "direction", gender: "" },
        { italian: "Vicino", english: "Near", type: "direction", gender: "masculine" },
        
        // Expressions
        { italian: "Dov'è...?", english: "Where is...?", type: "question", gender: "" },
        { italian: "Dove sono...?", english: "Where are...?", type: "question", gender: "" },
        { italian: "Scusa/Scusi", english: "Excuse me", type: "expression", gender: "" },
        { italian: "Va' dritto!", english: "Go straight!", type: "expression", gender: "" },
        { italian: "Per piacere/Per favore", english: "Please", type: "expression", gender: "" },
        { italian: "È aperto", english: "It's open", type: "expression", gender: "" },
        { italian: "È chiuso", english: "It's closed", type: "expression", gender: "" },
        { italian: "Con", english: "With", type: "preposition", gender: "" },
        { italian: "Da... a...", english: "From... to...", type: "preposition", gender: "" },
        { italian: "Grazie mille!", english: "Thank you very much!", type: "expression", gender: "" },
        { italian: "Dove vai?", english: "Where are you going?", type: "question", gender: "" },
        { italian: "Con chi vai?", english: "With whom are you going?", type: "question", gender: "" },
        { italian: "Quando vai?", english: "When are you going?", type: "question", gender: "" },
        { italian: "Come faccio per andare a...?", english: "How do I get to...?", type: "question", gender: "" },
        
        // Question Words
        { italian: "Chi", english: "Who", type: "question word", gender: "" },
        { italian: "Che/Che Cosa", english: "What", type: "question word", gender: "" },
        { italian: "Quando", english: "When", type: "question word", gender: "" },
        { italian: "Dove", english: "Where", type: "question word", gender: "" },
        { italian: "Come", english: "How", type: "question word", gender: "" },
        { italian: "Quanti", english: "How Many", type: "question word", gender: "" },
        { italian: "Perché", english: "Why/Because", type: "question word", gender: "" },
        { italian: "Quale", english: "Which", type: "question word", gender: "" },
        { italian: "Di Dove", english: "From Where", type: "question word", gender: "" },
        { italian: "Con Chi", english: "With Whom", type: "question word", gender: "" }
    ],
    
    food: [
        // Meals
        { italian: "La prima colazione", english: "Breakfast", type: "meal", gender: "feminine" },
        { italian: "Il pranzo", english: "Lunch", type: "meal", gender: "masculine" },
        { italian: "La cena", english: "Dinner", type: "meal", gender: "feminine" },
        { italian: "Lo spuntino/La merenda", english: "Snack", type: "meal", gender: "masculine/feminine" },
        
        // Courses
        { italian: "L'antipasto", english: "Appetizer", type: "course", gender: "masculine" },
        { italian: "Il primo piatto", english: "First course", type: "course", gender: "masculine" },
        { italian: "Il secondo piatto", english: "Second course/Main course", type: "course", gender: "masculine" },
        { italian: "Il contorno", english: "Side dish", type: "course", gender: "masculine" },
        { italian: "Il dolce", english: "Dessert", type: "course", gender: "masculine" },
        
        // Tableware
        { italian: "Il piatto", english: "Dish", type: "tableware", gender: "masculine" },
        { italian: "Il cucchiaio", english: "Spoon", type: "tableware", gender: "masculine" },
        { italian: "La tazza", english: "Cup", type: "tableware", gender: "feminine" },
        { italian: "La forchetta", english: "Fork", type: "tableware", gender: "feminine" },
        { italian: "Il bicchiere", english: "Glass", type: "tableware", gender: "masculine" },
        { italian: "Il coltello", english: "Knife", type: "tableware", gender: "masculine" },
        { italian: "La tavola", english: "Table", type: "tableware", gender: "feminine" },
        { italian: "Il tovagliolo", english: "Napkin", type: "tableware", gender: "masculine" },
        { italian: "La tovaglia", english: "Tablecloth", type: "tableware", gender: "feminine" },
        { italian: "Il cucchiaino", english: "Teaspoon", type: "tableware", gender: "masculine" },
        
        // Fruit
        { italian: "La frutta", english: "The fruit", type: "food category", gender: "feminine" },
        { italian: "La mela", english: "Apple", type: "fruit", gender: "feminine" },
        { italian: "La pera", english: "Pear", type: "fruit", gender: "feminine" },
        { italian: "I pomodori", english: "Tomatoes", type: "fruit", gender: "masculine plural" },
        { italian: "L'arancia", english: "Orange", type: "fruit", gender: "feminine" },
        { italian: "Le fragole", english: "Strawberries", type: "fruit", gender: "feminine plural" },
        { italian: "L'uva", english: "Grapes", type: "fruit", gender: "feminine" },
        { italian: "Il pompelmo", english: "Grapefruit", type: "fruit", gender: "masculine" },
        { italian: "Il melone", english: "Melon", type: "fruit", gender: "masculine" },
        { italian: "La banana", english: "Banana", type: "fruit", gender: "feminine" },
        { italian: "Il limone", english: "Lemon", type: "fruit", gender: "masculine" },
        
        // Vegetables
        { italian: "Le verdure e legumi", english: "Vegetables & grains", type: "food category", gender: "feminine plural" },
        { italian: "La lattuga", english: "Lettuce", type: "vegetable", gender: "feminine" },
        { italian: "Le carote", english: "Carrots", type: "vegetable", gender: "feminine plural" },
        { italian: "La cipolla", english: "Onion", type: "vegetable", gender: "feminine" },
        { italian: "Le patate", english: "Potatoes", type: "vegetable", gender: "feminine plural" },
        { italian: "I fagioli", english: "Beans", type: "vegetable", gender: "masculine plural" },
        { italian: "Il riso", english: "Rice", type: "grain", gender: "masculine" },
        { italian: "I piselli", english: "Peas", type: "vegetable", gender: "masculine plural" },
        { italian: "I funghi", english: "Mushrooms", type: "vegetable", gender: "masculine plural" },
        { italian: "I fagiolini", english: "Green beans", type: "vegetable", gender: "masculine plural" },
        { italian: "Il broccoli", english: "Broccoli", type: "vegetable", gender: "masculine" },
        
        // Meat and Fish
        { italian: "Il pollo", english: "Chicken", type: "meat", gender: "masculine" },
        { italian: "La bistecca", english: "Steak", type: "meat", gender: "feminine" },
        { italian: "Il pesce", english: "Fish", type: "seafood", gender: "masculine" },
        { italian: "Il prosciutto", english: "Ham", type: "meat", gender: "masculine" },
        { italian: "I gamberi", english: "Shrimp", type: "seafood", gender: "masculine plural" },
        { italian: "Il maiale", english: "Pork", type: "meat", gender: "masculine" },
        { italian: "Il vitello", english: "Veal", type: "meat", gender: "masculine" },
        { italian: "Il tonno", english: "Tuna", type: "seafood", gender: "masculine" },
        { italian: "Il manzo", english: "Beef", type: "meat", gender: "masculine" },
        { italian: "La langosta", english: "Lobster", type: "seafood", gender: "feminine" },
        
        // Dairy
        { italian: "Il latte", english: "Milk", type: "dairy", gender: "masculine" },
        { italian: "Il burro", english: "Butter", type: "dairy", gender: "masculine" },
        { italian: "Il formaggio", english: "Cheese", type: "dairy", gender: "masculine" },
        { italian: "Le uova", english: "Eggs", type: "dairy", gender: "feminine plural" },
        
        // Sweets
        { italian: "I dolci", english: "The sweets", type: "food category", gender: "masculine plural" },
        { italian: "Il gelato", english: "Ice cream", type: "dessert", gender: "masculine" },
        { italian: "La crostata", english: "Pie", type: "dessert", gender: "feminine" },
        { italian: "La torta", english: "Cake", type: "dessert", gender: "feminine" },
        { italian: "I biscotti", english: "Cookies", type: "dessert", gender: "masculine plural" },
        { italian: "Le paste", english: "Pastries", type: "dessert", gender: "feminine plural" },
        
        // Drinks
        { italian: "Le bevande/Le bibite", english: "Drinks", type: "food category", gender: "feminine plural" },
        { italian: "L'acqua (minerale)", english: "Water (mineral)", type: "drink", gender: "feminine" },
        { italian: "Acqua gasata", english: "Carbonated water", type: "drink", gender: "feminine" },
        { italian: "Acqua naturale", english: "Still water", type: "drink", gender: "feminine" },
        { italian: "Succo di frutta", english: "Fruit juice", type: "drink", gender: "masculine" },
        { italian: "Succo d'arancia", english: "Orange juice", type: "drink", gender: "masculine" },
        { italian: "Tè", english: "Tea", type: "drink", gender: "masculine" },
        { italian: "Cappuccino", english: "Cappuccino", type: "drink", gender: "masculine" },
        { italian: "Espresso", english: "Espresso", type: "drink", gender: "masculine" },
        { italian: "Caffè", english: "Coffee", type: "drink", gender: "masculine" },
        { italian: "Vino", english: "Wine", type: "drink", gender: "masculine" },
        { italian: "Limonata", english: "Lemonade", type: "drink", gender: "feminine" },
        { italian: "La birra", english: "Beer", type: "drink", gender: "feminine" },
        { italian: "Aranciata", english: "Orange soda", type: "drink", gender: "feminine" },
        { italian: "La gassosa", english: "Soda", type: "drink", gender: "feminine" },
        
        // Other Food
        { italian: "Il tramezzino", english: "Sandwich", type: "food", gender: "masculine" },
        { italian: "Il panino", english: "Hero/Sub", type: "food", gender: "masculine" },
        { italian: "L'insalata", english: "Salad", type: "food", gender: "feminine" },
        { italian: "Il risotto", english: "Rice dish", type: "food", gender: "masculine" },
        { italian: "Il minestrone", english: "Vegetable soup", type: "food", gender: "masculine" },
        { italian: "La minestra", english: "Soup", type: "food", gender: "feminine" },
        { italian: "Salumi misti", english: "Assorted cold cuts", type: "food", gender: "masculine plural" },
        
        // Restaurant
        { italian: "Il cameriere", english: "Waiter", type: "restaurant", gender: "masculine" },
        { italian: "Il conto", english: "Bill", type: "restaurant", gender: "masculine" },
        { italian: "La mancia", english: "Tip", type: "restaurant", gender: "feminine" },
        { italian: "Il coperto", english: "Cover charge", type: "restaurant", gender: "masculine" },
        
        // Condiments
        { italian: "Lo zucchero", english: "Sugar", type: "condiment", gender: "masculine" },
        { italian: "Sale e pepe", english: "Salt & pepper", type: "condiment", gender: "masculine" },
        { italian: "Olio e aceto", english: "Oil & vinegar", type: "condiment", gender: "masculine" },
        
        // Food Activities
        { italian: "Cucinare", english: "To cook", type: "verb", gender: "", conjugation: {
            present: { io: "cucino", tu: "cucini", lui: "cucina", noi: "cuciniamo", voi: "cucinate", loro: "cucinano" },
            past: { io: "ho cucinato", tu: "hai cucinato", lui: "ha cucinato", noi: "abbiamo cucinato", voi: "avete cucinato", loro: "hanno cucinato" },
            future: { io: "cucinerò", tu: "cucinerai", lui: "cucinerà", noi: "cucineremo", voi: "cucinerete", loro: "cucineranno" }
        }},
        { italian: "Mangiare", english: "To eat", type: "verb", gender: "", conjugation: {
            present: { io: "mangio", tu: "mangi", lui: "mangia", noi: "mangiamo", voi: "mangiate", loro: "mangiano" },
            past: { io: "ho mangiato", tu: "hai mangiato", lui: "ha mangiato", noi: "abbiamo mangiato", voi: "avete mangiato", loro: "hanno mangiato" },
            future: { io: "mangerò", tu: "mangerai", lui: "mangerà", noi: "mangeremo", voi: "mangerete", loro: "mangeranno" }
        }},
        { italian: "Bere", english: "To drink", type: "verb", gender: "", conjugation: {
            present: { io: "bevo", tu: "bevi", lui: "beve", noi: "beviamo", voi: "bevete", loro: "bevono" },
            past: { io: "ho bevuto", tu: "hai bevuto", lui: "ha bevuto", noi: "abbiamo bevuto", voi: "avete bevuto", loro: "hanno bevuto" },
            future: { io: "berrò", tu: "berrai", lui: "berrà", noi: "berremo", voi: "berrete", loro: "berranno" }
        }},
        { italian: "Ordinare", english: "To order", type: "verb", gender: "", conjugation: {
            present: { io: "ordino", tu: "ordini", lui: "ordina", noi: "ordiniamo", voi: "ordinate", loro: "ordinano" },
            past: { io: "ho ordinato", tu: "hai ordinato", lui: "ha ordinato", noi: "abbiamo ordinato", voi: "avete ordinato", loro: "hanno ordinato" },
            future: { io: "ordinerò", tu: "ordinerai", lui: "ordinerà", noi: "ordineremo", voi: "ordinerete", loro: "ordineranno" }
        }},
        { italian: "Assaggiare", english: "To try (dish)", type: "verb", gender: "", conjugation: {
            present: { io: "assaggio", tu: "assaggi", lui: "assaggia", noi: "assaggiamo", voi: "assaggiate", loro: "assaggiano" },
            past: { io: "ho assaggiato", tu: "hai assaggiato", lui: "ha assaggiato", noi: "abbiamo assaggiato", voi: "avete assaggiato", loro: "hanno assaggiato" },
            future: { io: "assaggerò", tu: "assaggerai", lui: "assaggerà", noi: "assaggeremo", voi: "assaggerete", loro: "assaggeranno" }
        }},
        { italian: "Volere", english: "To want", type: "verb", gender: "", conjugation: {
            present: { io: "voglio", tu: "vuoi", lui: "vuole", noi: "vogliamo", voi: "volete", loro: "vogliono" },
            past: { io: "ho voluto", tu: "hai voluto", lui: "ha voluto", noi: "abbiamo voluto", voi: "avete voluto", loro: "hanno voluto" },
            future: { io: "vorrò", tu: "vorrai", lui: "vorrà", noi: "vorremo", voi: "vorrete", loro: "vorranno" }
        }},
        { italian: "Vorrei", english: "I would want", type: "verb", gender: "" },
        { italian: "Pagare", english: "To pay", type: "verb", gender: "", conjugation: {
            present: { io: "pago", tu: "paghi", lui: "paga", noi: "paghiamo", voi: "pagate", loro: "pagano" },
            past: { io: "ho pagato", tu: "hai pagato", lui: "ha pagato", noi: "abbiamo pagato", voi: "avete pagato", loro: "hanno pagato" },
            future: { io: "pagherò", tu: "pagherai", lui: "pagherà", noi: "pagheremo", voi: "pagherete", loro: "pagheranno" }
        }},
        { italian: "Tagliare", english: "To cut", type: "verb", gender: "", conjugation: {
            present: { io: "taglio", tu: "tagli", lui: "taglia", noi: "tagliamo", voi: "tagliate", loro: "tagliano" },
            past: { io: "ho tagliato", tu: "hai tagliato", lui: "ha tagliato", noi: "abbiamo tagliato", voi: "avete tagliato", loro: "hanno tagliato" },
            future: { io: "taglierò", tu: "taglierai", lui: "taglierà", noi: "taglieremo", voi: "taglierete", loro: "taglieranno" }
        }},
        { italian: "Mescolare", english: "To mix", type: "verb", gender: "", conjugation: {
            present: { io: "mescolo", tu: "mescoli", lui: "mescola", noi: "mescoliamo", voi: "mescolate", loro: "mescolano" },
            past: { io: "ho mescolato", tu: "hai mescolato", lui: "ha mescolato", noi: "abbiamo mescolato", voi: "avete mescolato", loro: "hanno mescolato" },
            future: { io: "mescolerò", tu: "mescolerai", lui: "mescolerà", noi: "mescoleremo", voi: "mescolerete", loro: "mescoleranno" }
        }},
        { italian: "Aggiungere", english: "To add", type: "verb", gender: "", conjugation: {
            present: { io: "aggiungo", tu: "aggiungi", lui: "aggiunge", noi: "aggiungiamo", voi: "aggiungete", loro: "aggiungono" },
            past: { io: "ho aggiunto", tu: "hai aggiunto", lui: "ha aggiunto", noi: "abbiamo aggiunto", voi: "avete aggiunto", loro: "hanno aggiunto" },
            future: { io: "aggiungerò", tu: "aggiungerai", lui: "aggiungerà", noi: "aggiungeremo", voi: "aggiungerete", loro: "aggiungeranno" }
        }},
        { italian: "Prendere", english: "To take", type: "verb", gender: "", conjugation: {
            present: { io: "prendo", tu: "prendi", lui: "prende", noi: "prendiamo", voi: "prendete", loro: "prendono" },
            past: { io: "ho preso", tu: "hai preso", lui: "ha preso", noi: "abbiamo preso", voi: "avete preso", loro: "hanno preso" },
            future: { io: "prenderò", tu: "prenderai", lui: "prenderà", noi: "prenderemo", voi: "prenderete", loro: "prenderanno" }
        }},
        { italian: "Friggere", english: "To fry", type: "verb", gender: "", conjugation: {
            present: { io: "friggo", tu: "friggi", lui: "frigge", noi: "friggiamo", voi: "friggete", loro: "friggono" },
            past: { io: "ho fritto", tu: "hai fritto", lui: "ha fritto", noi: "abbiamo fritto", voi: "avete fritto", loro: "hanno fritto" },
            future: { io: "friggerò", tu: "friggerai", lui: "friggerà", noi: "friggeremo", voi: "friggerete", loro: "friggeranno" }
        }},
        { italian: "Servire", english: "To serve", type: "verb", gender: "", conjugation: {
            present: { io: "servo", tu: "servi", lui: "serve", noi: "serviamo", voi: "servite", loro: "servono" },
            past: { io: "ho servito", tu: "hai servito", lui: "ha servito", noi: "abbiamo servito", voi: "avete servito", loro: "hanno servito" },
            future: { io: "servirò", tu: "servirai", lui: "servirà", noi: "serviremo", voi: "servirete", loro: "serviranno" }
        }},
        { italian: "Preparare", english: "To prepare", type: "verb", gender: "", conjugation: {
            present: { io: "preparo", tu: "prepari", lui: "prepara", noi: "prepariamo", voi: "preparate", loro: "preparano" },
            past: { io: "ho preparato", tu: "hai preparato", lui: "ha preparato", noi: "abbiamo preparato", voi: "avete preparato", loro: "hanno preparato" },
            future: { io: "preparerò", tu: "preparerai", lui: "preparerà", noi: "prepareremo", voi: "preparerete", loro: "prepareranno" }
        }},
        
        // Food Adjectives
        { italian: "Delizioso", english: "Delicious", type: "adjective", gender: "masculine" },
        { italian: "Caldo", english: "Hot", type: "adjective", gender: "masculine" },
        { italian: "Freddo", english: "Cold", type: "adjective", gender: "masculine" },
        { italian: "Salato", english: "Salty", type: "adjective", gender: "masculine" },
        { italian: "Disgustoso", english: "Disgusting", type: "adjective", gender: "masculine" },
        { italian: "Arrosto", english: "Roasted", type: "adjective", gender: "masculine" },
        { italian: "Alla griglia", english: "Grilled", type: "adjective", gender: "feminine" },
        { italian: "Fritto", english: "Fried", type: "adjective", gender: "masculine" },
        { italian: "Piccante", english: "Spicy", type: "adjective", gender: "both" },
        { italian: "Amaro", english: "Bitter", type: "adjective", gender: "masculine" },
        { italian: "Agro", english: "Sour", type: "adjective", gender: "masculine" },
        { italian: "Pulito", english: "Clean", type: "adjective", gender: "masculine" },
        { italian: "Frizzante", english: "Bubbly", type: "adjective", gender: "both" },
        { italian: "Sporco", english: "Dirty", type: "adjective", gender: "masculine" },
        { italian: "Fresco", english: "Fresh", type: "adjective", gender: "masculine" },
        { italian: "Tenero", english: "Tender", type: "adjective", gender: "masculine" },
        { italian: "Duro", english: "Hard", type: "adjective", gender: "masculine" },
        { italian: "Vecchio", english: "Old", type: "adjective", gender: "masculine" },
        { italian: "Fa schifo", english: "It is disgusting", type: "expression", gender: "" },
        { italian: "Saporito", english: "Tasty", type: "adjective", gender: "masculine" },
        
        // Food Expressions
        { italian: "Quanto costa", english: "How much does it cost?", type: "question", gender: "" },
        { italian: "Come posso pagare?", english: "How can I pay?", type: "question", gender: "" },
        { italian: "Li piace?", english: "Do you like it?", type: "question", gender: "" },
        { italian: "I piatti del giorno", english: "Dish of the day", type: "expression", gender: "masculine plural" },
        { italian: "Buon appetito", english: "Enjoy your meal", type: "expression", gender: "" }
    ],
    
    leisure: [
        // Activities
        { italian: "Leggere", english: "To read", type: "verb", gender: "", conjugation: {
            present: { io: "leggo", tu: "leggi", lui: "legge", noi: "leggiamo", voi: "leggete", loro: "leggono" },
            past: { io: "ho letto", tu: "hai letto", lui: "ha letto", noi: "abbiamo letto", voi: "avete letto", loro: "hanno letto" },
            future: { io: "leggerò", tu: "leggerai", lui: "leggerà", noi: "leggeremo", voi: "leggerete", loro: "leggeranno" }
        }},
        { italian: "Praticare", english: "To practice", type: "verb", gender: "", conjugation: {
            present: { io: "pratico", tu: "pratichi", lui: "pratica", noi: "pratichiamo", voi: "praticate", loro: "praticano" },
            past: { io: "ho praticato", tu: "hai praticato", lui: "ha praticato", noi: "abbiamo praticato", voi: "avete praticato", loro: "hanno praticato" },
            future: { io: "praticherò", tu: "praticherai", lui: "praticherà", noi: "praticheremo", voi: "praticherete", loro: "praticheranno" }
        }},
        { italian: "Viaggiare", english: "To travel", type: "verb", gender: "", conjugation: {
            present: { io: "viaggio", tu: "viaggi", lui: "viaggia", noi: "viaggiamo", voi: "viaggiate", loro: "viaggiano" },
            past: { io: "ho viaggiato", tu: "hai viaggiato", lui: "ha viaggiato", noi: "abbiamo viaggiato", voi: "avete viaggiato", loro: "hanno viaggiato" },
            future: { io: "viaggerò", tu: "viaggerai", lui: "viaggerà", noi: "viaggeremo", voi: "viaggerete", loro: "viaggeranno" }
        }},
        { italian: "Ballare", english: "To dance", type: "verb", gender: "", conjugation: {
            present: { io: "ballo", tu: "balli", lui: "balla", noi: "balliamo", voi: "ballate", loro: "ballano" },
            past: { io: "ho ballato", tu: "hai ballato", lui: "ha ballato", noi: "abbiamo ballato", voi: "avete ballato", loro: "hanno ballato" },
            future: { io: "ballerò", tu: "ballerai", lui: "ballerà", noi: "balleremo", voi: "ballerete", loro: "balleranno" }
        }},
        { italian: "Nuotare", english: "To swim", type: "verb", gender: "", conjugation: {
            present: { io: "nuoto", tu: "nuoti", lui: "nuota", noi: "nuotiamo", voi: "nuotate", loro: "nuotano" },
            past: { io: "ho nuotato", tu: "hai nuotato", lui: "ha nuotato", noi: "abbiamo nuotato", voi: "avete nuotato", loro: "hanno nuotato" },
            future: { io: "nuoterò", tu: "nuoterai", lui: "nuoterà", noi: "nuoteremo", voi: "nuoterete", loro: "nuoteranno" }
        }},
        { italian: "Sciare", english: "To ski", type: "verb", gender: "", conjugation: {
            present: { io: "scio", tu: "scii", lui: "scia", noi: "sciamo", voi: "sciate", loro: "sciano" },
            past: { io: "ho sciato", tu: "hai sciato", lui: "ha sciato", noi: "abbiamo sciato", voi: "avete sciato", loro: "hanno sciato" },
            future: { io: "scierò", tu: "scierai", lui: "scierà", noi: "scieremo", voi: "scierete", loro: "scieranno" }
        }},
        { italian: "Cantare", english: "To sing", type: "verb", gender: "", conjugation: {
            present: { io: "canto", tu: "canti", lui: "canta", noi: "cantiamo", voi: "cantate", loro: "cantano" },
            past: { io: "ho cantato", tu: "hai cantato", lui: "ha cantato", noi: "abbiamo cantato", voi: "avete cantato", loro: "hanno cantato" },
            future: { io: "canterò", tu: "canterai", lui: "canterà", noi: "canteremo", voi: "canterete", loro: "canteranno" }
        }},
        { italian: "Correre", english: "To run", type: "verb", gender: "", conjugation: {
            present: { io: "corro", tu: "corri", lui: "corre", noi: "corriamo", voi: "correte", loro: "corrono" },
            past: { io: "ho corso", tu: "hai corso", lui: "ha corso", noi: "abbiamo corso", voi: "avete corso", loro: "hanno corso" },
            future: { io: "correrò", tu: "correrai", lui: "correrà", noi: "correremo", voi: "correrete", loro: "correranno" }
        }},
        { italian: "Guardare televisione", english: "To watch TV", type: "verb", gender: "", conjugation: {
            present: { io: "guardo", tu: "guardi", lui: "guarda", noi: "guardiamo", voi: "guardate", loro: "guardano" },
            past: { io: "ho guardato", tu: "hai guardato", lui: "ha guardato", noi: "abbiamo guardato", voi: "avete guardato", loro: "hanno guardato" },
            future: { io: "guarderò", tu: "guarderai", lui: "guarderà", noi: "guarderemo", voi: "guarderete", loro: "guarderanno" }
        }},
        { italian: "Suonare", english: "To play (music)", type: "verb", gender: "", conjugation: {
            present: { io: "suono", tu: "suoni", lui: "suona", noi: "suoniamo", voi: "suonate", loro: "suonano" },
            past: { io: "ho suonato", tu: "hai suonato", lui: "ha suonato", noi: "abbiamo suonato", voi: "avete suonato", loro: "hanno suonato" },
            future: { io: "suonerò", tu: "suonerai", lui: "suonerà", noi: "suoneremo", voi: "suonerete", loro: "suoneranno" }
        }},
        { italian: "Ascoltare musica", english: "To listen to music", type: "verb", gender: "", conjugation: {
            present: { io: "ascolto", tu: "ascolti", lui: "ascolta", noi: "ascoltiamo", voi: "ascoltate", loro: "ascoltano" },
            past: { io: "ho ascoltato", tu: "hai ascoltato", lui: "ha ascoltato", noi: "abbiamo ascoltato", voi: "avete ascoltato", loro: "hanno ascoltato" },
            future: { io: "ascolterò", tu: "ascolterai", lui: "ascolterà", noi: "ascolteremo", voi: "ascolterete", loro: "ascolteranno" }
        }},
        { italian: "Giocare videogiochi", english: "To play video games", type: "verb", gender: "", conjugation: {
            present: { io: "gioco", tu: "giochi", lui: "gioca", noi: "giochiamo", voi: "giocate", loro: "giocano" },
            past: { io: "ho giocato", tu: "hai giocato", lui: "ha giocato", noi: "abbiamo giocato", voi: "avete giocato", loro: "hanno giocato" },
            future: { io: "giocherò", tu: "giocherai", lui: "giocherà", noi: "giocheremo", voi: "giocherete", loro: "giocheranno" }
        }},
        { italian: "Fare lo shopping", english: "To go shopping", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Rilassare", english: "To relax", type: "verb", gender: "", conjugation: {
            present: { io: "rilasso", tu: "rilassi", lui: "rilassa", noi: "rilassiamo", voi: "rilassate", loro: "rilassano" },
            past: { io: "ho rilassato", tu: "hai rilassato", lui: "ha rilassato", noi: "abbiamo rilassato", voi: "avete rilassato", loro: "hanno rilassato" },
            future: { io: "rilasserò", tu: "rilasserai", lui: "rilasserà", noi: "rilasseremo", voi: "rilasserete", loro: "rilasseranno" }
        }},
        { italian: "Dormire", english: "To sleep", type: "verb", gender: "", conjugation: {
            present: { io: "dormo", tu: "dormi", lui: "dorme", noi: "dormiamo", voi: "dormite", loro: "dormono" },
            past: { io: "ho dormito", tu: "hai dormito", lui: "ha dormito", noi: "abbiamo dormito", voi: "avete dormito", loro: "hanno dormito" },
            future: { io: "dormirò", tu: "dormirai", lui: "dormirà", noi: "dormiremo", voi: "dormirete", loro: "dormiranno" }
        }},
        { italian: "Dipingere", english: "To draw/paint", type: "verb", gender: "", conjugation: {
            present: { io: "dipingo", tu: "dipingi", lui: "dipinge", noi: "dipingiamo", voi: "dipingete", loro: "dipingono" },
            past: { io: "ho dipinto", tu: "hai dipinto", lui: "ha dipinto", noi: "abbiamo dipinto", voi: "avete dipinto", loro: "hanno dipinto" },
            future: { io: "dipingerò", tu: "dipingerai", lui: "dipingerà", noi: "dipingeremo", voi: "dipingerete", loro: "dipingeranno" }
        }},
        { italian: "Andare al cinema", english: "To go to the movies", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        { italian: "Andare al concerto", english: "To go to a concert", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        { italian: "Andare a una festa", english: "To go to a party", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        { italian: "Andare a una partita", english: "To go to a game", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        { italian: "Andare al museo", english: "To go to a museum", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        
        // Adjectives
        { italian: "Interessante", english: "Interesting", type: "adjective", gender: "both" },
        { italian: "Noioso", english: "Boring", type: "adjective", gender: "masculine" },
        { italian: "Buffo", english: "Funny", type: "adjective", gender: "masculine" },
        { italian: "Nuovo", english: "New", type: "adjective", gender: "masculine" },
        { italian: "Spaventoso", english: "Scary", type: "adjective", gender: "masculine" },
        { italian: "Romantico", english: "Romantic", type: "adjective", gender: "masculine" },
        { italian: "Bravo", english: "Good", type: "adjective", gender: "masculine" },
        { italian: "Cattivo", english: "Bad", type: "adjective", gender: "masculine" },
        { italian: "Veloce", english: "Fast", type: "adjective", gender: "both" },
        { italian: "Lento", english: "Slow", type: "adjective", gender: "masculine" },
        { italian: "Divertente", english: "Fun", type: "adjective", gender: "both" },
        { italian: "Difficile", english: "Difficult", type: "adjective", gender: "both" },
        { italian: "Pericoloso", english: "Dangerous", type: "adjective", gender: "masculine" },
        { italian: "Costoso", english: "Expensive", type: "adjective", gender: "masculine" },
        { italian: "Famoso", english: "Famous", type: "adjective", gender: "masculine" },
        { italian: "Irritante", english: "Annoying", type: "adjective", gender: "both" },
        { italian: "Forte", english: "Strong", type: "adjective", gender: "both" },
        { italian: "Debole", english: "Weak", type: "adjective", gender: "both" },
        { italian: "Fabuloso", english: "Fabulous", type: "adjective", gender: "masculine" },
        { italian: "Fantastico", english: "Fantastic", type: "adjective", gender: "masculine" },
        { italian: "Strano", english: "Strange", type: "adjective", gender: "masculine" },
        { italian: "Emozionante", english: "Thrilling", type: "adjective", gender: "both" },
        { italian: "Terribile", english: "Terrible", type: "adjective", gender: "both" },
        { italian: "Orrendo", english: "Horrible", type: "adjective", gender: "masculine" },
        { italian: "Magico", english: "Magical", type: "adjective", gender: "masculine" },
        { italian: "Misterioso", english: "Mysterious", type: "adjective", gender: "masculine" },
        
        // Leisure vocabulary
        { italian: "Il tempo libero", english: "Free time", type: "noun", gender: "masculine" },
        { italian: "La vacanza", english: "Vacation", type: "noun", gender: "feminine" },
        { italian: "Il fine settimana", english: "Weekend", type: "noun", gender: "masculine" },
        { italian: "Le ferie", english: "Holiday", type: "noun", gender: "feminine plural" },
        
        // TV and Cinema
        { italian: "La televisione", english: "Television", type: "noun", gender: "feminine" },
        { italian: "Il cinema", english: "Cinema", type: "noun", gender: "masculine" },
        { italian: "Il film romantico", english: "Romantic movie", type: "noun", gender: "masculine" },
        { italian: "Il film d'orrore", english: "Horror movie", type: "noun", gender: "masculine" },
        { italian: "Il film musicale", english: "Musical movie", type: "noun", gender: "masculine" },
        { italian: "Il film comico", english: "Comedy movie", type: "noun", gender: "masculine" },
        { italian: "Il film drammatico", english: "Drama movie", type: "noun", gender: "masculine" },
        { italian: "Il film giallo", english: "Mystery movie", type: "noun", gender: "masculine" },
        { italian: "I cartoni animati", english: "Cartoons", type: "noun", gender: "masculine plural" },
        { italian: "Il programma sportivo", english: "Sports program", type: "noun", gender: "masculine" },
        { italian: "Le previsioni del tempo", english: "Weather forecast", type: "noun", gender: "feminine plural" },
        { italian: "Il telegiornale", english: "News", type: "noun", gender: "masculine" },
        { italian: "La telenovella", english: "Soap opera", type: "noun", gender: "feminine" },
        { italian: "L'attore", english: "Actor", type: "noun", gender: "masculine" },
        { italian: "L'attrice", english: "Actress", type: "noun", gender: "feminine" },
        { italian: "Il documentario", english: "Documentary", type: "noun", gender: "masculine" },
        { italian: "Il canale", english: "Channel", type: "noun", gender: "masculine" },
        { italian: "La pubblicità", english: "Commercial", type: "noun", gender: "feminine" },
        { italian: "Lo spettacolo", english: "Play", type: "noun", gender: "masculine" },
        
        // Books
        { italian: "Il giornale", english: "Newspaper", type: "noun", gender: "masculine" },
        { italian: "La rivista", english: "Magazine", type: "noun", gender: "feminine" },
        { italian: "L'autore", english: "Author", type: "noun", gender: "masculine" },
        { italian: "Il libro giallo", english: "Mystery novel", type: "noun", gender: "masculine" },
        { italian: "Il libro rosa", english: "Romantic novel", type: "noun", gender: "masculine" },
        
        // Music
        { italian: "La musica", english: "Music", type: "noun", gender: "feminine" },
        { italian: "La musica rock & roll", english: "Rock & roll music", type: "noun", gender: "feminine" },
        { italian: "La musica jazz", english: "Jazz music", type: "noun", gender: "feminine" },
        { italian: "La musica contemporanea", english: "Contemporary music", type: "noun", gender: "feminine" },
        { italian: "La musica hip hop", english: "Hip hop music", type: "noun", gender: "feminine" },
        { italian: "La canzone", english: "Song", type: "noun", gender: "feminine" },
        { italian: "Il cantante", english: "Singer", type: "noun", gender: "masculine" },
        { italian: "Il gruppo musicale", english: "Band", type: "noun", gender: "masculine" },
        { italian: "Il concerto", english: "Concert", type: "noun", gender: "masculine" },
        
        // Sports
        { italian: "La pallacanestro", english: "Basketball", type: "sport", gender: "feminine" },
        { italian: "La pallavolo", english: "Volleyball", type: "sport", gender: "feminine" },
        { italian: "Il baseball", english: "Baseball", type: "sport", gender: "masculine" },
        { italian: "Il tennis", english: "Tennis", type: "sport", gender: "masculine" },
        { italian: "Il calcio", english: "Soccer", type: "sport", gender: "masculine" },
        { italian: "Il football americano", english: "Football", type: "sport", gender: "masculine" },
        { italian: "Il pattinaggio", english: "Skating", type: "sport", gender: "masculine" },
        { italian: "Il nuoto", english: "Swimming", type: "sport", gender: "masculine" },
        { italian: "Lo sci", english: "Skiing", type: "sport", gender: "masculine" },
        { italian: "Il pugilato", english: "Boxing", type: "sport", gender: "masculine" },
        { italian: "Il ciclismo", english: "Cycling", type: "sport", gender: "masculine" },
        { italian: "La lotta libera", english: "Wrestling", type: "sport", gender: "feminine" },
        { italian: "Yoga", english: "Yoga", type: "sport", gender: "masculine" },
        { italian: "Il giocatore", english: "Player (m)", type: "noun", gender: "masculine" },
        { italian: "La giocatrice", english: "Player (f)", type: "noun", gender: "feminine" },
        { italian: "L'atleta", english: "Athlete", type: "noun", gender: "both" },
        { italian: "La partita", english: "Game", type: "noun", gender: "feminine" },
        { italian: "Lo stadio", english: "Stadium", type: "noun", gender: "masculine" },
        { italian: "La squadra", english: "Team", type: "noun", gender: "feminine" },
        { italian: "Vincere", english: "To win", type: "verb", gender: "", conjugation: {
            present: { io: "vinco", tu: "vinci", lui: "vince", noi: "vinciamo", voi: "vincete", loro: "vincono" },
            past: { io: "ho vinto", tu: "hai vinto", lui: "ha vinto", noi: "abbiamo vinto", voi: "avete vinto", loro: "hanno vinto" },
            future: { io: "vincerò", tu: "vincerai", lui: "vincerà", noi: "vinceremo", voi: "vincerete", loro: "vinceranno" }
        }},
        { italian: "Perdere", english: "To lose", type: "verb", gender: "", conjugation: {
            present: { io: "perdo", tu: "perdi", lui: "perde", noi: "perdiamo", voi: "perdete", loro: "perdono" },
            past: { io: "ho perso", tu: "hai perso", lui: "ha perso", noi: "abbiamo perso", voi: "avete perso", loro: "hanno perso" },
            future: { io: "perderò", tu: "perderai", lui: "perderà", noi: "perderemo", voi: "perderete", loro: "perderanno" }
        }},
        { italian: "Il tifoso", english: "Fan", type: "noun", gender: "masculine" },
        
        // Useful Phrases
        { italian: "Vuoi... al/alla... alle...?", english: "Do you want to... at the... at...?", type: "question", gender: "" },
        { italian: "Che ne dici se... il/la... alle...?", english: "What do you say if... the... at...?", type: "question", gender: "" },
        { italian: "Sì, io posso...", english: "Yes, I can...", type: "response", gender: "" },
        { italian: "No, non posso... perché devo...", english: "I can't... because I have to...", type: "response", gender: "" },
        { italian: "Non mi va perché...", english: "It doesn't work for me because...", type: "response", gender: "" },
        { italian: "Che ne dici se...?", english: "What do you say if...?", type: "question", gender: "" },
        { italian: "Io voglio...", english: "I want...", type: "expression", gender: "" },
        { italian: "Ne hai voglia di... con me?", english: "Do you feel like... with me?", type: "question", gender: "" }
    ],
    
    travel: [
        // Transportation
        { italian: "La macchina", english: "Car", type: "transportation", gender: "feminine" },
        { italian: "La bicicletta (la bici)", english: "Bike", type: "transportation", gender: "feminine" },
        { italian: "Il treno", english: "Train", type: "transportation", gender: "masculine" },
        { italian: "La motocicletta", english: "Motorcycle", type: "transportation", gender: "feminine" },
        { italian: "L'aereo", english: "Plane", type: "transportation", gender: "masculine" },
        { italian: "La barca", english: "Boat", type: "transportation", gender: "feminine" },
        { italian: "L'autobus", english: "Bus", type: "transportation", gender: "masculine" },
        
        // Airport and Train Station
        { italian: "L'uscita", english: "Exit", type: "travel", gender: "feminine" },
        { italian: "La partenza", english: "Departure", type: "travel", gender: "feminine" },
        { italian: "L'assistente di volo", english: "Flight attendant", type: "travel", gender: "both" },
        { italian: "Il doganiere", english: "Customs agent", type: "travel", gender: "masculine" },
        { italian: "La valigia", english: "Suitcase", type: "travel", gender: "feminine" },
        { italian: "L'orario", english: "Schedule", type: "travel", gender: "masculine" },
        { italian: "Il biglietto (di andata e ritorno)", english: "Ticket (round trip)", type: "travel", gender: "masculine" },
        { italian: "Il passeggero", english: "Passenger", type: "travel", gender: "masculine" },
        { italian: "Il binario", english: "Train track", type: "travel", gender: "masculine" },
        { italian: "Il turista", english: "Tourist", type: "travel", gender: "masculine" },
        { italian: "La destinazione", english: "Destination", type: "travel", gender: "feminine" },
        { italian: "La sala d'aspetto", english: "Waiting room", type: "travel", gender: "feminine" },
        { italian: "L'arrivo", english: "Arrival", type: "travel", gender: "masculine" },
        { italian: "Il volo", english: "Flight", type: "travel", gender: "masculine" },
        { italian: "Il/La pilota", english: "Pilot", type: "travel", gender: "both" },
        { italian: "La dogana", english: "Customs", type: "travel", gender: "feminine" },
        { italian: "I bagagli", english: "Luggage", type: "travel", gender: "masculine plural" },
        { italian: "La carta d'imbarco", english: "Boarding pass", type: "travel", gender: "feminine" },
        { italian: "Il passaporto", english: "Passport", type: "travel", gender: "masculine" },
        { italian: "Il viaggio", english: "Trip", type: "travel", gender: "masculine" },
        { italian: "Il viaggiatore", english: "Traveler", type: "travel", gender: "masculine" },
        { italian: "Il posto", english: "Spot or seat", type: "travel", gender: "masculine" },
        { italian: "La durata", english: "Length (as in flight length)", type: "travel", gender: "feminine" },
        { italian: "Il volo diretto", english: "Direct flight", type: "travel", gender: "masculine" },
        { italian: "La prima/seconda classe", english: "First/second class", type: "travel", gender: "feminine" },
        { italian: "Il compartimento", english: "Compartment", type: "travel", gender: "masculine" },
        { italian: "La ferrovia", english: "Railroad", type: "travel", gender: "feminine" },
        { italian: "Il tabellone", english: "The big board", type: "travel", gender: "masculine" },
        { italian: "L'agente/agenzia di viaggi", english: "Travel agent and agency", type: "travel", gender: "both/feminine" },
        { italian: "Il dirigente", english: "Manager", type: "travel", gender: "masculine" },
        { italian: "Assegni per viaggiatori", english: "Traveler's checks", type: "travel", gender: "masculine plural" },
        
        // Hotel
        { italian: "L'albergo", english: "Hotel", type: "accommodation", gender: "masculine" },
        { italian: "L'albergo di lusso", english: "Luxury hotel", type: "accommodation", gender: "masculine" },
        { italian: "L'albergo modesto", english: "Modest hotel", type: "accommodation", gender: "masculine" },
        { italian: "L'albergo economico", english: "Economy hotel", type: "accommodation", gender: "masculine" },
        { italian: "La camera singola", english: "Single room", type: "accommodation", gender: "feminine" },
        { italian: "La camera doppia", english: "Double room", type: "accommodation", gender: "feminine" },
        { italian: "La camera matrimoniale", english: "King room", type: "accommodation", gender: "feminine" },
        { italian: "La prenotazione", english: "Reservation", type: "accommodation", gender: "feminine" },
        { italian: "La pensione", english: "Bed & breakfast", type: "accommodation", gender: "feminine" },
        { italian: "I documenti", english: "Documents", type: "travel", gender: "masculine plural" },
        { italian: "La carta d'identità", english: "ID card", type: "travel", gender: "feminine" },
        { italian: "La patente", english: "Driver's license", type: "travel", gender: "feminine" },
        { italian: "L'ascensore", english: "Elevator", type: "accommodation", gender: "masculine" },
        { italian: "Il cliente", english: "Client", type: "accommodation", gender: "masculine" },
        
        // Travel Activities
        { italian: "Viaggiare", english: "To travel", type: "verb", gender: "", conjugation: {
            present: { io: "viaggio", tu: "viaggi", lui: "viaggia", noi: "viaggiamo", voi: "viaggiate", loro: "viaggiano" },
            past: { io: "ho viaggiato", tu: "hai viaggiato", lui: "ha viaggiato", noi: "abbiamo viaggiato", voi: "avete viaggiato", loro: "hanno viaggiato" },
            future: { io: "viaggerò", tu: "viaggerai", lui: "viaggerà", noi: "viaggeremo", voi: "viaggerete", loro: "viaggeranno" }
        }},
        { italian: "Fare un viaggio", english: "To take a trip", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Volare", english: "To fly", type: "verb", gender: "", conjugation: {
            present: { io: "volo", tu: "voli", lui: "vola", noi: "voliamo", voi: "volate", loro: "volano" },
            past: { io: "ho volato", tu: "hai volato", lui: "ha volato", noi: "abbiamo volato", voi: "avete volato", loro: "hanno volato" },
            future: { io: "volerò", tu: "volerai", lui: "volerà", noi: "voleremo", voi: "volerete", loro: "voleranno" }
        }},
        { italian: "Fare una foto", english: "To take a picture", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Noleggiare", english: "To rent", type: "verb", gender: "", conjugation: {
            present: { io: "noleggio", tu: "noleggi", lui: "noleggia", noi: "noleggiamo", voi: "noleggiate", loro: "noleggiano" },
            past: { io: "ho noleggiato", tu: "hai noleggiato", lui: "ha noleggiato", noi: "abbiamo noleggiato", voi: "avete noleggiato", loro: "hanno noleggiato" },
            future: { io: "noleggerò", tu: "noleggerai", lui: "noleggerà", noi: "noleggeremo", voi: "noleggerete", loro: "noleggeranno" }
        }},
        { italian: "Fare una gita", english: "To go on a tour", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Comprare", english: "To buy", type: "verb", gender: "", conjugation: {
            present: { io: "compro", tu: "compri", lui: "compra", noi: "compriamo", voi: "comprate", loro: "comprano" },
            past: { io: "ho comprato", tu: "hai comprato", lui: "ha comprato", noi: "abbiamo comprato", voi: "avete comprato", loro: "hanno comprato" },
            future: { io: "comprerò", tu: "comprerai", lui: "comprerà", noi: "compreremo", voi: "comprerete", loro: "compreranno" }
        }},
        { italian: "Partire", english: "To leave", type: "verb", gender: "", conjugation: {
            present: { io: "parto", tu: "parti", lui: "parte", noi: "partiamo", voi: "partite", loro: "partono" },
            past: { io: "sono partito/a", tu: "sei partito/a", lui: "è partito", noi: "siamo partiti/e", voi: "siete partiti/e", loro: "sono partiti/e" },
            future: { io: "partirò", tu: "partirai", lui: "partirà", noi: "partiremo", voi: "partirete", loro: "partiranno" }
        }},
        { italian: "Guidare", english: "To drive", type: "verb", gender: "", conjugation: {
            present: { io: "guido", tu: "guidi", lui: "guida", noi: "guidiamo", voi: "guidate", loro: "guidano" },
            past: { io: "ho guidato", tu: "hai guidato", lui: "ha guidato", noi: "abbiamo guidato", voi: "avete guidato", loro: "hanno guidato" },
            future: { io: "guiderò", tu: "guiderai", lui: "guiderà", noi: "guideremo", voi: "guiderete", loro: "guideranno" }
        }},
        { italian: "Portare", english: "To bring/wear", type: "verb", gender: "", conjugation: {
            present: { io: "porto", tu: "porti", lui: "porta", noi: "portiamo", voi: "portate", loro: "portano" },
            past: { io: "ho portato", tu: "hai portato", lui: "ha portato", noi: "abbiamo portato", voi: "avete portato", loro: "hanno portato" },
            future: { io: "porterò", tu: "porterai", lui: "porterà", noi: "porteremo", voi: "porterete", loro: "porteranno" }
        }},
        { italian: "Fare una prenotazione", english: "To make a reservation", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Prenotare", english: "To reserve", type: "verb", gender: "", conjugation: {
            present: { io: "prenoto", tu: "prenoti", lui: "prenota", noi: "prenotiamo", voi: "prenotate", loro: "prenotano" },
            past: { io: "ho prenotato", tu: "hai prenotato", lui: "ha prenotato", noi: "abbiamo prenotato", voi: "avete prenotato", loro: "hanno prenotato" },
            future: { io: "prenoterò", tu: "prenoterai", lui: "prenoterà", noi: "prenoteremo", voi: "prenoterete", loro: "prenoteranno" }
        }},
        { italian: "Comprare ricordi", english: "To buy souvenirs", type: "verb", gender: "", conjugation: {
            present: { io: "compro", tu: "compri", lui: "compra", noi: "compriamo", voi: "comprate", loro: "comprano" },
            past: { io: "ho comprato", tu: "hai comprato", lui: "ha comprato", noi: "abbiamo comprato", voi: "avete comprato", loro: "hanno comprato" },
            future: { io: "comprerò", tu: "comprerai", lui: "comprerà", noi: "compreremo", voi: "comprerete", loro: "compreranno" }
        }},
        { italian: "Fare le valigie", english: "To pack your suitcase", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" },
            past: { io: "ho fatto", tu: "hai fatto", lui: "ha fatto", noi: "abbiamo fatto", voi: "avete fatto", loro: "hanno fatto" },
            future: { io: "farò", tu: "farai", lui: "farà", noi: "faremo", voi: "farete", loro: "faranno" }
        }},
        { italian: "Prendere", english: "To take (transportation)", type: "verb", gender: "", conjugation: {
            present: { io: "prendo", tu: "prendi", lui: "prende", noi: "prendiamo", voi: "prendete", loro: "prendono" },
            past: { io: "ho preso", tu: "hai preso", lui: "ha preso", noi: "abbiamo preso", voi: "avete preso", loro: "hanno preso" },
            future: { io: "prenderò", tu: "prenderai", lui: "prenderà", noi: "prenderemo", voi: "prenderete", loro: "prenderanno" }
        }},
        { italian: "Durare", english: "To last", type: "verb", gender: "", conjugation: {
            present: { io: "duro", tu: "duri", lui: "dura", noi: "duriamo", voi: "durate", loro: "durano" },
            past: { io: "ho durato", tu: "hai durato", lui: "ha durato", noi: "abbiamo durato", voi: "avete durato", loro: "hanno durato" },
            future: { io: "durerò", tu: "durerai", lui: "durerà", noi: "dureremo", voi: "durerete", loro: "dureranno" }
        }},
        { italian: "Costare", english: "To cost", type: "verb", gender: "", conjugation: {
            present: { io: "costo", tu: "costi", lui: "costa", noi: "costiamo", voi: "costate", loro: "costano" },
            past: { io: "ho costato", tu: "hai costato", lui: "ha costato", noi: "abbiamo costato", voi: "avete costato", loro: "hanno costato" },
            future: { io: "costerò", tu: "costerai", lui: "costerà", noi: "costeremo", voi: "costerete", loro: "costeranno" }
        }},
        { italian: "Pagare", english: "To pay", type: "verb", gender: "", conjugation: {
            present: { io: "pago", tu: "paghi", lui: "paga", noi: "paghiamo", voi: "pagate", loro: "pagano" },
            past: { io: "ho pagato", tu: "hai pagato", lui: "ha pagato", noi: "abbiamo pagato", voi: "avete pagato", loro: "hanno pagato" },
            future: { io: "pagherò", tu: "pagherai", lui: "pagherà", noi: "pagheremo", voi: "pagherete", loro: "pagheranno" }
        }},
        { italian: "Salire", english: "To go up", type: "verb", gender: "", conjugation: {
            present: { io: "salgo", tu: "sali", lui: "sale", noi: "saliamo", voi: "salite", loro: "salgono" },
            past: { io: "sono salito/a", tu: "sei salito/a", lui: "è salito", noi: "siamo saliti/e", voi: "siete saliti/e", loro: "sono saliti/e" },
            future: { io: "salirò", tu: "salirai", lui: "salirà", noi: "saliremo", voi: "salirete", loro: "saliranno" }
        }},
        { italian: "Decollare", english: "To takeoff (airplane)", type: "verb", gender: "", conjugation: {
            present: { io: "decollo", tu: "decolli", lui: "decolla", noi: "decolliamo", voi: "decolliate", loro: "decolliano" },
            past: { io: "ho decollato", tu: "hai decollato", lui: "ha decollato", noi: "abbiamo decollato", voi: "avete decollato", loro: "hanno decollato" },
            future: { io: "decollerò", tu: "decollerai", lui: "decollerà", noi: "decolleremo", voi: "decollerete", loro: "decolleranno" }
        }},
        { italian: "Scendere", english: "To go down", type: "verb", gender: "", conjugation: {
            present: { io: "scendo", tu: "scendi", lui: "scende", noi: "scendiamo", voi: "scendete", loro: "scendono" },
            past: { io: "sono sceso/a", tu: "sei sceso/a", lui: "è sceso", noi: "siamo scesi/e", voi: "siete scesi/e", loro: "sono scesi/e" },
            future: { io: "scenderò", tu: "scenderai", lui: "scenderà", noi: "scenderemo", voi: "scenderete", loro: "scenderanno" }
        }},
        { italian: "Atterrare", english: "To land", type: "verb", gender: "", conjugation: {
            present: { io: "atterro", tu: "atterri", lui: "atterra", noi: "atterriamo", voi: "atterrate", loro: "atterrano" },
            past: { io: "ho atterrato", tu: "hai atterrato", lui: "ha atterrato", noi: "abbiamo atterrato", voi: "avete atterrato", loro: "hanno atterrato" },
            future: { io: "atterrerò", tu: "atterrerai", lui: "atterrerà", noi: "atterreremo", voi: "atterrerete", loro: "atterreranno" }
        }},
        { italian: "Andare in giro", english: "To walk around", type: "verb", gender: "", conjugation: {
            present: { io: "vado", tu: "vai", lui: "va", noi: "andiamo", voi: "andate", loro: "vanno" },
            past: { io: "sono andato/a", tu: "sei andato/a", lui: "è andato", noi: "siamo andati/e", voi: "siete andati/e", loro: "sono andati/e" },
            future: { io: "andrò", tu: "andrai", lui: "andrà", noi: "andremo", voi: "andrete", loro: "andranno" }
        }},
        { italian: "A piedi", english: "By foot", type: "expression", gender: "" }
    ],
    
    house: [
        // La Casa - House
        { italian: "La casa", english: "House", type: "noun", gender: "feminine" },
        { italian: "L'appartamento", english: "Apartment", type: "noun", gender: "masculine" },
        { italian: "Il giardino", english: "Garden", type: "noun", gender: "masculine" },
        { italian: "Il balcone", english: "Balcony", type: "noun", gender: "masculine" },
        { italian: "La camera da letto", english: "Bedroom", type: "noun", gender: "feminine" },
        { italian: "La stanza", english: "The room", type: "noun", gender: "feminine" },
        { italian: "La cucina", english: "Kitchen", type: "noun", gender: "feminine" },
        { italian: "Il soggiorno", english: "Living room", type: "noun", gender: "masculine" },
        { italian: "La sala da pranzo", english: "Dining room", type: "noun", gender: "feminine" },
        { italian: "Il bagno", english: "Bathroom", type: "noun", gender: "masculine" },
        { italian: "Il salotto", english: "Living room", type: "noun", gender: "masculine" },
        { italian: "Il tappeto", english: "Rug", type: "noun", gender: "masculine" },
        { italian: "Il camino", english: "Fireplace", type: "noun", gender: "masculine" },
        { italian: "La lavanderia", english: "Laundry room", type: "noun", gender: "feminine" },
        
        // I mobili - Furniture
        { italian: "I mobili", english: "Furniture", type: "noun", gender: "masculine plural" },
        { italian: "Il divano", english: "Sofa", type: "noun", gender: "masculine" },
        { italian: "La sedia", english: "Chair", type: "noun", gender: "feminine" },
        { italian: "La scrivania", english: "Desk", type: "noun", gender: "feminine" },
        { italian: "Lo specchio", english: "Mirror", type: "noun", gender: "masculine" },
        { italian: "Il frigo", english: "Fridge", type: "noun", gender: "masculine" },
        { italian: "La lavastoviglie", english: "Dishwasher", type: "noun", gender: "feminine" },
        { italian: "Il tavolino", english: "Side table", type: "noun", gender: "masculine" },
        { italian: "La doccia", english: "Shower", type: "noun", gender: "feminine" },
        { italian: "Il bidè", english: "Bidet", type: "noun", gender: "masculine" },
        { italian: "L'armadio", english: "Closet", type: "noun", gender: "masculine" },
        { italian: "Il gabinetto", english: "Toilet", type: "noun", gender: "masculine" },
        { italian: "Il tavolo", english: "Table", type: "noun", gender: "masculine" },
        { italian: "La lampada", english: "Lamp", type: "noun", gender: "feminine" },
        { italian: "La poltrona", english: "Armchair", type: "noun", gender: "feminine" },
        { italian: "Il letto", english: "Bed", type: "noun", gender: "masculine" },
        { italian: "Il lavandino", english: "Sink", type: "noun", gender: "masculine" },
        { italian: "Il forno", english: "Oven", type: "noun", gender: "masculine" },
        { italian: "La lavatrice", english: "Washer", type: "noun", gender: "feminine" },
        { italian: "La vasca", english: "Tub", type: "noun", gender: "feminine" },
        { italian: "Il forno a microonde", english: "Microwave", type: "noun", gender: "masculine" },
        { italian: "La libreria", english: "Bookcase", type: "noun", gender: "feminine" },
        { italian: "L'asciugatrice", english: "Dryer", type: "noun", gender: "feminine" },
        
        // Activities
        { italian: "Pulire", english: "To clean", type: "verb", gender: "", conjugation: {
            present: { io: "pulisco", tu: "pulisci", lui: "pulisce", noi: "puliamo", voi: "pulite", loro: "puliscono" }
        }},
        { italian: "Fare le faccende di casa", english: "Do chores", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" }
        }},
        { italian: "Buttare la spazzatura", english: "Throw out garbage", type: "verb", gender: "", conjugation: {
            present: { io: "butto", tu: "butti", lui: "butta", noi: "buttiamo", voi: "buttate", loro: "buttano" }
        }},
        { italian: "Passare l'aspirapolvere", english: "Vacuum", type: "verb", gender: "", conjugation: {
            present: { io: "passo", tu: "passi", lui: "passa", noi: "passiamo", voi: "passate", loro: "passano" }
        }},
        { italian: "Lavare i piatti", english: "Wash dishes", type: "verb", gender: "", conjugation: {
            present: { io: "lavo", tu: "lavi", lui: "lava", noi: "laviamo", voi: "lavate", loro: "lavano" }
        }},
        { italian: "Fare il letto", english: "Make the bed", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" }
        }},
        { italian: "Apparecchiare la tavola", english: "Set the table", type: "verb", gender: "", conjugation: {
            present: { io: "apparecchio", tu: "apparecchi", lui: "apparecchia", noi: "apparecchiamo", voi: "apparecchiate", loro: "apparecchiano" }
        }},
        { italian: "Spolverare", english: "Dust", type: "verb", gender: "", conjugation: {
            present: { io: "spolvero", tu: "spolveri", lui: "spolvera", noi: "spolveriamo", voi: "spolverate", loro: "spolverano" }
        }},
        { italian: "Affittare", english: "Rent", type: "verb", gender: "", conjugation: {
            present: { io: "affitto", tu: "affitti", lui: "affitta", noi: "affittiamo", voi: "affittate", loro: "affittano" }
        }},
        { italian: "Vendere", english: "Sell", type: "verb", gender: "", conjugation: {
            present: { io: "vendo", tu: "vendi", lui: "vende", noi: "vendiamo", voi: "vendete", loro: "vendono" }
        }},
        { italian: "Fare il bucato", english: "Do the laundry", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" }
        }},
        { italian: "Camminare il cane", english: "Walk the dog", type: "verb", gender: "", conjugation: {
            present: { io: "cammino", tu: "cammini", lui: "cammina", noi: "camminiamo", voi: "camminate", loro: "camminano" }
        }},
        { italian: "Lavorare in giardino", english: "Work in the garden", type: "verb", gender: "", conjugation: {
            present: { io: "lavoro", tu: "lavori", lui: "lavora", noi: "lavoriamo", voi: "lavorate", loro: "lavorano" }
        }},
        { italian: "Cucinare", english: "Cook", type: "verb", gender: "", conjugation: {
            present: { io: "cucino", tu: "cucini", lui: "cucina", noi: "cuciniamo", voi: "cucinate", loro: "cucinano" }
        }},
        { italian: "Organizzare l'armadio", english: "Organize the closet", type: "verb", gender: "", conjugation: {
            present: { io: "organizzo", tu: "organizzi", lui: "organizza", noi: "organizziamo", voi: "organizzate", loro: "organizzano" }
        }},
        { italian: "Lavare", english: "To wash", type: "verb", gender: "", conjugation: {
            present: { io: "lavo", tu: "lavi", lui: "lava", noi: "laviamo", voi: "lavate", loro: "lavano" }
        }},
        { italian: "Fare la spesa", english: "Go food shopping", type: "verb", gender: "", conjugation: {
            present: { io: "faccio", tu: "fai", lui: "fa", noi: "facciamo", voi: "fate", loro: "fanno" }
        }},
        
        // Adjectives
        { italian: "Arredato", english: "Furnished", type: "adjective", gender: "masculine" },
        { italian: "Moderno", english: "Modern", type: "adjective", gender: "masculine" },
        { italian: "Antico", english: "Antique", type: "adjective", gender: "masculine" },
        { italian: "Tradizionale", english: "Traditional", type: "adjective", gender: "masculine" },
        { italian: "Di legno", english: "Of wood", type: "adjective", gender: "" },
        { italian: "Di petra", english: "Of rock", type: "adjective", gender: "" },
        { italian: "Di vetro", english: "Of glass", type: "adjective", gender: "" },
        { italian: "Pulito", english: "Clean", type: "adjective", gender: "masculine" },
        { italian: "Sporco", english: "Dirty", type: "adjective", gender: "masculine" },
        { italian: "Sfatto", english: "Messy", type: "adjective", gender: "masculine" },
        { italian: "Comodo", english: "Comfortable", type: "adjective", gender: "masculine" },
        { italian: "Scomodo", english: "Uncomfortable", type: "adjective", gender: "masculine" },
        { italian: "Grande", english: "Big", type: "adjective", gender: "masculine" },
        { italian: "Piccolo", english: "Small", type: "adjective", gender: "masculine" },
        { italian: "Nuovo", english: "New", type: "adjective", gender: "masculine" },
        { italian: "Vecchio", english: "Old", type: "adjective", gender: "masculine" },
        { italian: "Brutto", english: "Ugly", type: "adjective", gender: "masculine" },
        { italian: "Bello", english: "Beautiful", type: "adjective", gender: "masculine" },
        { italian: "Lungo", english: "Long", type: "adjective", gender: "masculine" },
        { italian: "Corto", english: "Short", type: "adjective", gender: "masculine" }
    ],
    
    health: [
        { italian: "La testa", english: "Head", type: "noun", gender: "feminine" },
        { italian: "I capelli", english: "Hair", type: "noun", gender: "masculine plural" },
        { italian: "L'occhio", english: "Eye", type: "noun", gender: "masculine" },
        { italian: "Gli occhi", english: "Eyes", type: "noun", gender: "masculine plural" },
        { italian: "La bocca", english: "Mouth", type: "noun", gender: "feminine" },
        { italian: "La lingua", english: "Tongue", type: "noun", gender: "feminine" },
        { italian: "La spalla", english: "Shoulder", type: "noun", gender: "feminine" },
        { italian: "Il braccio", english: "Arm", type: "noun", gender: "masculine" },
        { italian: "Il dito", english: "Finger", type: "noun", gender: "masculine" },
        { italian: "Le dita", english: "Fingers", type: "noun", gender: "feminine plural" },
        
        // Verbi / Verbs
        { italian: "Pensare", english: "To think", type: "verb", gender: "", conjugation: {
            present: { io: "penso", tu: "pensi", lui: "pensa", noi: "pensiamo", voi: "pensate", loro: "pensano" }
        }},
        { italian: "Toccare", english: "To touch", type: "verb", gender: "", conjugation: {
            present: { io: "tocco", tu: "tocchi", lui: "tocca", noi: "tocchiamo", voi: "toccate", loro: "toccano" }
        }},
        { italian: "Vedere", english: "To see", type: "verb", gender: "", conjugation: {
            present: { io: "vedo", tu: "vedi", lui: "vede", noi: "vediamo", voi: "vedete", loro: "vedono" }
        }},
        { italian: "Sentire", english: "To feel", type: "verb", gender: "", conjugation: {
            present: { io: "sento", tu: "senti", lui: "sente", noi: "sentiamo", voi: "sentite", loro: "sentono" }
        }},
        
        // Le malattie - the sicknesses
        { italian: "Il raffreddore", english: "The cold", type: "noun", gender: "masculine" },
        { italian: "L'influenza", english: "The flu", type: "noun", gender: "feminine" },
        { italian: "La febbre", english: "The fever", type: "noun", gender: "feminine" },
        { italian: "La tosse", english: "The cough", type: "noun", gender: "feminine" },
        { italian: "Il mal di testa", english: "Headache", type: "expression", gender: "masculine" },
        { italian: "Il mal di denti", english: "Toothache", type: "expression", gender: "masculine" },
        { italian: "Il mal di gola", english: "Sore throat", type: "expression", gender: "masculine" },
        { italian: "Il mal di stomaco", english: "Stomachache", type: "expression", gender: "masculine" },

        // Additional body parts
{ italian: "Lo stomaco", english: "Stomach", type: "noun", gender: "masculine" },
{ italian: "Il ginocchio", english: "Knee", type: "noun", gender: "masculine" },
{ italian: "Le ginocchia", english: "Knees", type: "noun", gender: "feminine plural" },
{ italian: "La gamba", english: "Leg", type: "noun", gender: "feminine" },
{ italian: "Il cuore", english: "Heart", type: "noun", gender: "masculine" },
{ italian: "La faccia", english: "Face", type: "noun", gender: "feminine" },
{ italian: "L'orecchio", english: "Ear", type: "noun", gender: "masculine" },
{ italian: "Le orecchie", english: "Ears", type: "noun", gender: "feminine plural" },
{ italian: "Il dente", english: "Tooth", type: "noun", gender: "masculine" },
{ italian: "I denti", english: "Teeth", type: "noun", gender: "masculine plural" },
{ italian: "Il naso", english: "Nose", type: "noun", gender: "masculine" },
{ italian: "Il collo", english: "Neck", type: "noun", gender: "masculine" },
{ italian: "La gola", english: "Throat", type: "noun", gender: "feminine" },
{ italian: "La mano", english: "Hand", type: "noun", gender: "feminine" },
{ italian: "Le mani", english: "Hands", type: "noun", gender: "feminine plural" },
{ italian: "Il petto", english: "Chest", type: "noun", gender: "masculine" },
{ italian: "Il piede", english: "Foot", type: "noun", gender: "masculine" },
{ italian: "La pelle", english: "Skin", type: "noun", gender: "feminine" },
{ italian: "Le dita dei piedi", english: "Toes", type: "noun", gender: "feminine plural" },
{ italian: "L'uomo", english: "Man", type: "noun", gender: "masculine" },
{ italian: "Gli uomini", english: "Men", type: "noun", gender: "masculine plural" },
{ italian: "La donna", english: "Woman", type: "noun", gender: "feminine" },

// Additional health verbs
{ italian: "Udire", english: "To hear", type: "verb", gender: "", conjugation: {
    present: { io: "odo", tu: "odi", lui: "ode", noi: "udiamo", voi: "udite", loro: "odono" }
}},
{ italian: "Ascoltare", english: "To listen", type: "verb", gender: "", conjugation: {
    present: { io: "ascolto", tu: "ascolti", lui: "ascolta", noi: "ascoltiamo", voi: "ascoltate", loro: "ascoltano" }
}},
{ italian: "Odorare", english: "To smell", type: "verb", gender: "", conjugation: {
    present: { io: "odoro", tu: "odori", lui: "odora", noi: "odoriamo", voi: "odorate", loro: "odorano" }
}},

// Additional sicknesses
{ italian: "L'infarto", english: "The heart attack", type: "noun", gender: "masculine" },
{ italian: "L'allergia", english: "The allergy", type: "noun", gender: "feminine" },
{ italian: "L'infezione", english: "The infection", type: "noun", gender: "feminine" },
{ italian: "La scottatura", english: "The burn", type: "noun", gender: "feminine" },
{ italian: "L'asma", english: "The asthma", type: "noun", gender: "feminine" },
{ italian: "Il cancro", english: "The cancer", type: "noun", gender: "masculine" },
{ italian: "La bronchite", english: "The bronchitis", type: "noun", gender: "feminine" },

// Symptoms
{ italian: "Il sudore", english: "The sweat", type: "noun", gender: "masculine" },
{ italian: "Il vomito", english: "The vomit", type: "noun", gender: "masculine" },
{ italian: "Il sangue", english: "The blood", type: "noun", gender: "masculine" },
{ italian: "La ferita", english: "The injury", type: "noun", gender: "feminine" },
{ italian: "La diarrea", english: "The diarrhea", type: "noun", gender: "feminine" },

// Health adjectives
{ italian: "Pallido", english: "Pale", type: "adjective", gender: "masculine" },
{ italian: "Debole", english: "Weak", type: "adjective", gender: "masculine" },
{ italian: "Ammalato", english: "Sick", type: "adjective", gender: "masculine" },
{ italian: "Stanco", english: "Tired", type: "adjective", gender: "masculine" },

// Hospital terms
{ italian: "Il dottore", english: "Doctor (male)", type: "noun", gender: "masculine" },
{ italian: "La dottoressa", english: "Doctor (female)", type: "noun", gender: "feminine" },
{ italian: "Il paziente", english: "Patient (male)", type: "noun", gender: "masculine" },
{ italian: "La paziente", english: "Patient (female)", type: "noun", gender: "feminine" },
{ italian: "L'infermiere", english: "Nurse (male)", type: "noun", gender: "masculine" },
{ italian: "L'infermiera", english: "Nurse (female)", type: "noun", gender: "feminine" },
{ italian: "Il dentista", english: "Dentist (male)", type: "noun", gender: "masculine" },
{ italian: "La dentista", english: "Dentist (female)", type: "noun", gender: "feminine" },
{ italian: "Il farmacista", english: "Pharmacist (male)", type: "noun", gender: "masculine" },
{ italian: "La farmacista", english: "Pharmacist (female)", type: "noun", gender: "feminine" },
{ italian: "Il malato", english: "The sick person (male)", type: "noun", gender: "masculine" },
{ italian: "La malata", english: "The sick person (female)", type: "noun", gender: "feminine" },
{ italian: "Il dolore", english: "Pain", type: "noun", gender: "masculine" },
{ italian: "La salute", english: "Health", type: "noun", gender: "feminine" },
{ italian: "La diagnosi", english: "Diagnosis", type: "noun", gender: "feminine" },
{ italian: "La malattia", english: "The sickness", type: "noun", gender: "feminine" },
{ italian: "La pillola", english: "Pill", type: "noun", gender: "feminine" },
{ italian: "L'aspirina", english: "Aspirin", type: "noun", gender: "feminine" },
{ italian: "Lo sciroppo", english: "Syrup", type: "noun", gender: "masculine" },
{ italian: "La vitamina", english: "Vitamin", type: "noun", gender: "feminine" },
{ italian: "La cura", english: "The cure", type: "noun", gender: "feminine" },
{ italian: "La benda", english: "The bandage", type: "noun", gender: "feminine" },
{ italian: "Il cerotto", english: "The Band aid", type: "noun", gender: "masculine" },
{ italian: "L'operazione", english: "The operation", type: "noun", gender: "feminine" },

// Health phrases
{ italian: "La gamba rotta", english: "Broken leg", type: "expression", gender: "feminine" },
{ italian: "Il braccio rotto", english: "Broken arm", type: "expression", gender: "masculine" },
{ italian: "Ho dolore in...", english: "I have pain in...", type: "expression", gender: "" },
{ italian: "Che ti fa male?", english: "What hurts?", type: "question", gender: "" },
{ italian: "Mi fa male la testa", english: "My head hurts", type: "expression", gender: "" },
{ italian: "Che cosa hai?", english: "What do you have?", type: "question", gender: "" },
{ italian: "Ho mal di testa", english: "I have a headache", type: "expression", gender: "" },
{ italian: "Come stai?", english: "How are you?", type: "question", gender: "" },
{ italian: "Dove hai dolore?", english: "Where do you have pain?", type: "question", gender: "" },
{ italian: "Ho dolore nello stomaco", english: "I have pain in the stomach", type: "expression", gender: "" }
    ],
    
    environment: [
        // Environment and Recycling
        { italian: "I rifiuti", english: "Waste", type: "noun", gender: "masculine plural" },
        { italian: "L'immondizia", english: "Waste", type: "noun", gender: "feminine" },
        { italian: "La raccolta differenziata", english: "Waste separation", type: "noun", gender: "feminine" },
        { italian: "Il vetro", english: "Glass", type: "noun", gender: "masculine" },
        { italian: "La carta", english: "Paper", type: "noun", gender: "feminine" },
        { italian: "La plastica", english: "Plastic", type: "noun", gender: "feminine" },
        { italian: "La lattina", english: "Can", type: "noun", gender: "feminine" },
        { italian: "Il rifiuto umido", english: "Wet waste", type: "noun", gender: "masculine" },
        { italian: "L'organico", english: "Organic waste", type: "noun", gender: "masculine" },
        { italian: "Il cestino", english: "Litter bin", type: "noun", gender: "masculine" },
        
        // Verbs
        { italian: "Riciclare", english: "To recycle", type: "verb", gender: "", conjugation: {
            present: { io: "riciclo", tu: "ricicli", lui: "ricicla", noi: "ricicliamo", voi: "riciclate", loro: "riciclano" }
        }},
        { italian: "Inquinare", english: "To pollute", type: "verb", gender: "", conjugation: {
            present: { io: "inquino", tu: "inquini", lui: "inquina", noi: "inquiniamo", voi: "inquinate", loro: "inquinano" }
        }},

        { italian: "Il bidone", english: "Garbage can", type: "noun", gender: "masculine" },
{ italian: "La sporcizia", english: "Dirtiness", type: "noun", gender: "feminine" },
{ italian: "Il suolo", english: "Ground", type: "noun", gender: "masculine" },
{ italian: "L'aria", english: "Air", type: "noun", gender: "feminine" },
{ italian: "L'ecologia", english: "Ecology", type: "noun", gender: "feminine" },
{ italian: "L'inquinamento", english: "Pollution", type: "noun", gender: "masculine" },
{ italian: "L'ambiente", english: "Environment", type: "noun", gender: "masculine" },
{ italian: "Il buco nell'ozono", english: "Ozone hole", type: "noun", gender: "masculine" },
{ italian: "La siccità", english: "Drought", type: "noun", gender: "feminine" },
{ italian: "La deforestazione", english: "Deforestation", type: "noun", gender: "feminine" },
{ italian: "Effetto serra", english: "Greenhouse effect", type: "noun", gender: "masculine" },

// Additional environment verbs
{ italian: "Rispettare", english: "To respect", type: "verb", gender: "", conjugation: {
    present: { io: "rispetto", tu: "rispetti", lui: "rispetta", noi: "rispettiamo", voi: "rispettate", loro: "rispettano" }
}},
{ italian: "Separare i rifiuti", english: "To sort/separate wastes", type: "verb", gender: "", conjugation: {
    present: { io: "separo", tu: "separi", lui: "separa", noi: "separiamo", voi: "separate", loro: "separano" }
}},
{ italian: "Buttare", english: "To throw out", type: "verb", gender: "", conjugation: {
    present: { io: "butto", tu: "butti", lui: "butta", noi: "buttiamo", voi: "buttate", loro: "buttano" }
}},
{ italian: "Gettare", english: "To throw", type: "verb", gender: "", conjugation: {
    present: { io: "getto", tu: "getti", lui: "getta", noi: "gettiamo", voi: "gettate", loro: "gettano" }
}}
    ],

    technology: [
        // Internet / L'Internet
        { italian: "L'indirizzo", english: "Address", type: "noun", gender: "masculine" },
        { italian: "Il navigatore", english: "Browser", type: "noun", gender: "masculine" },
        { italian: "Il computer", english: "Computer", type: "noun", gender: "masculine" },
        { italian: "La casella di posta elettronica", english: "Email box", type: "noun", gender: "feminine" },
        { italian: "La cartella", english: "Folder", type: "noun", gender: "feminine" },
        { italian: "L'ipercollegamento", english: "Hyperlink", type: "noun", gender: "masculine" },
        { italian: "L'icona", english: "Icon", type: "noun", gender: "feminine" },
        { italian: "La rete", english: "Internet", type: "noun", gender: "feminine" },
        { italian: "La tastiera", english: "Keyboard", type: "noun", gender: "feminine" },
        { italian: "Le parole chiave", english: "Keywords", type: "noun", gender: "feminine plural" },
        { italian: "Multimediale", english: "Multimedia", type: "adjective", gender: "" },
        { italian: "In linea", english: "Online", type: "expression", gender: "" },
        { italian: "Il sistema operativo", english: "Operating system", type: "noun", gender: "masculine" },
        { italian: "La pagina", english: "Page", type: "noun", gender: "feminine" },
        { italian: "La parola d'accesso", english: "Password", type: "noun", gender: "feminine" },
        { italian: "La stampante", english: "Printer", type: "noun", gender: "feminine" },
        { italian: "Il motore di ricerca", english: "Search engine", type: "noun", gender: "masculine" },
        { italian: "Il sito", english: "Site", type: "noun", gender: "masculine" },
        { italian: "Il cellulare", english: "Cell phone", type: "noun", gender: "masculine" },
        { italian: "La cartella sistema", english: "System folder", type: "noun", gender: "feminine" },
        
        // Verbs
        { italian: "Cliccare", english: "To click", type: "verb", gender: "", conjugation: {
            present: { io: "clicco", tu: "clicchi", lui: "clicca", noi: "clicchiamo", voi: "cliccate", loro: "cliccano" }
        }},
        { italian: "Scaricare", english: "To download", type: "verb", gender: "", conjugation: {
            present: { io: "scarico", tu: "scarichi", lui: "scarica", noi: "scarichiamo", voi: "scaricate", loro: "scaricano" }
        }},
        { italian: "Rifare il booting", english: "To reboot", type: "verb", gender: "", conjugation: {
            present: { io: "rifaccio", tu: "rifai", lui: "rifa", noi: "rifacciamo", voi: "rifate", loro: "rifanno" }
        }},
        { italian: "Riavviare", english: "To restart", type: "verb", gender: "", conjugation: {
            present: { io: "riavvio", tu: "riavvii", lui: "riavvia", noi: "riavviamo", voi: "riavviate", loro: "riavviano" }
        }}
    ]
}
