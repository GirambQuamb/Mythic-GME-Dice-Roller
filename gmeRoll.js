function fateRoll(){
    // Define the fate chart table
    const rollTable = {
        1: [
            {odds: "Certain", outcome: [10,50,91]},
            {odds: "Nearly Certain", outcome: [7,35,88]},
            {odds: "Very Likely", outcome: [5,25,86]},
            {odds: "Likely", outcome: [3,15,84]},
            {odds: "50/50", outcome: [2,10,83]},
            {odds: "Unlikely", outcome: [1,5,82]},
            {odds: "Very Unlikely", outcome: [0,1,81]},
            {odds: "Nearly Impossible", outcome: [0,1,81]},
            {odds: "Impossible", outcome: [0,1,81]},
        ],
        2: [
            {odds: "Certain", outcome: [13,65,94]},
            {odds: "Nearly Certain", outcome: [10,50,91]},
            {odds: "Very Likely", outcome: [7,35,88]},
            {odds: "Likely", outcome: [5,25,86]},
            {odds: "50/50", outcome: [3,15,84]},
            {odds: "Unlikely", outcome: [2,10,83]},
            {odds: "Very Unlikely", outcome: [1,5,82]},
            {odds: "Nearly Impossible", outcome: [0,1,81]},
            {odds: "Impossible", outcome: [0,1,81]},
        ],
        3: [
            {odds: "Certain", outcome: [15,75,96]},
            {odds: "Nearly Certain", outcome: [13,65,94]},
            {odds: "Very Likely", outcome: [10,50,91]},
            {odds: "Likely", outcome: [7,35,88]},
            {odds: "50/50", outcome: [5,25,86]},
            {odds: "Unlikely", outcome: [3,15,84]},
            {odds: "Very Unlikely", outcome: [2,10,83]},
            {odds: "Nearly Impossible", outcome: [1,5,82]},
            {odds: "Impossible", outcome: [0,1,81]},
        ],
        4: [
            {odds: "Certain", outcome: [17,85,98]},
            {odds: "Nearly Certain", outcome: [15,75,96]},
            {odds: "Very Likely", outcome: [13,65,94]},
            {odds: "Likely", outcome: [10,50,91]},
            {odds: "50/50", outcome: [7,35,88]},
            {odds: "Unlikely", outcome: [5,25,86]},
            {odds: "Very Unlikely", outcome: [3,15,84]},
            {odds: "Nearly Impossible", outcome: [2,10,83]},
            {odds: "Impossible", outcome: [1,5,82]},
        ],
        5: [
            {odds: "Certain", outcome: [18,90,99]},
            {odds: "Nearly Certain", outcome: [17,85,98]},
            {odds: "Very Likely", outcome: [15,75,96]},
            {odds: "Likely", outcome: [13,65,94]},
            {odds: "50/50", outcome: [10,50,91]},
            {odds: "Unlikely", outcome: [7,35,88]},
            {odds: "Very Unlikely", outcome: [5,25,86]},
            {odds: "Nearly Impossible", outcome: [3,15,84]},
            {odds: "Impossible", outcome: [2,10,83]},
        ],
        6: [
            {odds: "Certain", outcome: [19,95,100]},
            {odds: "Nearly Certain", outcome: [18,90,99]},
            {odds: "Very Likely", outcome: [17,85,98]},
            {odds: "Likely", outcome: [15,75,96]},
            {odds: "50/50", outcome: [13,65,94]},
            {odds: "Unlikely", outcome: [10,50,91]},
            {odds: "Very Unlikely", outcome: [7,35,88]},
            {odds: "Nearly Impossible", outcome: [5,25,86]},
            {odds: "Impossible", outcome: [3,15,84]},
        ],
        7: [
            {odds: "Certain", outcome: [20,99,101]},
            {odds: "Nearly Certain", outcome: [19,95,100]},
            {odds: "Very Likely", outcome: [18,90,99]},
            {odds: "Likely", outcome: [17,85,98]},
            {odds: "50/50", outcome: [15,75,96]},
            {odds: "Unlikely", outcome: [13,65,94]},
            {odds: "Very Unlikely", outcome: [10,50,91]},
            {odds: "Nearly Impossible", outcome: [7,35,88]},
            {odds: "Impossible", outcome: [5,25,86]},
        ],
        8: [
            {odds: "Certain", outcome: [20,99,101]},
            {odds: "Nearly Certain", outcome: [20,99,101]},
            {odds: "Very Likely", outcome: [19,95,100]},
            {odds: "Likely", outcome: [18,90,99]},
            {odds: "50/50", outcome: [17,85,98]},
            {odds: "Unlikely", outcome: [15,75,96]},
            {odds: "Very Unlikely", outcome: [13,65,94]},
            {odds: "Nearly Impossible", outcome: [10,50,91]},
            {odds: "Impossible", outcome: [7,35,88]},
        ],
        9: [
            {odds: "Certain", outcome: [20,99,101]},
            {odds: "Nearly Certain", outcome: [20,99,101]},
            {odds: "Very Likely", outcome: [20,99,101]},
            {odds: "Likely", outcome: [19,95,100]},
            {odds: "50/50", outcome: [18,90,99]},
            {odds: "Unlikely", outcome: [17,85,98]},
            {odds: "Very Unlikely", outcome: [15,75,96]},
            {odds: "Nearly Impossible", outcome: [13,65,94]},
            {odds: "Impossible", outcome: [10,50,91]},
        ],
    };

    // Do roll and determine chaos factor and odds from selections'
    var roll = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100  
    var chaosFactor = parseInt(document.getElementById("chaos").value); // Chaos Factor, 1 to 9
    var odds = document.getElementById("odds").value; // Odds, represented by string

    // Figure out our odds from the roll table
    var low, mid, high;

    var chaosIndex = rollTable[chaosFactor]; // Which array?
    var oddsIndex = chaosIndex.findIndex(item => item.odds === odds); // Which index for odds?

    low = rollTable[chaosFactor][oddsIndex].outcome[0];
    mid = rollTable[chaosFactor][oddsIndex].outcome[1];
    high = rollTable[chaosFactor][oddsIndex].outcome[2];

    // Show the outcome
    document.getElementById("fateRoll").innerHTML = roll;
    if(roll <= low){
        document.getElementById("fateOutcome").innerHTML = `Exceptional Yes`;
    } else if(roll <= mid){
        document.getElementById("fateOutcome").innerHTML = `Yes`;
    } else if(roll <= high){
        document.getElementById("fateOutcome").innerHTML = `No`;
    } else{
        document.getElementById("fateOutcome").innerHTML = `Exceptional No`;
    }

    // Determine if there should be a random event
    if(roll % 11 == 0){
        if ((roll/11) <= chaosFactor){
            document.getElementById("fateRandomEvent").innerHTML = `Roll For A Random Event!`;
        }
    } else {
        document.getElementById("fateRandomEvent").innerHTML = `<br>`;
    }
}

