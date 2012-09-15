# Oracles

This is just a simple web-app that randomly chooses and displays messages, intended to serve as inspiration for roleplaying games or fiction. [See it in action][SITE].

There are a lot of these already (check out [Chaotic Shiny][SHINY] and [Abulafia][ABULAFIA]), and there's nothing especially novel about this one; it's just that the existing ones display very bare-bones HTML, but I wanted one that's as lovely as the book that inspired it.

That book is Vincent Baker's **_[In A Wicked Age][IAWA]_**, a dark fantasy sword-and-sorcery roleplaying game focused on storytelling. An integral part of the game is its four "Oracles": before each session the group draws four cards from one of these and uses the characters, locations and situations they describe.

There are already [two][ORACLE1] [different][ORACLE2] perfectly functional web implementations of these oracles -- as I said, mine is nothing novel -- but I wanted to add a few things...

## Features

* It's pretty! I've tried to follow the faux-Middle-Eastern design of Baker's book without aping it exactly. I used free fonts from [Google Web Fonts][GWF] and backgrounds from [Eos][EOS].
* It looks pretty good on an iPhone, using the special `viewport` meta tag. (I'm not sure how it looks on Android or other mobile devices; let me know if it can be improved.)
* On iOS it's optimized for being saved to the home screen. It's got a custom icon and it opens up full-screen. (It doesn't yet run offline, though.)
* It's 100% client-side code, so you can run it on any web server or even on your local disk, without needing PHP or anything else.

## Credits

* **The oracle names and text are copyright &copy; 2007 Vincent Baker.**
* Macondo Swash Caps font is by John Vargas Beltrán. (SIL Open Font License)
* Goudy Bookletter 1911 font is by Barry Schwartz, based on the original design by Frederick Goudy.  (SIL Open Font License)
* Background textures are by Eos Design. (No license specified; free for personal/nonprofit use)
* Code and markup are by me, [Jens][SNEJ]. (License is ... um, let's say Apache 2.)

[SITE]: http://mooseyard.com/oracles/
[SHINY]: http://chaoticshiny.com
[ABULAFIA]: http://www.random-generator.com
[IAWA]: http://www.lumpley.com/wicked.html
[ORACLE1]: http://www.lumpley.com/oracle/4oracles.php
[ORACLE2]: http://www.random-generator.com/index.php?title=In_a_Wicked_Age
[GWF]: http://www.google.com/webfonts
[EOS]: http://www.eosdev.com/ForYouFromEos.htm
[SNEJ]: http://github.com/snej
