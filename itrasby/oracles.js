/*
  These oracles are from the roleplaying game "In A Wicked Age" by Vincent Baker:
    http://lumpley.com/wicked.html
  Their text is (c) 2007 Vincent Baker.
  The text here was copied from the Abulafia random-generator website:
    http://www.random-generator.com/index.php?title=In_a_Wicked_Age
*/

var NumItems = 1;

var Resolution = [
    {title: "Help is Needed",
     text: "You end up understanding that you need the help of someone not currently in the scene to achieve this aim."},
    {title: "No, but…",
     text: "You fail, but another thing happens instead, unrelated to what you were aiming for."},
    {title: "No, and…",
     text: "You fail, and something unrelated goes wrong."},
    {title: "Yes, but only if…",
     text: "You can get what you want — but only if you choose to make a certain sacrifice."},
    {title: "Yes, but…",
     text: "You succeed, but the consequences of the success are completely different from what was expected."},
    {title: "Yes, and…",
     text: "You succeed, and achieve more than you expected. Perhaps even a bit too much…"},
    {title: "Yes, but…",
     text: "You succeed, but there’s a tiny detail that doesn’t go quite as planned."},
    {title: "Yes, but…",
     text: "You succeed, but something unrelated goes wrong, for you or someone you care about."}
];

var Oracles = [Resolution];
var OracleNames = ["Resolution"];


/*
var Chance = [
    {title: "Cut Scene",
     text: "Jump forward three hours. Describe what condition the characters find themselves in. You’re not allowed to describe what has happened in the meantime."},
    {title: "In Reverse",
     text: "Turn time a few seconds back. What happened just before you drew the card doesn’t happen. Instead the opposite happens. It’s up to you to describe exactly what was reversed."},
    {title: "Nemesis!",
     text: "This card awakens the character’s Nemesis. In some way, their arch-enemy affects the situation. Exactly how is up to you. Doesn’t the character have an arch-enemy? Well, now she does."},
    {title: "The Character Flaw",
     text: "The last supporting character the character met has a dark secret, a weak spot or a negative trait. The character doesn’t necessarily know what it is, but it’s up to you as the player to invent and describe it."},
    {title: "Amor Victor",
     text: "The power of love triumphs in this situation. Exactly how this happens is for you to describe."},
    {title: "The Extra",
     text: "Describe a supporting character near the scene. This person can be help or hindrance, friend or foe."},
    {title: "Flashback",
     text: "Play a scene that has occurred in the past, in the same place your character is right now. The player who draws the card sets the scene and tells the other players what characters (supporting characters or their own characters) to control."},
    {title: "Haunted by the Past!",
     text: "Something the character has done previously has consequences in the present. Tell the game-master what you think this card means."},
    {title: "Masquerade!",
     text: "For the rest of this scene, all players swap characters. This includes the game-master. Give your character sheet to the player at your right."},
    {title: "What’s In Its Pockets?",
     text: "The character has something in her pocket which can be useful. What could it be?"},
    {title: "Mood Change",
     text: "Everyone present suddenly changes mood to the exact opposite of what they had. The new moods last for the rest of the scene."},
    {title: "Do Not Gaze Into The Abyss",
     text: "The character feels an irresistible urge to do something she will regret. Do it!"},
    {title: "The Wind Turns",
     text: "Temperature, sounds and smells change. Each player narrates one element which changes. If someone in the scene is making a face, they’ll become a grimasque."},
    {title: "Two News",
     text: "The characters receive one good and one bad piece of news. The player who drew the card decides the bad news first; the game-master decides the good one."},
    {title: "Inner Monologue",
     text: "Throughout this scene you can at any time point your finger at someone (PC or supporting character.) That character’s player must stand up and utter a short, inner monologue (say whatever’s on the character’s mind at the time.)"},
    {title: "In a Mirror, In a Dream",
     text: "Play the rest of this scene on the B-side of Itras By, where everything is opposite. How are the characters on the A-side affected?"},
    {title: "Interview",
     text: "Stand up. Your character is interviewed about what happened during this scene. You may describe freely what happened from your point of view, and your character’s thoughts. The other players ask questions, as in a press conference. When the interview is over, you sit down and continue playing the scene where you left off."},
    {title: "Reality Split",
     text: "Things are turned inside out and you experience several timelines simultaneously. Each other player may in turn describe a different course of events. When the laws of reality catch up, there’s a loud noise and only one of your co-player’s descriptions will have happened. You decide which one."},
    {title: "Prosopopeia",
     text: "Animals, objects or abstract concepts start to talk. Who is talking and what do they have to say?"},
    {title: "Rumour Mill",
     text: "Gossip spreads fast. Tell a rumour about the scene in progress to the person on your left. The rumour is retold from player to player and each time something is changed and exaggerated. By the time the gossip reaches back to you, it has become true."},
    {title: "Meanwhile",
     text: "The scene is cut, and you may establish a new scene somewhere else. You choose who is present. Players may be given supporting characters to play in this cut scene."},
    {title: "Good Advice",
     text: "You may ask someone for advice. It may be anyone (PC or supporting character) and it could be someone who’s dead or otherwise normally impossible to consult. Choose one of the other players to be the advisor and decide how you are communicating. If you follow the advice given to you, you will succeed. But if you don’t follow the advice you will fail, no matter what."},
    {title: "Conscience",
     text: "Two advisors appear, one on each shoulder of one of the characters (PC or supporting character) present in the scene. Time stops while they try to convince the character of their (opposing) sides of some dilemma. Choose who will be given advice and which two players will control the advisors."},
    {title: "The Shadow",
     text: "Time stops as you have a conversation with you own shadow. The shadow has the same skills and attributes as you, but in addition it may enter places you can’t reach. Will you ask your shadow for help or advice? The player that looks most like you plays your shadow."}
]

var Oracles = [Resolution, Chance];
var OracleNames = ["Resolution", "Chance"];
*/

