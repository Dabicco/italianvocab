// Italian Conversations - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the conversations page
    initializeConversations();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize fullscreen button
    initializeFullscreenButton();
});

// Initialize the conversations page
function initializeConversations() {
    const container = document.querySelector('.container');
    
    // Create conversation list
    const conversationList = document.createElement('div');
    conversationList.className = 'conversation-list';
    
    // Add conversation cards
    for (const key in conversationsData) {
        const conversation = conversationsData[key];
        const card = createConversationCard(key, conversation);
        conversationList.appendChild(card);
    }
    
    container.appendChild(conversationList);
    
    // Create conversation detail container
    const conversationDetail = document.createElement('div');
    conversationDetail.className = 'conversation-detail';
    conversationDetail.id = 'conversation-detail';
    container.appendChild(conversationDetail);
    
    // Create back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
}

// Create a conversation card
function createConversationCard(key, conversation) {
    const card = document.createElement('div');
    card.className = 'conversation-card fade-in';
    card.dataset.key = key;
    
    const title = document.createElement('h3');
    title.textContent = conversation.title;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'card-subtitle';
    subtitle.textContent = conversation.subtitle || '';
    
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = conversation.description || 'Click to view conversation';
    
    card.appendChild(title);
    if (conversation.subtitle) {
        card.appendChild(subtitle);
    }
    card.appendChild(description);
    
    // Add click event to show conversation detail
    card.addEventListener('click', function() {
        showConversationDetail(key);
    });
    
    return card;
}

// Show conversation detail
function showConversationDetail(key) {
    const conversation = conversationsData[key];
    const detailContainer = document.getElementById('conversation-detail');
    
    // Clear previous content
    detailContainer.innerHTML = '';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'conversation-header';
    
    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h2');
    title.className = 'conversation-title';
    title.textContent = conversation.title;
    
    titleContainer.appendChild(title);
    
    if (conversation.subtitle) {
        const subtitle = document.createElement('p');
        subtitle.className = 'conversation-subtitle';
        subtitle.textContent = conversation.subtitle;
        titleContainer.appendChild(subtitle);
    }
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-conversation';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        detailContainer.classList.remove('active');
    });
    
    header.appendChild(titleContainer);
    header.appendChild(closeBtn);
    
    detailContainer.appendChild(header);
    
    // Create sections
    conversation.sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'conversation-section fade-in';
        
        if (section.title) {
            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = section.title;
            sectionElement.appendChild(sectionTitle);
        }
        
        const dialogue = document.createElement('div');
        dialogue.className = 'dialogue';
        
        section.dialogues.forEach(line => {
            const dialogueLine = document.createElement('div');
            dialogueLine.className = 'dialogue-line';
            
            const speaker = document.createElement('div');
            speaker.className = 'speaker';
            speaker.textContent = line.speaker;
            
            const text = document.createElement('div');
            text.className = 'text';
            text.textContent = line.text;
            
            // Add tooltip for translation hint
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = 'Click to translate';
            text.appendChild(tooltip);
            
            const translation = document.createElement('div');
            translation.className = 'translation';
            
            // Add click event to show translation
            dialogueLine.addEventListener('click', function() {
                if (!dialogueLine.classList.contains('show-translation')) {
                    // Use translation directly from data structure if available
                    if (line.translation) {
                        translation.textContent = line.translation;
                    } else {
                        // Fallback to generated translation if not provided in data
                        const translatedText = generateTranslation(line.text);
                        translation.textContent = translatedText;
                    }
                    dialogueLine.classList.add('show-translation');
                } else {
                    dialogueLine.classList.remove('show-translation');
                }
            });
            
            dialogueLine.appendChild(speaker);
            dialogueLine.appendChild(text);
            dialogueLine.appendChild(translation);
            
            dialogue.appendChild(dialogueLine);
        });
        
        sectionElement.appendChild(dialogue);
        detailContainer.appendChild(sectionElement);
    });
    
    // Show the detail container
    detailContainer.classList.add('active');
    
    // Scroll to the detail container
    detailContainer.scrollIntoView({ behavior: 'smooth' });
}