function testExpectedScene(){
    // Do roll, get chaos factor
    var roll = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10  
    var chaosFactor = parseInt(document.getElementById("chaos").value); // Chaos Factor, 1 to 9

    // Show the outcome
    document.getElementById("expectedSceneRoll").innerHTML = roll;
    if(roll > chaosFactor){
        // Expected Scene
        document.getElementById("expectedSceneOutcome").innerHTML = `Expected Scene`;
    } else if(roll % 2 == 0){
        // Interrupt Scene
        document.getElementById("expectedSceneOutcome").innerHTML = `Interrupt Scene`;
    } else {
        //Altered Scene
        document.getElementById("expectedSceneOutcome").innerHTML = `Altered Scene`;
    }
}

function sceneAdjustment(){
    const adjustmentTable = ["Remove A Character", "Add A Character", "Reduce/Remove An Activity",
                            "Increase An Activity", "Remove An Object", "Add An Object"];

    // Do roll
    var roll = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10

    // Show the outcome
    document.getElementById("sceneAdjustmentRoll").innerHTML = roll;
    if(roll < 7){
        // If the roll is below 7, choose the appropriate result from the table
        document.getElementById("sceneAdjustment").innerHTML = `${adjustmentTable[roll-1]}<br><br>`;
    } else {
        // Otherwise, choose two adjustments at random
        var a1 = adjustmentTable[Math.floor(Math.random()*adjustmentTable.length)];
        var a2 = adjustmentTable[Math.floor(Math.random()*adjustmentTable.length)];
        document.getElementById("sceneAdjustment").innerHTML = `${a1}, ${a2}`;
    }
}

