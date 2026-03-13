const menuBtn = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');

menuBtn.onclick = ()=>{
    navlinks.classList.toggle('active');
}

const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.onsubmit = (e)=>{
        e.preventDefault();
        alert('Thankyou for registering your intrest. An IDR representative will call you shortly.');
        contactForm.reset();
    };
}


document.querySelectorAll('.nav-links a').forEach(link=>{
    link.onclick = ()=> navLinks.classList.remove('active');
})

