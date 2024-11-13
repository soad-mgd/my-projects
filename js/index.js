function randomText() {
    var text = [
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        '“A room without books is like a body without a soul.”',
        '“Be yourself; everyone else is already taken.”',
       
        '“So many books, so little time.”',
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    ];
    var userNames = [
        '― Oscar Wilde',
        '― Marilyn Monroe',
        '― Frank Zappa',
        '― Albert Einstein',
        '― Marcus Tullius Cicero',
        '― Bernard M. Baruch',
        
    ];
    
    var num = Math.floor(Math.random() * text.length);

    document.getElementById("quote").innerHTML = text[num] + "<br><br>" + "<span class='author'>" + userNames[num] + "</span>";
}

randomText();
