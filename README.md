# react-password-generator
A mobile-friendly // responsive React app which utilizes the Passwordinator API.  
Taking benefit of the useState hook, we listen to the user choices: his choice of length, numbers, special characters and uppercase letters is listened.
Then, using these information, a GET request is dynamically created:

Ex. If a user wants a password with a length of 9 with at least one special character and uppercase letter, the corresponding GET request is:

https://passwordinator.herokuapp.com/generate?char=true&caps=true&len=9.

Eventually, the result is rendered accordingly.
