
# **JS Survivor**

## Getting Started

- This will be submitted through a GitHub pull request, be sure to fork the sample repository to create your own repository copy.
- Clone the forked repository into your local machine using `$ git clone` in the terminal, remember that this will create a NEW folder with the repository's name that you can then `cd` into.
- Open this directory in VS Code with:
    - `code .`

## **Objectives**

- Practice creating Classes.
- Practice instantiating Objects.
- Having Objects interact with each other.

## **Game Synopsis**

Create a Survivor simulation.

## Step 1

- Add the randomNum function that returns a random number less than the parameter. Used for creating random values in the game.

## Step 2

### Create a Class

- Create a class named `Survivor`

### Survivor Class **PROPERTIES**

- `name`: The Survivor’s name, have the name be the parameter for the class constructor.
- `campResource`: represent the camp's ‘Fire’, ‘Water’ and ‘Food’. Give the campResource properties a `createResource` property and have that be set to `randomNum()` functions.
- Set ‘Fire’ to `createResource: *randomNum*(3)`. This is randomly setting a value between 0 and 3 for how much fire the camp will have to gather.
- Set ‘Water’ to `createResource: *randomNum*(10)`. This is randomly setting a value between 0 and 10 for how much water the camp will have to gather.
- Set ‘Food’ to `createResource: *randomNum*(5)`. This is randomly setting a value between 0 and 5 for how much food the camp will have to gather.
- `day`: Set the day to 0.
- `health`: Set the health to 100.

### Create a Method

- Create a Method named `camp` and set the parameter to `damage`. ( The amount of damage can be changed to make survival more difficult. Set between 1 - 10 ).
- Create a variable named `resource` that will randomly select a  `campResource` property, using `.length`. The survivor can only look for 1 resource a day.
- Create a variable named `found` that will randomly select a number for the current `resource` from the createdResource values. ( If createdResource has a value of 2 for ‘Water’ that can be gathered, the Survivor can only have `found` up to 2 when the method is run ).
- Set the `day` property to add `1` for each time the method is run. This will be what defines a day of survival.
- Set the `health` property to add `found - damage` for each time the method is run.
- Create a console.log that displays the daily stats. ( “ Day 2. There were 2 Fire resources and Paul found 0. Paul’s health is at 90%. ” ).

## **Step 3**

### Create Game Logic

- Create your new Survivor and the parameters.
- Create a gameOver variable toggle for a loop.
- Create a loop that does the following:
    - Runs the camp method with a defined damage parameter.
    - If the Survivors health reaches 0:
        - toggle gameOver variable.
        - Create a console.log that displays how many days the survivor lived. ( “ Paul survived for 200 days. “ ).
    - If the Survivors health reaches 200:
        - toggle gameOver variable.
        - Create a console.log that displays how many days the survivor lasted before they were rescued! ( “ Paul was rescued after 300 days! “ ).
    