// Generate a translation for the text
function generateTranslation(text) {
    // Basic translations for common Italian phrases
    const translations = {
        // Greetings and basic expressions
        "Buongiorno": "Good morning/Good day",
        "Buonasera": "Good evening",
        "Ciao": "Hello/Hi/Bye",
        "Arrivederci": "Goodbye",
        "Arrivederla": "Goodbye (formal)",
        "Grazie": "Thank you",
        "Prego": "You're welcome/Please",
        "Scusi": "Excuse me",
        "Mi scusi": "Excuse me (formal)",
        "Per favore": "Please",
        "Per piacere": "Please",
        "Sì": "Yes",
        "No": "No",
        "Va bene": "Okay/All right",
        "Perfetto": "Perfect",
        "Ecco": "Here is/Here you are",
        
        // Restaurant phrases
        "Vogliamo una tavola per due": "We would like a table for two",
        "abbiamo un tavolo molto bello": "we have a very nice table",
        "Ecco il menu": "Here is the menu",
        "I piatti del giorno sono": "The dishes of the day are",
        "Che cosa vuole da bere": "What would you like to drink",
        "Vorrei": "I would like",
        "Ecco il cibo": "Here is the food",
        "Che vuole da primo": "What would you like for the first course",
        "per secondo mi porta": "for the second course bring me",
        "E di contorno": "And for the side dish",
        "per favore": "please",
        "Li piace": "Do you like it",
        "Vuole formaggio": "Would you like cheese",
        "Vogliono un dolce o caffè": "Would you like dessert or coffee",
        "Tutto bene": "Everything good",
        "Il conto per piacere": "The bill please",
        "Pago io": "I'll pay",
        "Come possiamo pagare": "How can we pay",
        "Accettiamo assegni, carte di credito e contanti": "We accept checks, credit cards and cash",
        
        // Store phrases
        "Come posso aiutarla": "How can I help you",
        "Che taglia/misura porta": "What size do you wear",
        "Porto": "I wear",
        "Che colore desidera": "What color would you like",
        "Le piace": "Do you like it",
        "È troppo grande": "It's too big",
        "È troppo piccolo": "It's too small",
        "Posso provare": "Can I try on",
        "Vada in cabina": "Go to the fitting room",
        "Che bello": "How nice",
        "Mi sta proprio bene": "It fits me very well",
        "Non mi piace": "I don't like it",
        "Non mi va": "I don't want it",
        "È fuori moda": "It's out of fashion",
        "Quanto costa": "How much does it cost",
        "Costa": "It costs",
        "Ma, è troppo caro": "But it's too expensive",
        "Mi fa uno sconto": "Can you give me a discount",
        "uno sconticino si può fare": "a small discount can be done",
        "Facciamo": "Let's make it",
        "mi dispiace ma il prezzo è fisso": "I'm sorry but the price is fixed",
        
        // Hotel phrases
        "Voglio prenotare una camera": "I want to book a room",
        "Quando vuola la camera": "When do you want the room",
        "Per quanti giorni vuole la camera": "For how many days do you want the room",
        "Devo partire": "I have to leave",
        "Che tipo di camera vuole": "What type of room do you want",
        "Singola, doppia o matrimoniale": "Single, double or matrimonial",
        "Quanto costa per notte": "How much does it cost per night",
        "Vuole la camera con prima colazione inclusa": "Do you want the room with breakfast included",
        "prima colazione": "breakfast",
        "L'albergo ha anche una piscina e ristorante": "Does the hotel also have a pool and restaurant",
        "palestra, sauna": "gym, sauna",
        "Una camera con prima colazione costa": "A room with breakfast costs",
        "Euro per notte": "Euros per night",
        "voglio fare una prenotazione": "I want to make a reservation",
        "Che cosa posso fare vicino all'albergo": "What can I do near the hotel",
        "Ci sono molti ristoranti, teatri e monumenti vicino all'albergo": "There are many restaurants, theaters and monuments near the hotel",
        "prendere il metro o l'autobus": "take the subway or bus",
        "andare in centro": "go downtown",
        "L'albergo è molto centrale": "The hotel is very central",
        "Accettiamo carte di credito per la prenotazione": "We accept credit cards for the reservation",
        "La camera e' pronta dopo le": "The room is ready after",
        "A presto": "See you soon",
        "Buon Viaggio": "Have a good trip",
        
        // Doctor phrases
        "Come sta": "How are you",
        "Non sto bene": "I'm not feeling well",
        "Sono malato": "I'm sick",
        "Mi dispiace": "I'm sorry",
        "Che cosa ha": "What do you have",
        "Ho mal di testa": "I have a headache",
        "mal di gola": "sore throat",
        "Capisco": "I understand",
        "Ha la febbre": "Do you have a fever",
        "ho la febbre": "I have a fever",
        "Ha la tosse": "Do you have a cough",
        "ho anche la tosse": "I also have a cough",
        "Sembra un raffreddore": "It seems like a cold",
        "Le raccomando di prendere un'aspirina": "I recommend you take an aspirin",
        "per la febbre e il mal di testa": "for the fever and headache",
        "Devo stare a letto": "Should I stay in bed",
        "stia a letto per due giorni": "stay in bed for two days",
        "beva molta acqua": "drink plenty of water",
        "Si senta meglio presto": "Feel better soon",
        
        // Train station phrases
        "Vorrei un biglietto per": "I would like a ticket to",
        "A che ora è il prossimo treno per": "What time is the next train to",
        "Il prossimo treno parte alle": "The next train leaves at",
        "Vuole un treno diretto o locale": "Do you want a direct or local train",
        "Voglio un treno diretto": "I want a direct train",
        "A che ora arriva il treno a": "What time does the train arrive in",
        "Il treno arriva alle": "The train arrives at",
        "Quanti biglietti vuole": "How many tickets do you want",
        "Voglio un biglietto": "I want one ticket",
        "Vuole un biglietto di andata e ritorno o solo andata": "Do you want a round-trip or one-way ticket",
        "Vuole un biglietto di prima o seconda classe": "Do you want a first or second class ticket",
        "Quanto costa il biglietto": "How much does the ticket cost",
        "Costa": "It costs",
        "Il treno parte dal binario numero": "The train departs from platform number",
        "E' importante arrivare dieci minuti prima": "It's important to arrive ten minutes before",
        "Posso prenotare un posto": "Can I reserve a seat",
        "il numero del posto e sul biglietto": "the seat number is on the ticket",
        "Come posso pagare": "How can I pay",
        "Accettiamo contanti e carte di credito": "We accept cash and credit cards",
        
        // Personal information phrases
        "Come stai": "How are you",
        "Sto bene": "I'm fine",
        "male": "bad",
        "cosi,cosi": "so-so",
        "E tu": "And you",
        "Come ti chiami": "What's your name",
        "Mi chiamo": "My name is",
        "Piacere": "Nice to meet you",
        "Molto Lieto": "Very pleased",
        "Di dove sei": "Where are you from",
        "Sono di": "I'm from",
        "Dove abiti": "Where do you live",
        "Abito a": "I live in",
        "Qual è la tua nazionalità": "What is your nationality",
        "Sono americano": "I am American (male)",
        "Sono americana": "I am American (female)",
        "Achiuuu": "Achoo (sneeze)",
        "Salute": "Bless you/Health",
        "Quanti anni hai": "How old are you",
        "Ho": "I have/I am",
        "anni": "years old",
        "Qual è la tua età": "What is your age",
        "Qual è il tuo numero di telefono": "What is your phone number",
        "Mio numero è": "My number is",
        "Mio numero di telefono è": "My phone number is",
        "Qual è il tuo indirizzo": "What is your address",
        "Mio indirizzo è via": "My address is street",
        "numero": "number",
        "Qual è il tuo codice postale": "What is your postal code",
        "Mio codice postale è": "My postal code is",
        "Qual è il tuo cibo preferito": "What is your favorite food",
        "Mio cibo preferito è": "My favorite food is",
        "Qual è il tuo film preferito": "What is your favorite movie",
        "Mio film preferito è": "My favorite movie is",
        "Qual è il tuo libro preferito": "What is your favorite book",
        "Mio libro preferito è": "My favorite book is",
        "Quando è il tuo compleanno": "When is your birthday",
        "È il": "It's on",
        "Chi è il tuo attore preferito": "Who is your favorite actor",
        "Mio attore preferito è": "My favorite actor is",
        "A Dopo": "See you later",
        "A Domani": "See you tomorrow",
        
        // Family phrases
        "Come si chiama tua madre e tuo padre": "What are your mother and father's names",
        "Mia madre si chiama": "My mother's name is",
        "e mio padre si chiama": "and my father's name is",
        "Di dove è tuo nonno": "Where is your grandfather from",
        "È di": "He/She is from",
        "Di dove è tua nonna": "Where is your grandmother from",
        "Quanti anni ha tua sorella o fratello": "How old is your sister or brother",
        "Ha": "He/She has/is",
        "Quando è il compleanno di tua madre": "When is your mother's birthday",
        "Qual è il film preferito di tuo padre": "What is your father's favorite movie",
        "Il film preferito di mio padre è": "My father's favorite movie is",
        "Dove abita tua zia": "Where does your aunt live",
        "Mia zia abita a": "My aunt lives in",
        "Qual è la nazionalità di tuo cugino": "What is your cousin's nationality",
        "Mio cugino è": "My cousin is",
        "Tua nonna parla italiano": "Does your grandmother speak Italian",
        "Tuo padre guarda sport alla televisione": "Does your father watch sports on television",
        "Tua madre lavora molto": "Does your mother work a lot"
    };
    
    // Check for exact matches
    if (translations[text]) {
        return translations[text];
    }
    
    // Check for partial matches
    for (const [italian, english] of Object.entries(translations)) {
        if (text.includes(italian)) {
            return english + " (partial translation)";
        }
    }
    
    // If no translation is found
    return "Translation not available. Click to hide.";
}

// Set up event listeners
function setupEventListeners() {
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize fullscreen button
function initializeFullscreenButton() {
    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'fullscreen-btn';
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullscreenBtn.title = 'Toggle fullscreen';
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    document.body.appendChild(fullscreenBtn);
}

// Toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
