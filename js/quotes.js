const quotes = [
    {
        quote: 'When you go through hardships and decide not to surrender, that is strength.',
        author: 'Arnold Schwarzenegger',
    },
    {
        quote: 'It is kind of fun to do the impossible.',
        author: 'Walt Disney'
    },
    {
        quote: 'There are better starters than me but I¡¯m a strong finisher.',
        author: 'Usain Bolt',
    },
    {
        quote: 'I¡¯ve failed over and over and over again in my life and that is why I succeed.',
        author: 'Michael Jordan',
    },
    {
        quote: 'If you don¡¯t get out of the box you¡¯ve been raised in, you won¡¯t understand how much bigger the world is.',
        author: 'Angelina Jolie',
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great.',
        author: ' John D. Rockefeller',
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison',
    },
    {
        quote: 'The only thing worse than starting something and failing ... is not starting something.',
        author: ' Seth Godin',
    },
    {
        quote: 'The greatest mistake you can make in life is to be continually fearing you will make one.',
        author: 'Elbert Hubbard',
    },
    {
        quote: 'They always say time changes things, but you actually have to change them yourself. ',
        author: 'Andy Warhol',
    },
]



const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayquote = quotes[Math.floor(Math.random() * 10)];

quote.innerText = todayquote.quote;
author.innerText = todayquote.author;