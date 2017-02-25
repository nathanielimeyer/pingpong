# _Ping Pong_

#### _Counts from 1 to a user supplied input but replaces certain numbers with strings_

#### By _**Nathaniel Meyer**_

## Description

_This project uses a webform to gather a numeric input from the user. Then it counts from 1 to that number with the following exceptions:_

* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"

_The user should be able to use the feature over and over without reloading._

## _Project Specifications_

|Business Logic Requirements|input|output|
|-----------|:---:|:----:|
|Given a number, count from 1 to that number|6|1,2,3,4,5,6|
|Check whether each number in the count is divisible by 3|1,2,3,4,5,6|false, false, true, false, false, true|
|If the number is divisible by three, return ping instead of the number|1,2,3,4,5,6|1,2,ping,4,5,ping|
|Check whether each number in the count is divisible by 5|1,2,3,4,5,6|false, false, false, false, true, false|
|If the number is divisible by 5, return pong instead of the number|1,2,3,4,5,6|1,2,ping,4,pong,ping|
|Check whether each number in the count is divisible by 15|...15,16,17,18,19,20...|...true,false,false,false,false,false...|
|If the number is divisible by 15 return "ping-pong" instead of the number|...15,16,17,18,19,20...|...ping-pong,16,17,ping,19,pong...|
|Support negative numbers|-7|1,ping-pong,-1,-2,ping,-4,pong,ping,-7|

|UI Requirements|input|output|
|-----------|:---:|:----:|
|Prompt for input|||
|Populate output|||
|Require numerical input|||
|If the input is not a number or there is no input, nag for a number|""|Please enter a number.|
|Clear output on resubmission|||
|Get some cool effects to fire when the element is not a number|||

## Setup/Installation Requirements

* _In any folder with git installed, run "git clone https://github.com/nathanielimeyer/pingpong"._
* _cd ./pingpong_
* _Open index.html (with any modern web browser.)_

## Known Bugs

_I spent a great deal of time trying to delay the appending of my li elements and cycle through my custom backgrounds as the output posted to the screen. I'm pretty frustrated with it - I spent most of the day looking for the answer. I have to be content with some custom styles on my li elements and changing the background image at the very end._

## Support and contact details

_nathanielimeyer@gmail.com_

## Technologies Used

_This web page uses HTML, CSS, and Bootstrap._

### License

*All rights reserved*

Copyright (c) 2017 **_Nathaniel Meyer_**