function randomEvent(){
    const randomEventTable = ["Remote Event", "Ambiguous Event", "New NPC", "NPC Action",
                            "NPC Negative", "NPC Positive", "Move Toward A Thread",
                            "Move Away From A Thread", "Close A Thread", "PC Negative",
                            "PC Positive", "Current Context"];
    // Do roll
    var roll = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100

    var event;

    // Fuck if statements
    if(roll <= 5){
        event = randomEventTable[0];
    } else if(roll <= 10){
        event = randomEventTable[1];
    } else if(roll <= 20){
        event = randomEventTable[2];
    } else if(roll <= 40){
        event = randomEventTable[3];
    } else if(roll <= 45){
        event = randomEventTable[4];
    } else if(roll <= 50){
        event = randomEventTable[5];
    } else if(roll <= 55){
        event = randomEventTable[6];
    } else if(roll <= 65){
        event = randomEventTable[7];
    } else if(roll <= 70){
        event = randomEventTable[8];
    } else if(roll <= 80){
        event = randomEventTable[9];
    } else if(roll <= 85){
        event = randomEventTable[10];
    } else{
        event = randomEventTable[11];
    }

    document.getElementById("randomEventRoll").innerHTML = roll;
    document.getElementById("randomEventOutcome").innerHTML = event;
}

function meaningTablesActions(){
    const action1 = ["Abandon", "Accompany", "Activate", "Agree", "Ambush", "Arrive", "Assist", "Attack", "Attain", "Bargain", "Befriend", "Bestow", "Betray", "Block", "Break", "Carry", "Celebrate", "Change", "Close", "Combine", "Communicate", "Conceal", "Continue", "Control", "Create", "Deceive", "Decrease", "Defend", "Delay", "Deny", "Depart", "Deposit", "Destroy", "Dispute", "Disrupt", "Distrust", "Divide", "Drop", "Easy", "Energize", "Escape", "Expose", "Fail", "Fight", "Flee", "Free", "Guide", "Harm", "Heal", "Hinder", "Imitate", "Imprison", "Increase", "Indulge", "Inform", "Inquire", "Inspect", "Invade", "Leave", "Lure", "Misuse", "Move", "Neglect", "Observe", "Open", "Oppose", "Overthrow", "Praise", "Proceed", "Protect", "Punish", "Pursue", "Recruit", "Refuse", "Release", "Relinquish", "Repair", "Repulse", "Return", "Reward", "Ruin", "Separate", "Start", "Stop", "Strange", "Struggle", "Succeed", "Support", "Suppress", "Take", "Threaten", "Transform", "Trap", "Travel", "Triumph", "Truce", "Trust", "Use", "Usurp", "Waste"];
    const action2 = ["Advantage", "Adversity", "Agreement", "Animal", "Attention", "Balance", "Battle", "Benefits", "Building", "Burden", "Bureaucracy", "Business", "Chaos", "Comfort", "Completion", "Conflict", "Cooperation", "Danger", "Defense", "Depletion", "Disadvantage", "Distraction", "Elements", "Emotion", "Enemy", "Energy", "Environment", "Expectation", "Exterior", "Extravagance", "Failure", "Fame", "Fear", "Freedom", "Friend", "Goal", "Group", "Health", "Hindrance", "Home", "Hope", "Idea", "Illness", "Illusion", "Individual", "Information", "Innocent", "Intellect", "Interior", "Investment", "Leadership", "Legal", "Location", "Military", "Misfortune", "Mundane", "Nature", "Needs", "News", "Normal", "Object", "Obscurity", "Official", "Opposition", "Outside", "Pain", "Path", "Peace", "People", "Personal", "Physical", "Plot", "Portal", "Possessions", "Poverty", "Power", "Prison", "Project", "Protection", "Reassurance", "Representative", "Riches", "Safety", "Strength", "Success", "Suffering", "Surprise", "Tactic", "Technology", "Tension", "Time", "Trial", "Value", "Vehicle", "Victory", "Vulnerability", "Weapon", "Weather", "Work", "Wound"];

    // Do rolls
    var roll1 = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100
    var roll2 = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100

    // Outcome
    document.getElementById("meaningTablesActionsRoll").innerHTML = `${roll1}, ${roll2}`;
    document.getElementById("meaningTablesActionsOutcome").innerHTML = `${action1[roll1 - 1]} ${action2[roll2 - 1]}`;
}

