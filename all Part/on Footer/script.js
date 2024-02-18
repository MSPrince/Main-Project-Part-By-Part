const faqItems = [
    {
        question: "What is online doctor consultation?",
        answer: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet."
    },
    {
        question: "Are your online doctors qualified?",
        answer: "We follow a strict verification process for every doctor providing online medical services on A Doctor's Diary. Our team manually verifies necessary documents, registrations, and certifications for every doctor."
    },
    {
        question: "How do I start online consultation with doctors on A Doctor's Diary?",
        answer: "Starting an online doctor consultation is very simple on A Doctor's Diary. Follow these 4 simple steps: <br> • Choose your health concern <br> • Connect with a doctor within 2 minutes <br> • Ask your queries to the doctor via audio or video call <br> • Get a valid online doctor prescription and a 3-day free <br> online doctor consultation."
    },
    {
        question: "Is online doctor consultation safe and secured on A Doctor's Diary?",
        answer: "The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption."
    },
    {
        question: "What happens if I don't get a response from a doctor?",
        answer: "In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund."
    },
    {
        question: "Can I do a free online doctor consultation on A Doctor's Diary?",
        answer: "Avail a free online consultation with top doctors in India during the India Health Hour. Click here for more details. We have the free questions service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours."
    }
];

// Function to dynamically populate FAQ items
function populateFAQ() {
    const faqList = document.getElementById('faq-list');
    faqItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="question-arrow">
          <span class="question">${item.question}</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <p>${item.answer}</p>
        <span class="line"></span>
      `;
        faqList.appendChild(listItem);
    });
}

// Call the function to populate FAQ items
populateFAQ();



// ---------------------------------------------faq section start--------------------------------------------------------->>
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}
// ---------------------------------------------faq section End--------------------------------------------------------->>

