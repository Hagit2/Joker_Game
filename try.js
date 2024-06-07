var playerHand = [];
var computerHand = [];
var pot = [];
var currentArr = ["", ""];
var garbageArr = ["", ""]
var sum_u = 0;
var sum_c = 0;
let x;
var x3;
var timeLeft;
function clossse() {
    window.close("home_page.html")
    console.log(pot)

}
function start(c, u) {


    x3 = localStorage.getItem("level")



    //כל הכרטסים
    const deck = [
        { suit: 'hearts', value: 1, src: 'קלפים/p1.jpg' }, { suit: 'hearts', value: 2, src: 'קלפים/p2.jpg' }, { suit: 'hearts', value: 3, src: 'קלפים/p3.jpg' }, { suit: 'hearts', value: 4, src: 'קלפים/p4.jpg' }, { suit: 'hearts', value: 5, src: 'קלפים/p5.jpg' }, { suit: 'hearts', value: 6, src: 'קלפים/p6.jpg' }, { suit: 'hearts', value: 7, src: 'קלפים/p7.jpg' }, { suit: 'hearts', value: 8, src: 'קלפים/p8.jpg' }, { suit: 'hearts', value: 9, src: 'קלפים/p9.jpg' }, { suit: 'hearts', value: 10, src: 'קלפים/p10.jpg' }, { suit: 'hearts', value: 11, src: 'קלפים/p11.jpg' }, { suit: 'hearts', value: 12, src: 'קלפים/p12.jpg' }, { suit: 'hearts', value: 13, src: 'קלפים/p13.jpg' },
        { suit: 'diamonds', value: 1, src: 'קלפים/p1.jpg' }, { suit: 'diamonds', value: 2, src: 'קלפים/p2.jpg' }, { suit: 'diamonds', value: 3, src: 'קלפים/p3.jpg' }, { suit: 'diamonds', value: 4, src: 'קלפים/p4.jpg' }, { suit: 'diamonds', value: 5, src: 'קלפים/p5.jpg' }, { suit: 'diamonds', value: 6, src: 'קלפים/p6.jpg' }, { suit: 'diamonds', value: 7, src: 'קלפים/p7.jpg' }, { suit: 'diamonds', value: 8, src: 'קלפים/p8.jpg' }, { suit: 'diamonds', value: 9, src: 'קלפים/p9.jpg' }, { suit: 'diamonds', value: 10, src: 'קלפים/p10.jpg' }, { suit: 'diamonds', value: 11, src: 'קלפים/p11.jpg' }, { suit: 'diamonds', value: 12, src: 'קלפים/p12.jpg' }, { suit: 'diamonds', value: 13, src: 'קלפים/p13.jpg' },
        { suit: 'clubs', value: 1, src: 'קלפים/p1.jpg' }, { suit: 'clubs', value: 2, src: 'קלפים/p2.jpg' }, { suit: 'clubs', value: 3, src: 'קלפים/p3.jpg' }, { suit: 'clubs', value: 4, src: 'קלפים/p4.jpg' }, { suit: 'clubs', value: 5, src: 'קלפים/p5.jpg' }, { suit: 'clubs', value: 6, src: 'קלפים/p6.jpg' }, { suit: 'clubs', value: 7, src: 'קלפים/p7.jpg' }, { suit: 'clubs', value: 8, src: 'קלפים/p8.jpg' }, { suit: 'clubs', value: 9, src: 'קלפים/p9.jpg' }, { suit: 'clubs', value: 10, src: 'קלפים/p10.jpg' }, { suit: 'clubs', value: 11, src: 'קלפים/p11.jpg' }, { suit: 'clubs', value: 12, src: 'קלפים/p12.jpg' }, { suit: 'clubs', value: 13, src: 'קלפים/p13.jpg' },
        { suit: 'spades', value: 1, src: 'קלפים/p1.jpg' }, { suit: 'spades', value: 2, src: 'קלפים/p2.jpg' }, { suit: 'spades', value: 3, src: 'קלפים/p3.jpg' }, { suit: 'spades', value: 4, src: 'קלפים/p4.jpg' }, { suit: 'spades', value: 5, src: 'קלפים/p5.jpg' }, { suit: 'spades', value: 6, src: 'קלפים/p6.jpg' }, { suit: 'spades', value: 7, src: 'קלפים/p7.jpg' }, { suit: 'spades', value: 8, src: 'קלפים/p8.jpg' }, { suit: 'spades', value: 9, src: 'קלפים/p9.jpg' }, { suit: 'spades', value: 10, src: 'קלפים/p10.jpg' }, { suit: 'spades', value: 11, src: 'קלפים/p11.jpg' }, { suit: 'spades', value: 12, src: 'קלפים/p12.jpg' }, { suit: 'spades', value: 13, src: 'קלפים/p13.jpg' },
    ];
    //מערבב
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    //מגריל לקופה

    for (let i = 0; i < 52; i++) {
        pot.push(deck.pop());
        deck.unshift(pot[i]);
    }

    document.querySelector('#draw-button').addEventListener('click', function mix() {


        for (let i = pot.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pot[i], pot[j]] = [pot[j], pot[i]];


        }
    });

    build_game0(c)
    build_game1(c)
    function build_game0(u) { //המשתמש בנית הקלפים
        sum_u = 0;

        const cardsDiv = document.querySelectorAll('.cards');
        const cardsUser = cardsDiv[0];
        let cardsHtml0 = '';
        for (let i = 0; i < u; i++) {
            cardsHtml0 += `<div class="card" data-index="${i}"></div>`;
        }
        cardsUser.innerHTML = cardsHtml0;
        //  מגריל  למערך  לבן אדם
   playerHand.pop()
        for (let i = 0; i < u; i++) {
            playerHand[i] = pot.pop()
           
            deck.unshift(playerHand[i]);//לא חובה מחזיר- למערך של האוביקטים
        }
     
        for (let j = 0; j < u + 1; j++) {

            d = document.getElementsByClassName("card");
            if (j != c + 2 && j != c + 1) {
                d[j].style.backgroundImage = 'url("תמונה הפוכה.jpg")';
            }
        }
    }
    function build_game1(c) { //בנית הקלפים המחשב
        sum_c = 0;
        const cardsDiv = document.querySelectorAll('.cards');
        const cardsComputer = cardsDiv[2];

        let cardsHtml1 = '';
        for (let i = 0; i < c; i++) {
            cardsHtml1 += `<div class="card"  data-index-computer="${i}"></div>`;
        }
        computerHand.pop()
        for (let i = 0; i < c; i++) {
            computerHand[i]=pot.pop()
        
        
            deck.unshift(computerHand[i]);
        }

        cardsComputer.innerHTML = cardsHtml1;

        for (let j = u + 3 - 1; j < (c + 1) + u + 2; j++) {

            d = document.getElementsByClassName("card");
            if (j != c + 2 && j != c + 1) {
                d[j].style.backgroundImage = 'url("תמונה הפוכה.jpg")';
            }
        }
        /*        for (let j = c+2; j < c+u+3; j++) {
                    d = document.getElementsByClassName("card");
                    d[j].style.backgroundImage = 'url("תמונה הפוכה.jpg")';
                }*/

        // מגריל למערך למחשב
   
     
    }

    /*טיימר*/
    timeLeft = x3 * 60;
    t();
    function t() {
        var timer = setInterval(function () {


            var minutes = Math.floor(timeLeft / 60);
            var seconds = timeLeft - minutes * 60;

            var formattedMinutes = minutes.toString().padStart(2, '0');
            var formattedSeconds = seconds.toString().padStart(2, '0');

            document.getElementById("timer").textContent = formattedMinutes + ":" + formattedSeconds;

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer);
                document.getElementById("timer").textContent = "Time's up!";
                location.href = "finish_time.html"
            }

        }, 1000);
    }
    function start_timer(x) {
        if (x == 1)
            x = 7;
        else
            x = 4;
    }


    playPlayerTurn()
    //עד כאן הבניה של הדף

    function playPlayerTurn() {//תור השחקן 
        console.log(playerHand)
        let pp = document.querySelector('#pot')

        pp.style.boxShadow = "0 0 20px red";
        pp.addEventListener("click", DrawPot);//  שלפו קלף מהקופה 

        function DrawPot() {//לחיצה על הקופה

            let pott = document.querySelector('#pot');

            pott.style.boxShadow = "";//דיב מקום הקופה
            pott.removeEventListener('click', DrawPot);//הורדת ארוע לחיצה
            const drawnCard = pot.pop();//הקלף שיצא בטיפוס 
            const srcDrawnCard = drawnCard.src;//ערך הקלף שיצא       
            pott.style.backgroundImage = 'url("' + srcDrawnCard + '")';//השמת הקלף שיצא לקופה
            currentArr[1] = drawnCard;//השמת טיפוס הקלף במערך קלף נוכחי
            const current = document.querySelector("#current"); // דיב עם מיקום קלף נוכחי               
            setTimeout(function f() {
                pott.style.backgroundImage = 'url("תמונה הפוכה.jpg")';
                current.style.backgroundImage = 'url("' + srcDrawnCard + '")';
                second_step(drawnCard);///שליחת טיפוסהקלף שיצא
            }, 1000);


        };

        function second_step(drawnCard) {

            var current_value = drawnCard.value;// ערך הקלף מספרי


            if (current_value <= u) {
                var RightDiv = document.querySelector(".card[data-index='" + (current_value - 1) + "']");
                chack()
            }//הדיב עם המיקום הטוב}


            else {
                console.log("ehhhnter")
                throw_away();

            }
            function chack() {

                if (RightDiv.style.backgroundImage == 'url("תמונה הפוכה.jpg")') {
                    sum_u++;
                    /*    pp.style.boxShadow = "0 0 20px red";*/
                    RightDiv.addEventListener("click", f)



                    //הוספת לחיצה למיקום הטוב ומעבר לפונקציה 
                    function f() {
                        RightDiv.removeEventListener("click", f)
                        replace(current_value - 1) //שולח את האינדקס של המערך ואת הארוע של הדיב הטוב

                    }


                }

                else {
                    console.log("ehhhnter")
                    throw_away();

                }
            }



        }
        //step3
        function replace(index) {//מקבל את האינדקס של המערך המשתמש  אחר ארוע לחיצה על הדיב הטוב
            let current = document.querySelector("#current");//דיב קלף נוכחי

            currentArr[0] = currentArr[1];
            currentArr[1] = playerHand[index];
            //setTimeout(function f() {
            //    pott.style.backgroundImage = "url('תמונה הפוכה.jpg')";
            //    current.style.backgroundImage = "url('" + srcDrawnCard + "')";
            //    second_step(drawnCard);///שליחת טיפוסהקלף שיצא
            //}, 1000);

            event.target.style.backgroundImage = 'url("' + currentArr[0].src + '")'; //השמת תמונת הקלף הטוב במקומו
            current.style.backgroundImage = 'url("' + currentArr[1].src + '")';//השמת הקלף שהיה במיקום הקלף הטוב בקלף נוכחי
            playerHand[index] = currentArr[0];
            document.getElementById("musicCheck").play();
            second_step(currentArr[1]);



        }

        function throw_away() {
            if (sum_u == u) {//13 הוא משתנה של כמות הכרטיסים בסס זה

                for (let i = playerHand.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [playerHand[i], playerHand[j]] = [playerHand[j], playerHand[i]];
                }
                for (var l = 0; l < u; l++) {
                    pot.unshift(playerHand[l]);
                    document.querySelector(".card[data-index='" + l + "']").remove();
                }
                timeLeft = x3 * 60;
                t();
                if (u == 1 || x3 == 7)
                    location.href = "finish_game.html";
                else
                    u = u - 1;
                    build_game0(u);
            }
            if (garbageArr[1] != "") {
                pot.unshift(garbageArr[1]);
            }

            garbageArr[1] = garbageArr[0];
            garbageArr[0] = currentArr[1];
            const current = document.querySelector("#current"); // דיב עם מיקום קלף נוכחי 
            const garbage = document.querySelector("#garbage"); // דיב עם פח 
            current.style.backgroundImage = " ";
            garbage.style.backgroundImage = 'url("' + garbageArr[0].src + '")';
            garbage.style.backgroundImage = " ";
            document.getElementById("musicgarbage").play();

            setTimeout(function f() {

                playComputerTurn()
            }, 2000);



        }




    }
    function playComputerTurn() {//תור המחשב 

        DrawPot();//  שלפו קלף מהקופה 

        function DrawPot() {//לחיצה על הקופה
            let pott = document.querySelector('#pot');//דיב מקום הקופה

            const drawnCard = pot.pop();//הקלף שיצא בטיפוס 
            const srcDrawnCard = drawnCard.src;//ערך הקלף שיצא       
            pott.style.backgroundImage = 'url("' + srcDrawnCard + '")';//השמת הקלף שיצא לקופה
            currentArr[1] = drawnCard;//השמת טיפוס הקלף במערך קלף נוכחי
            const current = document.querySelector("#current"); // דיב עם מיקום קלף נוכחי               
            setTimeout(function f() {

                pott.style.backgroundImage = 'url("תמונה הפוכה.jpg")';
                current.style.backgroundImage = 'url("' + srcDrawnCard + '")';
                second_step(drawnCard);
            }, 1000);
            ///שליחת טיפוסהקלף שיצא
        };

        function second_step(drawnCard) {

            var current_value = drawnCard.value;// ערך הקלף מספרי
            if (current_value <= c) {
                var RightDiv = document.querySelector(".card[data-index-computer='" + (current_value - 1) + "']");
                chack()
            }//הדיב עם המיקום הטוב}


            else {
                console.log("ehhhnter")
                throw_away();

            }
            function chack() {

                if (RightDiv.style.backgroundImage == 'url("תמונה הפוכה.jpg")') {
                    sum_c++;
                    /*    pp.style.boxShadow = "0 0 20px red";*/
                    f()



                    //הוספת לחיצה למיקום הטוב ומעבר לפונקציה 
                    function f() {

                        replace(current_value - 1) //שולח את האינדקס של המערך ואת הארוע של הדיב הטוב

                    }


                }

                else {
                    console.log("ehhhnter")
                    throw_away();

                }
            }



        }

        function replace(index) {//מקבל את האינדקס של המערך המשתמש  אחר ארוע לחיצה על הדיב הטוב
            let current = document.querySelector("#current");//דיב קלף נוכחי

            currentArr[0] = currentArr[1];
            currentArr[1] = computerHand[index];
            document.querySelector(".card[data-index-computer='" + (index) + "']").style.backgroundImage = 'url("' + currentArr[0].src + '")';;
            //השמת תמונת הקלף הטוב במקומו
            current.style.backgroundImage = 'url("' + currentArr[1].src + '")';;//השמת הקלף שהיה במיקום הקלף הטוב בקלף נוכחי
            computerHand[index] = currentArr[0];
            second_step(currentArr[1]);

        }

        function throw_away() {
            if (sum_c == c) {//13 הוא משתנה של כמות הכרטיסים בסס זה
                //לשלוח לפונקציה מגרילה את הסט הבא של המספרים
                // יקראו לה build_game

                for (let i = computerHand.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [computerHand[i], computerHand[j]] = [computerHand[j], computerHand[i]];
                }

                for (let l = 0; l < c; l++) {
                    pot.unshift(computerHand[l]);
                    document.querySelector(".card[data-index-computer='" + l + "']").remove();

                }

                if (c == 1)
                    location.href = "finish_computer.html";
                else {
                    c = c - 1;
                    build_game1(c);

                }


            }
            if (garbageArr[1] != "") {
                pot.unshift(garbageArr[1]);
            }

            garbageArr[1] = garbageArr[0];
            garbageArr[0] = currentArr[1];
            const current = document.querySelector("#current"); // דיב עם מיקום קלף נוכחי 
            const garbage = document.querySelector("#garbage"); // דיב עם פח 
            current.style.backgroundImage = 'url("' + currentArr[1].src + '")';
            garbage.style.backgroundImage = 'url("' + garbageArr[0].src + '")';;
            document.getElementById("musicgarbage").play();
            playPlayerTurn()
        }
    }

}