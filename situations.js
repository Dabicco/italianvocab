// Function to generate a random situation for practice
function generateRandomSituation(displayElement) {
    const situations = [
        "You are at a furniture store. Find out which options in furniture the store has for your new apartment.",
        "You are on vacation in Roma and want to buy a train ticket to Milan. Go to the station and buy a ticket. Find out all the needed information.",
        "You are eating at a restaurant and there is something wrong with your meal. Explain to your waiter why you need another dish and what you want.",
        "You are staying with your host family in Italy. Explain what you would like for your birthday and why.",
        "You are feeling sick on vacation in Italy. Explain to the farmacist what is wrong and what medicine you want.",
        "You are sitting next to a new student from Italy in class. Get to know that person.",
        "Your best friend wants to go to the movies tonight. Explain why you cannot go.",
        "You are talking to a real estate agent. You want to rent a house for a vacation. Explain what you need in a house.",
        "You want to go to on a class trip. I am your teacher. Give me information on the trip you would like us to go on.",
        "We are friends. We are planning a trip with our families who have never met. Tell me about your family and ask me questions about mine.",
        "You are in a clothing store talking to a salesperson. You are looking for a birthday gift. Ask for suggestions.",
        "You are the Customs Agent at the airport. You need to ask me questions before I can enter the country.",
        "I am your Guidance Counselor. You want to find out which after school activities are available to you.",
        "You are living with a Host Family in Italy. You have been asked to go food shopping. You meet me in town and tell me about all the different stores you need to go to.",
        "You are living with a host parent in Italy. There are many chores to be done and your host parents are sick. We will talk about the different chores that need to be done and divide the work to be done.",
        "You are talking on the phone with your friend in Italy. You are both discussing the weather in your countries at different times of the year and how that is affecting your activities.",
        "You are trying to come up with dates to go on vacation. Discuss what different people in your family are doing on different dates to come up with a compromise to go on vacation.",
        "You are in Italy on vacation. You need to make a reservation at a hotel for 3 nights. One person is the travel agent and the other is a client.",
        "You are cooking a recipe for lunch in Italy. You are sharing this fabulous recipe with your friend. Explain how to make it.",
        "I am your host parent in Italy. You are sad because you want to go home. Tell me how you feel about living in Italy.",
        "You are going to a party in Italy. Tell me about what you like to do at parties and the friends going to the party.",
        "I am an exchange student from a school in Italy. Ask me about my school, schedule, teachers and classes.",
        "You are a new student from Italy. You want to join the soccer team. Get information about the team, schedule and requirements to join.",
        "You are going to a restaurant to order food for your big birthday party. You are speaking to the owner about everything you want. Include food and drinks for your meal.",
        "You talking to your Italian friend about your town. Please describe the places in your town and what you can do there.",
        "You want to go to the pool after school but the weather is not good. Please explain to your friend your concern and suggest something else instead.",
        "You are talking to your teacher and want to convince her not to give an exam tomorrow.",
        "You are taking a trip with your family. Your parents want to drive to the destination but you want to fly. Discuss the pros and cons to both."
    ];
    
    // Get a random situation
    const randomIndex = Math.floor(Math.random() * situations.length);
    const randomSituation = situations[randomIndex];
    
    // Update the display with the random situation
    displayElement.innerHTML = `<div class="situation-card">
        <h3>Practice Situation</h3>
        <p>${randomSituation}</p>
    </div>`;
    
    // Add animation class to show it's new
    displayElement.querySelector('.situation-card').classList.add('new-situation');
    
    // Remove the animation class after the animation completes
    setTimeout(() => {
        const card = displayElement.querySelector('.situation-card');
        if (card) {
            card.classList.remove('new-situation');
        }
    }, 1000);
}
