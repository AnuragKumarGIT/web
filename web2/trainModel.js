const ml5 = require('ml5');
const fs = require('fs');

// Create a new Naive Bayes classifier
const classifier = ml5.naiveBayes();

// Training data
const trainingData = [
    { text: "Congratulations! You have won a free prize. Claim your money now.", label: "Spam" },
    { text: "Hi John, I hope you are doing well. Let's catch up soon.", label: "Ham" },
    { text: "Win a free vacation to Hawaii. Click here to claim your prize.", label: "Spam" },
    { text: "Dear customer, your order has been shipped and will arrive soon.", label: "Ham" },
    { text: "Get free money by participating in our survey.", label: "Spam" },
    { text: "Please find the attached report for your review.", label: "Ham" }
];

// Add training data to the classifier
trainingData.forEach(item => {
    classifier.addDocument(item.text, item.label);
});

// Train the classifier
classifier.train(() => {
    console.log('Training complete');

    // Save the trained model to a file
    classifier.save('model.json', (err, model) => {
        if (err) {
            console.error('Error saving model:', err);
        } else {
            console.log('Model saved as model.json');
        }
    });
});
