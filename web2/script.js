document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("inputText");
    const displayText = document.getElementById("displayText");
    const resultSection = document.getElementById("resultSection");
    const clearButton = document.getElementById("clearButton");
    const submitButton = document.getElementById("submitButton");

    // Predefined examples for classification
    const examples = [
        { text: "Congratulations! You have won a free prize. Claim your money now.", label: "Spam" },
        { text: "Hi John, I hope you are doing well. Let's catch up soon.", label: "Ham" },
        { text: "Win a free vacation to Hawaii. Click here to claim your prize.", label: "Spam" },
        { text: "Dear customer, your order has been shipped and will arrive soon.", label: "Ham" },
        { text: "Get free money by participating in our survey.", label: "Spam" },
        { text: "Please find the attached report for your review.", label: "Ham" }
    ];

    // Clear Text Functionality
    clearButton.addEventListener("click", () => {
        console.log("Clear button clicked");
        textArea.value = "";
        resultSection.hidden = true;
    });

    // Simple Classifier
    function classifyText(text) {
        console.log("Classifying text");
        const example = examples.find(example => example.text.toLowerCase() === text.toLowerCase());
        return example ? example.label : "Unknown";
    }

    // Display Entered Text with Classification
    submitButton.addEventListener("click", () => {
        console.log("Submit button clicked");
        const input = textArea.value.trim();
        if (input) {
            const classification = classifyText(input);
            displayText.textContent = `Your entered mail is "${input}" and it is classified as "${classification}"`;
            resultSection.hidden = false;
        } else {
            alert("Please enter some text before submitting!");
        }
    });
});
