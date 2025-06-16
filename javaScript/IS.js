const instagramUser = 'cxrwhy10'; 
const whatsappNumber = '78355186'; 
const emailAddress = 'cxrwhy10@gmail.com';

const instagramLink = document.getElementById('instagram-link');
const whatsappLink = document.getElementById('whatsapp-link');
const emailLink = document.getElementById('email-link');

if (instagramLink) {
    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(`https://www.instagram.com/${instagramUser}/`, '_blank');
    });

if (whatsappLink) {
    whatsappLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    });

if (emailLink) {
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = `mailto:${emailAddress}`;
    });
}
}
};