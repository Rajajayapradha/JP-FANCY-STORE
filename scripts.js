document.addEventListener('DOMContentLoaded', function() {
    const facilitiesBtn = document.getElementById('facilitiesBtn');
    const facilitiesContent = document.getElementById('facilities');
    const experienceBtn = document.getElementById('experienceBtn');
    const experienceContent = document.getElementById('experience');
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackSection = document.getElementById('feedbackSection');
    const allFeedbacksSection = document.getElementById('allFeedbacksSection');
    const feedbackList = document.getElementById('feedbackList');
    const showAllFeedbacksBtn = document.getElementById('showAllFeedbacksBtn');
    const ratingButtons = document.querySelectorAll('.star');
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const whatsappButton = document.getElementById('whatsappButton');
    const offersBtn = document.getElementById('offersBtn');
    const offersContainer = document.getElementById('offersContainer');
 

    // Array to store submitted feedbacks
    const feedbacks = [];

    // Function to hide all sections except the specified one
    function hideOtherSections(showSection) {
        const sections = [facilitiesContent, experienceContent, feedbackSection, offersContainer,allFeedbacksSection];
        sections.forEach(section => {
            if (section !== showSection) {
                section.style.display = 'none';
            }
        });
    }

    // Function to toggle display of a section
    function toggleSection(section) {
        if (section.style.display === 'block') {
            section.style.display = 'none';
        } else {
            hideOtherSections(section);
            section.style.display = 'block';
        }
    }

    // Toggle visibility of facilities content
    facilitiesBtn.addEventListener('click', function() {
        toggleSection(facilitiesContent);
    });

    // Toggle visibility of experience content
    experienceBtn.addEventListener('click', function() {
        toggleSection(experienceContent);
    });
  
    offersBtn.addEventListener('click' ,function() {
        toggleSection(ffersContainer);
    });



    // Toggle visibility of feedback section
    feedbackBtn.addEventListener('click', function() {
        toggleSection(feedbackSection);
        allFeedbacksSection.style.display = 'none';
    });

    // Handle enrollment call button
    enrollmentBtn.addEventListener('click', function() {
        // Replace the phone number with your desired number
        const phoneNumber = '7010371812';
        window.open(`tel:${phoneNumber}`);
    });

    // Toggle visibility of all feedbacks section
    showAllFeedbacksBtn.addEventListener('click', function() {
        if (allFeedbacksSection.style.display === 'block') {
            allFeedbacksSection.style.display = 'none';
        } else {
            hideOtherSections(allFeedbacksSection);
            allFeedbacksSection.style.display = 'block';
        }
    });

    // Handle star rating button clicks
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ratingValue = parseInt(button.dataset.rating);
            handleRating(ratingValue);
        });
    });

    // Submit feedback form
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const feedbackMessage = document.getElementById('feedbackMessage').value.trim();
        if (feedbackMessage) {
            feedbacks.push(feedbackMessage);
            document.getElementById('feedbackMessage').value = '';
            feedbackSection.style.display = 'none';
        }
    });

    // Function to handle user rating submission
    function handleRating(rating) {
        ratings[rating]++;
        displayRatings();
        thankYouMessage.style.display = 'block';
        disableStarButtons();
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
            enableStarButtons();
        }, 3000);
    }

    // Function to display the ratings breakdown percentages
    function displayRatings() {
        const totalRatings = Object.values(ratings).reduce((total, count) => total + count, 0);

        for (let i = 1; i <= 5; i++) {
            const count = ratings[i] || 0;
            const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
            const percentageElement = document.getElementById(`percentage${i}`);
            if (percentageElement) {
                percentageElement.textContent = `${percentage.toFixed(0)}%`;
            }
        }
    }

    // Function to disable star rating buttons after submission
    function disableStarButtons() {
        ratingButtons.forEach(button => {
            button.disabled = true;
        });
    }

    // Function to enable star rating buttons after hiding the "Thank You" message
    function enableStarButtons() {
        ratingButtons.forEach(button => {
            button.disabled = false;
        });
    }

    // Ratings object to track the count of each star rating
    const ratings = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    // Initialize event listeners
    whatsappButton.addEventListener('click', sendWhatsAppMessage);

    // Display initial ratings
    displayRatings();
});

