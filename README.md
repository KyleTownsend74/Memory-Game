# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kyle Townsend**

Time spent: **9** hours spent in total

Link to project: https://glitch.com/edit/#!/private-romantic-mountain

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning and Button Walkthrough:
![](https://cdn.glitch.com/47cc424f-eaf2-4a67-ad78-3bd2e50569a4%2Fwalkthrough-win.gif?v=1615686206214)
Losing Walkthrough (Can lose by running out of time or making 3 mistakes):
![](https://cdn.glitch.com/47cc424f-eaf2-4a67-ad78-3bd2e50569a4%2Fwalkthrough-lose.gif?v=1615686213150)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used the links provided in the prework page in addition to these web pages:
https://pages.mtu.edu/~suits/notefreqs.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/js/js_timing.asp
https://www.w3schools.com/js/js_htmldom_html.asp
https://www.w3schools.com/tags/default.asp
https://www.w3schools.com/tags/ref_av_dom.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One challenge I encountered when creating this submission was implementing the ticking clock optional feature. 
I read up on the `setInterval` and `clearInterval` methods, but it took some time to figure out exactly when to call these methods.
When I first attempted to implement it, I ran into a few errors. For example, if the user started the game 
and then stopped the game before the timer started, the timer would keep going and continuously reset itself even
though the game was stopped. At this point, I thought that I had called the `clearInterval` method at all the 
appropriate times, but I clearly had made a mistake because I was getting the error. I figured out that this was happening 
because the `clearInterval` method was being called when the user stopped the game and before the `setInterval` method was being 
called, and the `setInterval` method would be called even if the game was stopped. I fixed this by checking if the 
`gamePlaying` variable was set to `true` before calling the `setInterval` method. Another bug that I encountered later on 
was when the user made a mistake in repeating back the pattern and before the game was lost (I had implemented 
the 3 strike optional feature at this point), the timer would continue and cause the player to lose the game anyway. 
I fixed this by calling the `clearInterval` method when the user made a mistake instead of simply letting the timer continue.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
This submission taught me a lot about web development. Prior to this assignment, I had very limited knowledge 
on HTML and JavaScript, and I had no knowledge on CSS. However, now I have a good grasp on the basics of these languages. 
One question about web development after completing the submission is how would one go about programming a web 
application using HTML, CSS, and JavaScript without utilizing a tool such as Glitch? And as an extension to that 
question, what other tools are available other than Glitch and what are the pros and cons to each? One last question 
I have is are there other languages commonly used in web development or are HTML, CSS, and JavaScript the main ones?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on the project, one thing I would do is rewrite some code to be less redundant. 
For example, the `playTone` and `startTone` methods both do the same thing but in different scenarios in the game. I could 
rewrite some code to combine them into one method that handles both scenarios appropriately. I would also make
a more interesting background for the application. Instead of a solid color, I could make a color gradient or put
an image as the background. I would also try to figure out how to make the images in the buttons more seamless. 
As of now, the images are a bit too attention grabbing. I could try to figure out how to blur the edges of the 
image into the button or make the colors of the image less intense.



## License

    Copyright [Kyle Townsend]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.