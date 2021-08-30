var url_string = window.location.href;
var url = new URL(url_string);
var subCat = url.searchParams.get("subCat");

var title_one = url.searchParams.get("title_one");
var img_one = url.searchParams.get("img_one");

var title_two = url.searchParams.get("title_two");
var img_two = url.searchParams.get("img_two");

var title_three = url.searchParams.get("title_three");
var img_three = url.searchParams.get("img_three");

var title_four = url.searchParams.get("title_four");
var img_four = url.searchParams.get("img_four");

var title_five = url.searchParams.get("title_five");
var img_five = url.searchParams.get("img_five");

// ----------------------------------------------

var getSubCat = document.querySelector('.courseV-sec1 .heading');

getSubCat.innerText = subCat;

var getTitleOne = document.querySelector('.courseV-sec1 .col:nth-child(2) .course-card > h5');

getTitleOne.innerText = title_one;

var getTitleTwo = document.querySelector('.courseV-sec1 .col:nth-child(3) .course-card > h5');

getTitleTwo.innerText = title_two;

var getTitleThree = document.querySelector('.courseV-sec1 .col:nth-child(4) .course-card > h5');

getTitleThree.innerText = title_three;

var getTitleFour = document.querySelector('.courseV-sec1 .col:nth-child(5) .course-card > h5');

getTitleFour.innerText = title_four;

var getTitleFive = document.querySelector('.courseV-sec1 .col:nth-child(6) .course-card > h5');

getTitleFive.innerText = title_five;




var course_card_datails_one = document.querySelector('.courseV-sec1 .col:nth-child(2) .course-card > .details > h5');

course_card_datails_one.innerText = title_one;

var course_card_datails_two = document.querySelector('.courseV-sec1 .col:nth-child(3) .course-card > .details > h5');

course_card_datails_two.innerText = title_two;

var course_card_datails_three = document.querySelector('.courseV-sec1 .col:nth-child(4) .course-card > .details > h5');

course_card_datails_three.innerText = title_three;

var course_card_datails_four = document.querySelector('.courseV-sec1 .col:nth-child(5) .course-card > .details > h5');

course_card_datails_four.innerText = title_four;

var course_card_datails_five = document.querySelector('.courseV-sec1 .col:nth-child(6) .course-card > .details > h5');

course_card_datails_five.innerText = title_five;




var getImgOne = document.querySelector('.courseV-sec1 .col:nth-child(2) .course-card img');
var getImgTwo = document.querySelector('.courseV-sec1 .col:nth-child(3) .course-card img');
var getImgThree = document.querySelector('.courseV-sec1 .col:nth-child(4) .course-card img');
var getImgFour = document.querySelector('.courseV-sec1 .col:nth-child(5) .course-card img');
var getImgFive = document.querySelector('.courseV-sec1 .col:nth-child(6) .course-card img');

getImgOne.setAttribute("src", "images/" + img_one);
getImgTwo.setAttribute("src", "images/" + img_two);
getImgThree.setAttribute("src", "images/" + img_three);
getImgFour.setAttribute("src", "images/" + img_four);
getImgFive.setAttribute("src", "images/" + img_five);