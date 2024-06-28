### @hideIteration true

```template
let score = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let speed = 1000
let maze = [game.createSprite(0, 0)]

input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})

basic.forever(function () {
    for (let wall of maze) {
    wall.change(LedSpriteProperty.Y, 1)
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

# Mission 1

## Introduction @showdialog

Can you find your way through the maze of asteroids without damaging the spaceship?

## Step 1

The Voyager probe is on its way back to Earth. To get there, it will need to pass through a lot of space junk! We will simulate this by programming a maze game! To get you started, we have added a few blocks to your **Workspace**. See those ``||input:A||`` and ``||input:B||`` button blocks? They allow you to move your ship left and right when moving through the maze. Likewise, the ``||basic:on start||`` block tells the program where to position your ship when the game begins. Cool, huh?

```blocks
export let score = 0
export let player: game.LedSprite = null
player = game.createSprite(2, 4)
export let speed = 1000
export let maze = [game.createSprite(0, 0)]

input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
```

## Step 2

With the movement and starting position of the ship already completed, we will focus on making the game work. 
1.  First, open the ``||logic:Logic||`` toolbox and place a ``||logic:if true then||`` block inside the ``||basic:forever||`` block, right under the ``||game:wall change y by 1||`` block. 
2.	Next, go back to the ``||logic:Logic||`` toolbox and this time grab a ``||logic:if true then else||`` block. Place that block inside the ``||logic:if true then||`` block you just added. 

You can click on the light bulb if you need a hint. 


```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (true) {
            // @highlight
            if (true) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 3

Our game works by guiding a spaceship through an ever changing maze. If the spaceship touches a wall of the maze, the game ends and shows you a score. 
1.	Open the ``||logic:Logic||`` toolbox, a drop a ``||logic:0 = 0||`` block into your **Workspace**. 
2.	Open the ``||game:Game||`` toolbox, grab a ``||game:sprite x||`` block, and drop it in the first 0 of your ``||logic:0 = 0||`` block. 
3.	Next, change sprite to the ``||variables:wall||`` variable and set it ``||game:y||``.
4.	Finally, change the last zero to a 4.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (true) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 4

Lets continue to build our moving maze walls.
1. First, take the ``||logic:wall y = 4||`` block and insert it in your first conditional statement between the ``||logic:if||`` and ``||logic:then||``. 
2. Now, open the ``||game:Game||`` toolbox and drag out the ``||game:is sprite touching||`` block. Insert it after the ``||logic:if||`` and ``||logic:then||`` in the second conditional statement. 
3. Change the sprite variable to ``||variables:wall||`` using pull down arrow.
4. Finally, open the ``||variables:Variables||`` toolbox, grab the ``||variables:player||`` block and place it in the space after ``||game:is sprite touching||``. 


```block
export let maze: game.LedSprite[] = 0
export let speed = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        // @highlight
        if (wall.get(LedSpriteProperty.Y) == 4) {
            // @highlight
            if (wall.isTouching(player)) {

            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 5

In this step, we will tell the program what to do when a player touches a wall.
1.	Open the ``||game:Game||`` toolbox, grab a ``||game:set score 0||`` block and drop it under the ``||logic:if||`` ``||game:is wall touching player||`` block.
2.	Then open the ``||variables:Variables||`` toolbox and place a ``||variables:score||`` block inside the ``||game:set score||`` block. 
3.	Finally, open the ``||game:Game||`` toolbox again and drag out the ``||game:game over||`` block. Place that under the ``||game:set score score||`` block you just added.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                // @highlight
                game.setScore(score)
                // @highlight
                game.gameOver()
            } else {

            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 6

Let’s take a moment to review our progress so far. First, you used a ``||basic:forever||`` block to ensure that the code would always be running. You then used a combination of ``||game:game||`` blocks and ``||logic:conditional statements||`` to make the walls of the maze move. You also defined what would happen if the player’s ship touched a ``||variables:wall||`` - the ``||game:game would end||`` and a ``||game:score||`` would appear. Good Job!

## Step 7

So we have made the maze move and decided what happens when the player touches a wall. Now we need to decide what happens if the player doesn’t touch a wall!
1. Open the ``||game:Game||`` toolbox and grab a ``||game:delete sprite||`` block. Place that block under ``||logic:else||`` in our conditional statement. 
2. Change ``||variables:sprite||`` to ``||variables:wall||`` using the pull down arrow.
3. Now, open the ``||variables:Variables||`` toolbox and grab a ``||variables:change sprite by 1||`` block. Place it under the ``||game:delete wall||`` block you just added. 
4. Finish this step by changing ``||variables:sprite||`` to ``||variables:score||`` using the pull down arrow.

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                game.setScore(score)
                game.gameOver()
            } else {
                // @highlight
                wall.delete()
                // @highlight
                score += 1
            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 8

Our maze game is almost done and you have done an incredible job so far. Lets finish strong! 
1.	Open the ``||arrays:Arrays||`` toolbox and add the ``||arrays:list remove value at 0||`` block to your **Workspace**
2.	Then open the ``||arrays:Arrays||`` toolbox again and this time add the ``||arrays:list find index of||`` block.
3.	Add the ``||arrays:list find index of||`` block to the ``||arrays:list remove value at||`` block by inserting it where the 0 is.
4.	Open the ``||variables:Variables||`` toolbox and grab the ``||variables:wall||`` block. Place it at the end of ``||arrays:list find index of||`` block. 
5.	Finally, change the ``||variables:list||`` variable to ``||variables:maze||`` using the arrow.    

```block
export let maze: game.LedSprite[] = 0
export let speed = 0
export let score = 0

basic.forever(function () {
    for (let wall of maze) {
        wall.change(LedSpriteProperty.Y, 1)
        if (wall.get(LedSpriteProperty.Y) == 4) {
            if (wall.isTouching(player)) {
                game.setScore(score)
                game.gameOver()
            } else {
                wall.delete()
                score += 1
                // @highlight
                maze.removeAt(maze.indexOf(wall))
            }
        }
    }
    maze = Module4_M1.createMazeLine(maze)
    basic.pause(speed)
})
```

## Step 9

Wow, that was some super coding on your part! You used conditional statements, variables, game elements and even arrays to build a maze avoidance game. Go ahead and download the program into your robot and see if you can fly your ways through the space junk. This was your most difficult program yet and you never gave up. Great job!



