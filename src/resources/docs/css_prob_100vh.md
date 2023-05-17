# CSS vh problem

-   found that when I used 100vh on the body{
    -   height: 100vh
-   }
-   and used linear-gradient and also background-blend-mode: screen
-   that it would lag with my drop-down menu and other element manipulation logic
-   finally figured out that when I implemented:
-   background-repeat: no-repeat
-   it cleared the problem up and flowed smoothly.
