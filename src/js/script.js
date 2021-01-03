// * BURGER MENU
const burger_area = document.getElementById('header-burger-area');
const burger = document.getElementById('header-burger');
const nav = document.getElementById('header-nav');

burger_area.addEventListener('click', () => {
    nav.classList.toggle('nav-is-active');
    burger.classList.toggle('nav-is-active');
    document.querySelector('body').classList.toggle('nav-is-active');
});

// * NUMBER GROW UP
const number_area = document.getElementById('home-number-show');

if (number_area != null) {
    var intersectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].intersectionRatio <= 0) return;
        intersectionObserver.unobserve(number_area);

        const counters = document.querySelectorAll('.number');
        const speed = 97;

        counters.forEach((counter) => {
            counter.innerText = 0;

            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const inc = ~~(target / speed);

                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 11);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    });

    intersectionObserver.observe(number_area);
}

// * PARTNER CAROUSEL
if (document.querySelector('.partner-content') != null) {
    var carousel_partner = new Siema({
        selector: '.partner-content',
        duration: 500,
        easing: 'ease-out',
        perPage: {
            768: 3,
            960: 5,
        },
        draggable: true,
        loop: true,
    });

    setInterval(() => {
        carousel_partner.next();
    }, 4000);
}

// * FEEDBACK CAROUSEL
var block_auto_slide_feedback = true;
var feedback_dots = document.querySelectorAll('.feedback-dot');
var current_feedback_dot = feedback_dots[0];

if (document.querySelector('.feedback-content') != null) {
    var carousel_feedback = new Siema({
        selector: '.feedback-content',
        duration: 500,
        easing: 'ease-out',
        perPage: {
            768: 2,
        },
        draggable: true,
        loop: true,
        onChange: () => {
            current_feedback_dot.classList.toggle('is-active');
            current_feedback_dot = feedback_dots[carousel_feedback.currentSlide];
            current_feedback_dot.classList.toggle('is-active');
            block_auto_slide = true;
        },
    });

    feedback_dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel_feedback.goTo(index);
        });
    });

    setInterval(() => {
        if (block_auto_slide_feedback) {
            block_auto_slide_feedback = false;
        } else {
            carousel_feedback.next();
        }
    }, 8000);
}