document.addEventListener('DOMContentLoaded', function() {
    const offersBtn = document.getElementById('offersBtn');
    const offersContainer = document.getElementById('offersContainer');
    const offersList = document.getElementById('offersList');

    // Array of offers
    const offers = [
        "Explore our stunning wedding collection featuring exquisite bridal jewelry, from elegant necklaces to intricately crafted bangles and rings.",
        "Discover timeless pieces that will add a touch of glamour to your special day, crafted with meticulous attention to detail and quality.",
        "Make your wedding day unforgettable with our handpicked selection of accessories, designed to complement any bridal style and enhance your beauty."

    ];

    // Event listener for the offers button
    offersBtn.addEventListener('click', function() {
        // Toggle visibility of the offers container
        if (offersContainer.style.display === 'block') {
            // If the offers container is currently visible, hide it
            offersContainer.style.display = 'none';
        } else {
            // Otherwise, show the offers container and populate the offers list
            offersContainer.style.display = 'block';
            displayOffers();
        }
    });

    // Function to display the offers list
    function displayOffers() {
        // Clear existing offers
        offersList.innerHTML = '';

        // Populate the offers list
        offers.forEach(offer => {
            const listItem = document.createElement('li');
            listItem.textContent = offer;
            offersList.appendChild(listItem);
        });
    }
});

// Array to store submitted feedbacks
const feedbacks = [];

// Function to hide all sections except the specified one
function hideOtherSections(showSection) {
    const sections = [facilitiesContent, experienceContent, feedbackSection, allFeedbacksSection];
    sections.forEach(section => {
        if (section !== showSection) {
            section.style.display = 'none';
        }
    });
}

// Function to toggle display of a section
function toggleSection(section) {
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        hideOtherSections(section);
        section.style.display = 'block';
    }
}

// Toggle visibility of facilities content
facilitiesBtn.addEventListener('click', function() {
    toggleSection(facilitiesContent);
    hideOffersContainer(); // Hide offers container when other sections are shown
});

// Toggle visibility of experience content
experienceBtn.addEventListener('click', function() {
    toggleSection(experienceContent);
    hideOffersContainer(); // Hide offers container when other sections are shown
});

// Toggle visibility of feedback section
feedbackBtn.addEventListener('click', function() {
    toggleSection(feedbackSection);
    allFeedbacksSection.style.display = 'none';
    hideOffersContainer(); // Hide offers container when feedback section is shown
});

// Function to handle sending WhatsApp message
function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message with URL-encoded content
    const whatsappMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

    // Construct the WhatsApp URL with the phone number and message
    const whatsappURL = `https://wa.me/+918682877392?text=${whatsappMessage}`;

    // Open the WhatsApp URL in a new window/tab
    window.open(whatsappURL);
}

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const additionalImagesContainer = document.getElementById('additionalImagesContainer');
            const additionalImages = additionalImagesContainer.querySelector('.additional-images');

            // Clear previous images
            additionalImages.innerHTML = '';

            // Create and append additional images
            for (let i = 1; i <= 5; i++) {
                const img = document.createElement('img');
                img.src = `${target}_${i}.jpg`; // Assuming image filenames like IMG_20240509_194038_1.jpg
                img.alt = `Image ${i}`;
                img.addEventListener('click', function() {
                    // Handle click on additional image (if needed)
                    // Example: Open modal or do something with the clicked image
                    console.log(`Clicked ${img.src}`);
                });
                additionalImages.appendChild(img);
            }

            // Show additional images container and hide main gallery
            additionalImagesContainer.classList.remove('hidden');
            document.getElementById('gallery').classList.add('hidden');
        });
    });

    // Back button functionality
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        document.getElementById('additionalImagesContainer').classList.add('hidden');
        document.getElementById('gallery').classList.remove('hidden');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const additionalImagesContainer = document.querySelector('#additionalImagesContainer');
    const backButton = document.querySelector('#backButton');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            // Clear previous additional images
            additionalImagesContainer.querySelector('.additional-images').innerHTML = '';

            // Create and append additional images
            for (let i = 1; i <= 5; i++) {
                const img = document.createElement('img');
                img.src = `${target}_${i}.jpg`; // Assuming image filenames like IMG_20240509_194038_1.jpg
                img.alt = `Image ${i}`;
                img.addEventListener('click', function() {
                    console.log(`Clicked ${img.src}`);
                });
                additionalImagesContainer.querySelector('.additional-images').appendChild(img);
            }

            // Show additional images container and hide main gallery
            additionalImagesContainer.classList.remove('hidden');
            document.getElementById('gallery').classList.add('hidden');
        });
    });

    // Back button functionality
    backButton.addEventListener('click', function() {
        additionalImagesContainer.classList.add('hidden');
        document.getElementById('gallery').classList.remove('hidden');
    });
});
