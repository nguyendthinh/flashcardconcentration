<!--  Very solid readme! I might add a note up top about technologies used.-->

User Stories:

1. When the user clicks on the new game button, the game will begin by blinking a random color tile.
2. The user will then proceed to click on the same color tile that the computer just blinked. If they get it right, the computer will then blink that color tile again and add another blinking color tile to that sequence.
3. The process will then repeat itself as the users try to click on the correct sequence of color the computer presents to them and the computer adds on one more random color to the sequence.
4. At the bottom is a timer to keep track of how long the game has been going and a panel that indicates to the players how many more clicks they get until the color panel sequence that they clicked are compared to the computer's color sequence.
5. If the sequence of color that the player click is not exactly the same as the computer's, the screen will turn red and the game (and timer) will stop. The computer will then give the player the scores based on how many rounds they managed to complete and on quickly they completed those rounds based on how long the timer has been going.

Explanation:

For this project, I used atom to code the functionality, structure, and styling for the game. I also used photoshop to create visually-appealing images to boost the game's appearance to make the user experience much more enjoyable.

The project that I took to the game was to break down each part of creating the game down to very tiny components:
  1. I first started by creating the divs of the four color tile and a button and program the button so that when it is pressed, a random color tile would blink.
  2. The next step was to figure out how to let the computer know how to compare what was being clicked on by the user with the sequence that it has created and when to compare it.
  3. After that, it was figuring out how to let the computer automatically continue the sequence of color when the user has clicked on the right tiles.
  4. The most frustrating part however, was figuring out how to let the computer continue the sequence by flashing ONE color at a time as opposed to flashing everything at once in the sequence.
  5. Once I figured out the 4 steps above, I began designing the visual pieces (the tiles, the harddrive, the background) in Photoshop by editing images found on google in Photoshop.
  6. I then added a giant box that houses the new game button and displays the current level that the user is on and two squares for the timer and the "clicks left".
  7. What was left was just to figure out how put a functioning timer and how to indicate to the player the amount of clicks they have left. **
