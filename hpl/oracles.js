/*
*/

var Clues = [
  // Diaries:
  { text: "A mysterious star-lit revel on a high bare hilltop, with a single man in attendance",
    style: "diary"},
  { text: "Death — its desolation and horror — bleak spaces — sea-bottom — dead cities. But Life — the greater horror! Vast unheard-of reptiles and leviathans — hideous beasts of prehistoric jungle — rank slimy vegetation — evil instincts of primal man — Life is more horrible than death.", 
    style: "diary"}, // H.P. Lovecraft, Commonplace Book
  { text: "The dreams of one man actually create a strange half-mad world of quasi-material substance in another dimension. Another man, also a dreamer, blunders into this world in a dream. What he finds. Intelligence of denizens. Their dependence on the first dreamer. What happens at his death.",
    style: "diary"}, // H.P. Lovecraft, Commonplace Book
  {text: "more and more sullen, more and more intelligent, more and more amphibious, more and more imitative! Great God! What madness made even those blasphemous Old Ones willing to use and carve such things?",
    style: "diary"}, // At The Mountains Of Madness
  {text: "'Rhan-Tegoth, infinite and invincible, I am your slave and high-priest. You are hungry, and I provide. I read the sign and have led you forth. I shall feed you with blood, and you shall feed me with power. Iä! Shub-Niggurath! The Goat with a Thousand Young!",
    style: "diary"}, // H.P. Lovecraft & Hazel Heald, The Horror In the Museum
    
  // Headlines:
  { text:"CONGO EXPEDITION LOST TO A MAN",
    style: "headline"},
  { text:"POLICE ON LOOKOUT FOR ESCAPED MESMERIST",
    style: "headline"},
  { text: "Bizarre Murder Of Beloved Actress",
    style: "headline"},
  { text: "DREAM-FEVER CLAIMS NEW VICTIM",
    style: "headline"},
  { text: "DESPERATE SEARCH FOR MISSING HIKERS",
    style: "headline"},
  { text: "HIGH HONORS FOR MISKATONIC PROF.",
    style: "headline"},
  { text: "DEFORMITY OF GOVERNOR'S BABY",
    style: "headline"},
  { text: "SAVAGERY IN COASTAL TOWN",
    style: "headline"},
  
  // Articles:
  { text: "Residents of the Old Town said the noises began at midnight, and ended fifteen minutes later with an abrupt bang. Several also mentioned an eerie blue light emanating from within the low clouds.",
    style: "article"},
  { text: "The Yataghan is said to be an enormous creature with the head of a squid and the body of a squid, though not the same squid. The savages fall to the ground and cover their heads if its name is so much as mentioned, such is their fear of this devil.",
    style: "article"},
    {text: "After a certain time the corpse begins to move. It stands up and tries to escape; the sorcerer firmly clinging to it, prevents it from freeing itself. Now the body struggles more fiercely.It leaps and bounds to more extraordinary heights, dragging with it the man who must hold on, keeping his lips upon the mouth of the monster, and continue mentally repeating the magic words. \
At last the tongue of the corpse protrudes from its mouth. The critical moment has arrived. The sorcerer seizes the tongue with his teeth and bites it off. The corpse at once collapses. \
Failure in controlling the body after having awaked it, means certain death for the sorcerer.",
  style: "article"}, // Alexandra David Neel, "Magic and Mystery In Tibet"
  {text: "Their size reminded us of some of the archaic penguins depicted in the Old Ones’ sculptures, and it did not take us long to conclude that they were descended from the same stock — undoubtedly surviving through a retreat to some warmer inner region whose perpetual blackness had destroyed their pigmentation and atrophied their eyes to mere useless slits.",
  style: "article"},  // At The Mountains Of Madness
    
  // Notes:
  { text: "I am beginning to suspect that old Gregorius is not entirely sane. His speculations about the provenance of the artifacts grow wilder by the day. I may have to have him relieved of his duties.",
    style: "notes"},
  { text: "Progress! I have now been able to keep the reassembled guinea-pigs alive for up to six hours, before the seams burst. They appear fully awake, although their tempers alter to a vicious degree, such that after the incident of the 14th I have had to house them in stronger cages.",
    style: "notes"},
  { text: "They were pinkish things about five feet long; with crustaceous bodies bearing vast pairs of dorsal fins or membranous wings and several sets of articulated limbs, and with a sort of convoluted ellipsoid, covered with multitudes of very short antennae, where a head would ordinarily be.",
    style: "notes"}, // H.P. Lovecraft, The Whisperer In Darkness
    { text: "The object was some fifty feet in length, of roughly cylindrical shape, and about ten feet in diameter. It was unmistakably a gilled fish in its major affiliations; but with certain curious modifications such as rudimentary forelegs and six-toed feet in place of pectoral fins, which prompted the widest speculation. Its extraordinary mouth, its thick and scaly hide, and its single, deep-set eye were wonders scarcely less remarkable than its colossal dimensions.",
    style: "notes"}, // H.P. Lovecraft & Sonia H. Greene, The Horror At Martin's Beach
    {text: "It was on the thumb of her right hand, that the growth first showed. It was only a small circular spot, much like a little grey mole. My god! how the fear leapt to my heart when she showed me the place. We cleansed it, between us, washing it with carbolic and water. In the morning of the following day she showed her hand to me again. The grey warty thing had returned.",
    style: "notes"}, // William Hope Hodgson, The Voice In the Night
    {text: "Objects are eight feet long all over. Six-foot five-ridged barrel torso 3.5 feet central diameter, 1 foot end diameters. Dark grey, flexible, and infinitely tough. Seven-foot membraneous wings of same colour, found folded, spread out of furrows between ridges. Wing framework tubular or glandular, of lighter grey, with orifices at wing tips. Spread wings have serrated edge.",
    style: "notes"}, // At The Mountains Of Madness
    {text: "Bulbous light-grey pseudo-neck, without gill suggestions, holds greenish five-pointed starfish-arrangement. Tough, muscular arms 4 feet long and tapering from 7 inches diameter at base to about 2.5 at point. To each point is attached small end of a greenish five-veined membraneous triangle 8 inches long and 6 wide at farther end. This is the paddle, fin, or pseudo-foot which has made prints in rocks from a thousand million to fifty or sixty million years old.",
    style: "notes"}, // At The Mountains Of Madness
    
  // Telegrams:
  { text:"Amazing discovery at dig stop unknown idol stop send more workers",
    style: "telegram"},
  { text:"Your uncle Jasper died stop my condolences stop you inherit his mansion -McMasters",
    style: "telegram"},
  { text: "Send my copy of 'Unspeakable Cults' to camp. Urgent!",
    style: "telegram"},
  { text: "The horror! The horror!",
    style: "telegram"},
    
  // Tomes:
  { text: "In his great easy-chair at R'lyeh, Dread Dobbs reclines smoking",
    style: "tome"},
  { text: "Tekeli-li! Tekeli-li! The Great One shall rise! I have foreseen it!",
    style: "tome"},
  {text: "Daemons, when desiring an human form for evil purposes, take to themselves the bodies of hanged men.",
    style: "tome"}, // H.P. Lovecraft, Commonplace Book
    {text: "Trident-bearing Neptune was there, and sportive tritons and fantastic nereids, and upon dolphins’ backs was balanced a vast crenulate shell wherein rode the grey and awful form of primal Nodens, Lord of the Great Abyss.",
    style: "tome"}, // H.P. Lovecraft, The Strange High House In the Mist
  {text: "Ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn.",
    style: "tome"},
  {text: "Then down the wide lane betwixt the two columns a lone figure strode; a tall, slim figure with the young face of an antique Pharaoh, gay with prismatic robes and crowned with a golden pshent that glowed with inherent light.",
    style: "tome"}, // HPL, Nyarlathotep
];

var Oracles = [Clues];
var OracleNames = ["Clues And Portents"];
