const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const todayimg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement('img');
bgimg.src = `../img/${todayimg}`;


document.body.appendChild(bgimg);


