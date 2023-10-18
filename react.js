const subscribeButton = document.querySelector('.subscribe');
const emailInput = document.querySelector('.email-form input');
subscribeButton.addEventListener('click', function () {
    const userEmail = emailInput.value;
    if (userEmail) {
        alert('Thank you for join our team on discord . You will be updated soon ,your request is sent to be admin with email: ' + userEmail );
        
    } else {
        alert('Please enter your email to subscribe.');
    }
});

const profiles = document.querySelectorAll('.profile');

        profiles.forEach(profile => {
            profile.addEventListener('mouseover', () => {
                profile.classList.add('hovered');
            });

            profile.addEventListener('mouseout', () => {
                profile.classList.remove('hovered');
            });
        });


var communityForm = document.getElementById('community-form');
communityForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    alert('Thank you, ' + name + ', for applying core membership of SCIT.We will contact you soon as our shortlisting process complete and you shortlist on the basis of your skills');
});



var faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(faqItem) {
    var question = faqItem.querySelector('.faq-question');
    var answer = faqItem.querySelector('.faq-answer');

    question.addEventListener('click', function() {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});