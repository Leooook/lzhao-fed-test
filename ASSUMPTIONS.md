## Description of my solution

Talk us through your solution, thought process etc here.

I completed the work through the following steps:
1. check/modify the environment and config (package.json/webpack.config/jest.config)
2. Build structure of App and create component files:
   header -- header of website
   loader -- loading component, use for when loading data
   feature -- container of all cards
   detail -- each card's detail
3. I try to use TDD and assume the test function first.
4. Fulfill the core function, through React.js and achieve through following steps:
   1. Use Fetch to get data and make sure get data successfully each time and confirm the data structure.
   2. Develop header and loader component, build a basic website structure.
   3. Implenment feature component make sure it can sure one card detail and show load component when loading data.
   3. Build detail component and fulfill a small user card with important data and add css for it. (Part1 finished).
   4. Make it can display 6 cards once on feature component and add 'more-card' function in App (Part2 finished). And core function completed.
5. Add test function, fix bugs and use Eslint to fix style. 

## Things I would do next

Anything that you didn't get time to do should go here.

No but I not good at test I think my test function is not perfect.

## Assumptions that I made

Any assumptions that were made about the application - this could be around acceptance criteria etc.

1. More test complete functions
2. I think use Context + Hooks is better if I will develop more complex features.
3. Add more animation and inforamtion to card, such as card can be clicked and rotate to the back and display more information.
