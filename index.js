let myArray = ["The journey of a thousand miles begins with one step. - Lao Tzu", 
"You must be the change you wish to see in the world. - Mahatma Gandhi", "You only live once but if you do it right once is enough. - Mae West", "Tough times never last but tough people do. - Robert H. Schuller", "Whether you think you can or you think you can't, you're right. - Henry Ford", "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain", "The opposite of love is not hate; it’s indifference. - Elie Wiesel","Never let the fear of striking out keep you from playing the game. - Babe Ruth" ]


function myQuote () {
    alert(myArray[Math.floor(Math.random() * (myArray.length))])
};