function meaningTablesDescriptions(){
    const description1 = ["Adventurously", "Aggressively", "Anxiously", "Awkwardly", "Beautifully", "Bleakly", "Boldly", "Bravely", "Busily", "Calmly", "Carefully", "Carelessly", "Cautiously", "Ceaselessly", "Cheerfully", "Combatively", "Coolly", "Crazily", "Curiously", "Dangerously", "Defiantly", "Deliberately", "Delicately", "Delightfully", "Dimly", "Efficiently", "Emotionally", "Energetically", "Enormously", "Enthusiastically", "Excitedly", "Fearfully", "Ferociously", "Fiercely", "Foolishly", "Fortunately", "Frantically", "Freely", "Frighteningly", "Fully", "Generously", "Gently", "Gladly", "Gracefully", "Gratefully", "Happily", "Hastily", "Healthily", "Helpfully", "Helplessly", "Hopelessly", "Innocently", "Intensely", "Interestingly", "Irritatingly", "Joyfully", "Kindly", "Lazily", "Lightly", "Loosely", "Loudly", "Lovingly", "Loyally", "Majestically", "Meaningfully", "Mechanically", "Mildly", "Miserably", "Mockingly", "Mysteriously", "Naturally", "Neatly", "Nicely", "Oddly", "Offensively", "Officially", "Partially", "Passively", "Peacefully", "Perfectly", "Playfully", "Politely", "Positively", "Powerfully", "Quaintly", "Quarrelsomely", "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly", "Softly", "Strangely", "Swiftly", "Threateningly", "Timidly", "Very", "Violently", "Wildly", "Yieldingly"];
    const description2 = ["Abnormal", "Amusing", "Artificial", "Average", "Beautiful", "Bizarre", "Boring", "Bright", "Broken", "Clean", "Cold", "Colorful", "Colorless", "Comforting", "Creepy", "Cute", "Damaged", "Dark", "Defeated", "Dirty", "Disagreeable", "Dry", "Dull", "Empty", "Enormous", "Extraordinary", "Extravagant", "Faded", "Familiar", "Fancy", "Feeble", "Festive", "Flawless", "Forlorn", "Fragile", "Fragrant", "Fresh", "Full", "Glorious", "Graceful", "Hard", "Harsh", "Healthy", "Heavy", "Historical", "Horrible", "Important", "Interesting", "Juvenile", "Lacking", "Large", "Lavish", "Lean", "Less", "Lethal", "Lively", "Lonely", "Lovely", "Magnificent", "Mature", "Messy", "Mighty", "Military", "Modern", "Mundane", "Mysterious", "Natural", "Normal", "Odd", "Old", "Pale", "Peaceful", "Petite", "Plain", "Poor", "Powerful", "Protective", "Quaint", "Rare", "Reassuring", "Remarkable", "Rotten", "Rough", "Ruined", "Rustic", "Scary", "Shocking", "Simple", "Small", "Smooth", "Soft", "Strong", "Stylish", "Unpleasant", "Valuable", "Vibrant", "Warm", "Watery", "Weak", "Young"];

    // Do rolls
    var roll1 = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100
    var roll2 = Math.floor(Math.random() * 100) + 1; // Random number from 1 to 100

    // Outcome
    document.getElementById("meaningTablesDescriptionsRoll").innerHTML = `${roll1}, ${roll2}`;
    document.getElementById("meaningTablesDescriptionsOutcome").innerHTML = `${description1[roll1 - 1]} ${description2[roll2 - 1]}`;
}

function toggleDarkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}