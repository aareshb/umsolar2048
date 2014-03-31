// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "../img/212/2048.png",
        "../img/212/1024.png",
        "../img/212/512.png",
        "../img/212/256.png",
        "../img/212/128.png",
        "../img/212/64.png",        
        "../img/212/32.png",
        "../img/212/16.png",
        "../img/212/8.png",        
        "../img/212/4.png",
        "../img/212/2.png",
        "../img/114/.png",
        "../img/114/.png",
        "../img/114/.png",
        "../img/114/.png",
        "../img/114/.png",
        "../img/114/.png",        
        "../img/114/.png",
        "../img/114/.png",
        "../img/114/.png",        
        "../img/114/.png",
        "../img/114/.png",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
