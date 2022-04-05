firstChoice();

let answer = window.prompt("Would you like to play again?: [yes] or [no]")

while(answer === "yes"){
    firstChoice();
    let answer2 = window.prompt("Play again?: [yes] or [no]")

    if (answer2 === "no"){
        break;
    }
}
    window.alert("Thanks for playing! Goodbye!")


function firstChoice(){
    let choice  = window.prompt('Do you head [left] or [right]?')

    switch(choice){
        case "left":
            left();
            break;
        
        case "right":
            right();
            break;
        }
    }

function left(){

    let choice = window.prompt(`You come across a stray cat. 
            It scampers off down a small hole, just large enough for you to crawl through. 
            Do you [follow] it, or [continue] on your path?`);
;

    switch(choice){
        case "follow":
            follow();
            break;
            

        case "continue":
            progress();
            break;
            
        }
    
    }

function follow(){

    let choice = window.prompt(`You follow the cat to a colony of cats,
        nestled in a fort of warm blankets and subsisting off inexplicably warm soup.
        They are content with you [stay]ing, but you wonder if you should [alert] the world
        to this magical safe haven.`)

    switch(choice){
        case "stay":
            window.alert(`You live happily amongst the cats for the rest of your days.`)
            break;

        case "alert":
            window.alert(`After leaving the cat colony, you are never able to find it again; 
            without proof, no one believes your story, which passes into legend nonetheless.`)
            break;
    }
}

function progress(){

    let choice = window.prompt(`You come across a chamber that reaches upward to 
    a shining light above. There is a long, winding [staircase], and a much quicker, 
    but rickety-looking [ladder] that leads up toward the light. Which do you take?`)


    switch(choice){
        case "ladder":
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps,
             and you comedically fall through each of the rungs below. Sheepish, you return 
             home.`)
             break;

        case "staircase":
            window.alert(`After ascending the staircase, you discover a shiny blue stone, 
            which you take home and cherish forever.`)
            break;
    }

}

function right(){

    let choice = window.prompt(`You come across a snoring dragon. 
            On the other side [past the dragon], you see a shiny chest of treasure. Another path would 
            lead you [away from the dragon] altogether. Which path do you take?`);


    switch(choice){
        case "past the dragon":
            pastDragon();
            break;

        case "away from the dragon":
            awayFromDragon();
            break;
    }

}

function pastDragon(){
    let choice = window.prompt(`The dragon wakes up and sits upright. 
    You only have a moment to respond, to [stay] or [run]:`)

    switch(choice){
        case "stay":
            window.alert(`You and the dragon have an uplifting conversation about 
            local politics and become lifelong friends.`)
            break;

        case "run":
            window.alert(`Quickly, you run back to the cave's entrance. Sheepish, 
            you return home.`)
            break;
    }
}

function awayFromDragon(){
    let choice = window.prompt(`After walking a while longer, you come across
    a shiny blue flower. It is so beautiful that you decide you must either [draw 
    it] or [pick it]. Which do you do?`)

    switch(choice){
        case "draw it":
            window.alert(`You draw the flower, capturing only a fraction of its beauty
            with your quill. You bring the drawing home, somewhat disappointed, but 
            over time, discover joy in sharing it with your friends and family, 
            recounting the story of your days as a sorcerer with the aid of the sketch.`)
            break;

        case "pick it":
            window.alert(`You pick the flower and bring it home, and all marvel at its 
            brilliance. However, over time it fades and eventually crumbles to dust.`)
            break;
    }
}
