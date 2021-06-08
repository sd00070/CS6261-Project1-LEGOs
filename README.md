# Project 1: Sorting LEGOs by size and color

This tiny application will be used to keep track of a bunch of LEGO bricks.
When it is complete, it should be able to distribute the bricks into piles according to their size and color, and it should be able to check to see if a brick of a certain size and color exists in the pile.

The purpose of the assignment is to gain familiarity with using BSTs (Binary Search Trees), Dictionaries, the mocha test framework, and the git CLI.

## Notes to Dr. B

Thanks for looking at my readme!
I know it isn't in the requirements, but every good git repo should have one.

I will be placing my notes here: notes about the project,
notes to be seen by the professor, and notes to myself to keep track of things.

I will try to remember to keep the readme up-to-date with every commit,
but I'm make sure that at least every push has an appropriate readme.

### Why did you tell git to ignore the node_modules directory?
> The node_modules directory is notorious for being incredibly large. Due to the way commits work in git, each iterative commit would grow rapidly in comparison to its predecessor. I try to make a lot of commits (I may commit a bit too often), and I do not want to bust the upload size on Moodle.

### Why did you change the name of the primary branch from "master" to "main"?
> Github relatively recently changed all of their primary branches to "main." In order to match the standard (as I will be hosting the repo on github), I decided it would be best to change it.

## TODO

1. [x] project setup
2. [x] Brick class & tests
3. [x] Book's BST
4. [x] LegoPile (dictionary) class
5. [x] searching the LegoPile
6. [x] counting all of the Bricks
