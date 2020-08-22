var page_view_no;
var show_on = true;

// Initialise my Anime Loader
var elemets = document.querySelector('svg').children;
anime({
    targets: 'line',
    translateX: [
        { value: 270, duration: 1000, easing: 'easeOutSine' },
        { value: 0, duration: 1000, easing: 'easeOutSine' }
    ],
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    delay: anime.stagger(200, { grid: [16, 10], from: 7 }),
    loop: true
})

$(document).ready(function () {
    $('.preloader').delay(7500).fadeOut('slow');

    $.getJSON("https://api.countapi.xyz/hit/eni4sure.github.io-v0", function (data) {
        page_view_no = data.value;
    });

    setTimeout(() => {
        // Intro header
        new TypeIt("#interactive_summary_header", {
            speed: 50,
            startDelay: 1000
        })
            .type("😴😴💤💤💤", { delay: 3000 })
            .delete()
            .type("Ohh you\'re here already. 😅", { delay: 1500 })
            .delete()
            .type("Well, let's start this all over. 😄", { delay: 1000 })
            .delete()
            .type("Hello,")
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    $('span.ti-cursor:first').hide();
                });
            })
            .go();

        // Text
        new TypeIt("#interactive_summary", {
            speed: 100,
            startDelay: 12500
        })
            .type("my name is", { delay: 100 })
            .move(-9, { speed: 25, delay: 100 })
            .delete(1)
            .type('M')
            .move('END')
            .type(' Eniola Osabiya :)')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('I am a programmer')
            .delete(11)
            .type(' Software Developer 😎 && ...🤔')
            .pause(1000)
            .delete(4)
            .type('Content Writer && Entrpreneur ...🤔')
            .pause(1000)
            .delete(4)
            .type('&& Teenager 😊')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('I started coding when I was 12 yrs Old. I am currently 15 yrs Old ')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('I learnt how to code from my church 😁 ( Mountain Of Fire & Miracles Ministries )')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('So far I am familiar with ...')
            .break({ delay: 500 })
            .type('- HTML, CSS, Javascript, PHP, Laravel, NodeJS, Angular and')
            .move(-13, { delay: 200 })
            .delete(7)
            .type(' 🌚😅')
            .move('END')
            .type(' a little of Flutter and JAVA')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('Fun Fact!')
            .break({ delay: 500 })
            .type('this is the')
            .move(-10, { delay: 200 })
            .delete(1)
            .type('T')
            .move('END')
            .type(' ')
            .type(page_view_no)
            .type('th time, this page has been viewed. 🎉🎉')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('I hope you enjoyed visiting my site. 🤲🏾')
            .break({ delay: 500 })
            .break({ delay: 500 })
            .type('Also you can follow me on')
            .break({ delay: 500 })
            .type('- <a href="https://twitter.com/eni4sure" target="_blank">Twitter</a> ')
            .break({ delay: 500 })
            .type('- <a href="https://github.com/eni4sure" target="_blank">Github</a> ')
            .break({ delay: 500 })
            .type('- <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">LinkedIn</a> ')
            .break({ delay: 500 })
            .type('- <a href="https://facebook.com/eni4sure" target="_blank">Facebook</a> ')
            .exec(async () => {
                await new Promise((resolve, reject) => {
                    show_on = false;
                });
            })
            .go();
    }, 8000);

    setInterval(() => {
        if (show_on) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, 2);
}, 7500);