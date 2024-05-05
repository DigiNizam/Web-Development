// Function to generate personalized invitation messages for each guest
function generateInvitationMessages(guests, ...additionalDetails) {
    // Initialize an array to store the invitation messages
    const invitationMessages = [];

    // Loop through each guest object in the guests array
    for (const guest of guests) {
        // Destructure guest object to extract name and age
        const { name, age } = guest;

        // Generate the personalized invitation message
        let message = `Dear ${name},\n`;
        message += `You are invited to the party!`;

        // Append any additional details provided using the rest parameter
        if (additionalDetails.length > 0) {
            message += '\n' + additionalDetails.join('\n');
        }

        // Add the generated message to the invitationMessages array
        invitationMessages.push(message);
    }

    // Return the array of invitation messages
    return invitationMessages;
}

// Sample guest list
const guests = [
    { name: 'Alice', age: 30, rsvpStatus: 'yes' },
    { name: 'Bob', age: 25, rsvpStatus: 'no' },
    { name: 'Charlie', age: 35, rsvpStatus: 'yes' }
];

// Additional details to be included in the invitation message
const additionalDetails = [
    "The party will be held at 123 Party Lane.",
    "Please arrive by 7 PM.",
    "Feel free to bring a guest!"
];

// Call the function and get the invitation messages
const invitationMessages = generateInvitationMessages(guests, ...additionalDetails);

// Display the invitation messages in the HTML container
const invitationsContainer = document.getElementById('invitationsContainer');
invitationMessages.forEach((message, index) => {
    // Create a div element to display each message
    const invitationDiv = document.createElement('div');
    invitationDiv.classList.add('invitation');
    
    // Set the message text
    invitationDiv.textContent = message;

    // Append the invitation div to the container
    invitationsContainer.appendChild(invitationDiv);
});
