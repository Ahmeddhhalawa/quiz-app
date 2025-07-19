const startSection = document.querySelector(".start-section")
const startBtn = document.querySelector(".start-section button");
const questionSection = document.querySelector(".question-section")
const questionHead = document.querySelector(".question-div h2")
const answerUl = document.querySelector(".answers-ul")
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const prevBtn = document.getElementById("prev-btn");
const currentQuestionSpan = document.getElementById("current-question-span");
const numberOfQuestionSpan = document.getElementById("number-of-question-span");
const progress = document.getElementById("progress")
const resultSection = document.querySelector(".result-section")
const messageSection = document.getElementById("message")
const messageText = document.getElementById("message-text")
const layoutDiv = document.getElementById("layout");
const confirmSection = document.getElementById("confirm-section")
const cancelConfirmMsgBtn = document.getElementById("cancel-btn")
const okayBtn = document.getElementById("okay-btn")
const scoreP = document.getElementById('score-p')
const gradeSpan = document.getElementById("grade-span");
const tryAgainBtn = document.getElementById("try-again-btn")
const subjectDiv = document.querySelector(".subjectListBtns")
const getBtn = document.getElementById("get-btn")
const choosingSection = document.getElementById("choosing-section")

let currentQuestionIndex = 0;
const numberOfQuestions = 15;
let selectedAnswers = [];
let questions = '';
const mathQuestions = [
  {
    question: "What is 1 + 1?",
    answers: ["1", "2", "3", "4"],
    rightAnswer: "2",
  },
  {
    question: "What is 5 - 2?",
    answers: ["1", "2", "3", "4"],
    rightAnswer: "3",
  },
  {
    question: "What is 3 x 2?",
    answers: ["4", "5", "6", "7"],
    rightAnswer: "6",
  },
  {
    question: "What is 10 / 2?",
    answers: ["2", "4", "5", "6"],
    rightAnswer: "5",
  },
  {
    question: "What is 4 + 3?",
    answers: ["5", "6", "7", "8"],
    rightAnswer: "7",
  },
  {
    question: "What is 8 - 4?",
    answers: ["3", "4", "5", "6"],
    rightAnswer: "4",
  },
  {
    question: "What is 5 x 1?",
    answers: ["1", "3", "5", "7"],
    rightAnswer: "5",
  },
  {
    question: "What is 9 / 3?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 2 + 6?",
    answers: ["7", "8", "9", "10"],
    rightAnswer: "8",
  },
  {
    question: "What is 7 - 1?",
    answers: ["4", "5", "6", "7"],
    rightAnswer: "6",
  },
  {
    question: "What is 4 x 2?",
    answers: ["6", "7", "8", "9"],
    rightAnswer: "8",
  },
  {
    question: "What is 12 / 4?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 5 + 5?",
    answers: ["9", "10", "11", "12"],
    rightAnswer: "10",
  },
  {
    question: "What is 10 - 3?",
    answers: ["6", "7", "8", "9"],
    rightAnswer: "7",
  },
  {
    question: "What is 3 x 3?",
    answers: ["6", "7", "8", "9"],
    rightAnswer: "9",
  },
  {
    question: "What is 15 / 5?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 6 + 2?",
    answers: ["7", "8", "9", "10"],
    rightAnswer: "8",
  },
  {
    question: "What is 9 - 2?",
    answers: ["6", "7", "8", "9"],
    rightAnswer: "7",
  },
  {
    question: "What is 2 x 7?",
    answers: ["12", "13", "14", "15"],
    rightAnswer: "14",
  },
  {
    question: "What is 18 / 6?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 7 + 0?",
    answers: ["0", "6", "7", "8"],
    rightAnswer: "7",
  },
  {
    question: "What is 11 - 5?",
    answers: ["4", "5", "6", "7"],
    rightAnswer: "6",
  },
  {
    question: "What is 6 x 2?",
    answers: ["10", "11", "12", "13"],
    rightAnswer: "12",
  },
  {
    question: "What is 20 / 4?",
    answers: ["3", "4", "5", "6"],
    rightAnswer: "5",
  },
  {
    question: "What is 3 + 8?",
    answers: ["10", "11", "12", "13"],
    rightAnswer: "11",
  },
  {
    question: "What is 12 - 6?",
    answers: ["5", "6", "7", "8"],
    rightAnswer: "6",
  },
  {
    question: "What is 5 x 3?",
    answers: ["12", "13", "14", "15"],
    rightAnswer: "15",
  },
  {
    question: "What is 21 / 7?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 4 + 4?",
    answers: ["7", "8", "9", "10"],
    rightAnswer: "8",
  },
  {
    question: "What is 15 - 7?",
    answers: ["6", "7", "8", "9"],
    rightAnswer: "8",
  },
  {
    question: "What is 7 x 1?",
    answers: ["1", "5", "7", "9"],
    rightAnswer: "7",
  },
  {
    question: "What is 24 / 8?",
    answers: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is 9 + 1?",
    answers: ["9", "10", "11", "12"],
    rightAnswer: "10",
  },
  {
    question: "What is 13 - 4?",
    answers: ["7", "8", "9", "10"],
    rightAnswer: "9",
  },
  {
    question: "What is 4 x 4?",
    answers: ["14", "15", "16", "17"],
    rightAnswer: "16",
  },
  {
    question: "What is 25 / 5?",
    answers: ["3", "4", "5", "6"],
    rightAnswer: "5",
  },
  {
    question: "What is 8 + 2?",
    answers: ["9", "10", "11", "12"],
    rightAnswer: "10",
  },
]
const englishQuestions = [
  {
    question: "What color is the sky?",
    answers: ["Green", "Red", "Blue", "Yellow"],
    rightAnswer: "Blue",
  },
  {
    question: "How many legs does a dog have?",
    answers: ["Two", "Three", "Four", "Five"],
    rightAnswer: "Four",
  },
  {
    question: "Which fruit is red?",
    answers: ["Banana", "Apple", "Orange", "Grape"],
    rightAnswer: "Apple",
  },
  {
    question: "What animal says 'Moo'?",
    answers: ["Cat", "Dog", "Cow", "Bird"],
    rightAnswer: "Cow",
  },
  {
    question: "How many fingers are on one hand?",
    answers: ["Three", "Four", "Five", "Six"],
    rightAnswer: "Five",
  },
  {
    question: "What do bees make?",
    answers: ["Milk", "Eggs", "Honey", "Bread"],
    rightAnswer: "Honey",
  },
  {
    question: "Which shape has three sides?",
    answers: ["Square", "Circle", "Triangle", "Star"],
    rightAnswer: "Triangle",
  },
  {
    question: "What do you use to write?",
    answers: ["Spoon", "Fork", "Pencil", "Shoe"],
    rightAnswer: "Pencil",
  },
  {
    question: "What is the opposite of 'hot'?",
    answers: ["Warm", "Cold", "Big", "Fast"],
    rightAnswer: "Cold",
  },
  {
    question: "Which meal is eaten in the morning?",
    answers: ["Dinner", "Lunch", "Breakfast", "Snack"],
    rightAnswer: "Breakfast",
  },
  {
    question: "What animal is black and white and lives in the snow?",
    answers: ["Tiger", "Lion", "Panda", "Giraffe"],
    rightAnswer: "Panda",
  },
  {
    question: "What is the name of our planet?",
    answers: ["Mars", "Moon", "Earth", "Sun"],
    rightAnswer: "Earth",
  },
  {
    question: "What do you wear on your feet?",
    answers: ["Hat", "Gloves", "Socks", "Scarf"],
    rightAnswer: "Socks",
  },
  {
    question: "Which season is it usually warm?",
    answers: ["Winter", "Spring", "Summer", "Autumn"],
    rightAnswer: "Summer",
  },
  {
    question: "What food is made from potatoes?",
    answers: ["Pizza", "Pasta", "Fries", "Soup"],
    rightAnswer: "Fries",
  },
  {
    question: "What do birds have to fly?",
    answers: ["Legs", "Fins", "Wings", "Tails"],
    rightAnswer: "Wings",
  },
  {
    question: "How many eyes do you have?",
    answers: ["One", "Two", "Three", "Four"],
    rightAnswer: "Two",
  },
  {
    question: "Which color is a leaf?",
    answers: ["Red", "Blue", "Green", "Purple"],
    rightAnswer: "Green",
  },
  {
    question: "What do you use to drink water?",
    answers: ["Plate", "Cup", "Bowl", "Fork"],
    rightAnswer: "Cup",
  },
  {
    question: "What animal swims in the ocean and has fins?",
    answers: ["Cat", "Dog", "Fish", "Bird"],
    rightAnswer: "Fish",
  },
  {
    question: "What is the first letter of the alphabet?",
    answers: ["B", "C", "A", "D"],
    rightAnswer: "A",
  },
  {
    question: "What do you use to clean your teeth?",
    answers: ["Soap", "Sponge", "Toothbrush", "Towel"],
    rightAnswer: "Toothbrush",
  },
  {
    question: "Which vehicle flies in the sky?",
    answers: ["Car", "Boat", "Airplane", "Train"],
    rightAnswer: "Airplane",
  },
  {
    question: "What is a baby dog called?",
    answers: ["Kitten", "Chick", "Puppy", "Cub"],
    rightAnswer: "Puppy",
  },
  {
    question: "How many seconds are in a minute?",
    answers: ["30", "45", "60", "90"],
    rightAnswer: "60",
  },
  {
    question: "What is the shape of a wheel?",
    answers: ["Square", "Triangle", "Circle", "Rectangle"],
    rightAnswer: "Circle",
  },
  {
    question: "What animal lives in water and has a shell?",
    answers: ["Fish", "Bird", "Turtle", "Spider"],
    rightAnswer: "Turtle",
  },
  {
    question: "What do you wear when it rains?",
    answers: ["Shorts", "Swimsuit", "Raincoat", "Sandals"],
    rightAnswer: "Raincoat",
  },
  {
    question: "Which finger is the shortest?",
    answers: ["Thumb", "Index finger", "Pinky finger", "Middle finger"],
    rightAnswer: "Pinky finger",
  },
  {
    question: "What is the color of a school bus?",
    answers: ["Red", "Green", "Blue", "Yellow"],
    rightAnswer: "Yellow",
  },
  {
    question: "What do you use to call someone?",
    answers: ["Book", "Phone", "Television", "Radio"],
    rightAnswer: "Phone",
  },
  {
    question: "Which animal is known for its long neck?",
    answers: ["Elephant", "Giraffe", "Zebra", "Lion"],
    rightAnswer: "Giraffe",
  },
  {
    question: "What is the capital letter of 'cat'?",
    answers: ["c", "T", "C", "A"],
    rightAnswer: "C",
  },
  {
    question: "What do you use to cut paper?",
    answers: ["Hammer", "Screwdriver", "Scissors", "Wrench"],
    rightAnswer: "Scissors",
  },
  {
    question: "What is the name of the big star in the sky?",
    answers: ["Moon", "Mars", "Sun", "Jupiter"],
    rightAnswer: "Sun",
  },
  {
    question: "How many wheels does a bicycle have?",
    answers: ["One", "Two", "Three", "Four"],
    rightAnswer: "Two",
  },
  {
    question: "What do you wear on your head?",
    answers: ["Shoe", "Pants", "Hat", "Gloves"],
    rightAnswer: "Hat",
  },
  {
    question: "What food comes from chickens?",
    answers: ["Milk", "Eggs", "Cheese", "Bread"],
    rightAnswer: "Eggs",
  },
  {
    question: "Which sound does a dog make?",
    answers: ["Meow", "Roar", "Woof", "Chirp"],
    rightAnswer: "Woof",
  },
  {
    question: "What is the opposite of 'up'?",
    answers: ["Side", "Over", "Down", "Around"],
    rightAnswer: "Down",
  },
  {
    question: "What do you use to watch movies?",
    answers: ["Book", "Radio", "Television", "Clock"],
    rightAnswer: "Television",
  },
  {
    question: "Which animal has stripes?",
    answers: ["Bear", "Tiger", "Rabbit", "Duck"],
    rightAnswer: "Tiger",
  },
  {
    question: "What is the color of grass?",
    answers: ["Blue", "Red", "Yellow", "Green"],
    rightAnswer: "Green",
  },
  {
    question: "What is the name of the day after Sunday?",
    answers: ["Tuesday", "Wednesday", "Monday", "Friday"],
    rightAnswer: "Monday",
  },
  {
    question: "What do you wear to keep warm in winter?",
    answers: ["T-shirt", "Shorts", "Coat", "Sandals"],
    rightAnswer: "Coat",
  },
  {
    question: "What do flowers grow from?",
    answers: ["Rocks", "Clouds", "Seeds", "Water"],
    rightAnswer: "Seeds",
  },
  {
    question: "How many months are in a year?",
    answers: ["10", "11", "12", "13"],
    rightAnswer: "12",
  },
  {
    question: "What animal hops and has a pouch?",
    answers: ["Monkey", "Elephant", "Kangaroo", "Snake"],
    rightAnswer: "Kangaroo",
  },
  {
    question: "What do you use to eat soup?",
    answers: ["Fork", "Knife", "Spoon", "Chopsticks"],
    rightAnswer: "Spoon",
  },
  {
    question: "Which color is a fire truck?",
    answers: ["Blue", "Green", "Yellow", "Red"],
    rightAnswer: "Red",
  },
  {
    question: "What is a baby cat called?",
    answers: ["Puppy", "Cub", "Kitten", "Chick"],
    rightAnswer: "Kitten",
  },
  {
    question: "What do you breathe?",
    answers: ["Water", "Food", "Air", "Sand"],
    rightAnswer: "Air",
  },
  {
    question: "How many sides does a square have?",
    answers: ["Two", "Three", "Four", "Five"],
    rightAnswer: "Four",
  },
  {
    question: "What is the largest animal on land?",
    answers: ["Lion", "Elephant", "Bear", "Wolf"],
    rightAnswer: "Elephant",
  },
  {
    question: "What do you use to see?",
    answers: ["Ears", "Nose", "Eyes", "Mouth"],
    rightAnswer: "Eyes",
  },
  {
    question: "Which vegetable is orange and crunchy?",
    answers: ["Potato", "Onion", "Carrot", "Lettuce"],
    rightAnswer: "Carrot",
  },
  {
    question: "What time of day is dark?",
    answers: ["Morning", "Noon", "Afternoon", "Night"],
    rightAnswer: "Night",
  },
  {
    question: "What do you use to sweep the floor?",
    answers: ["Mop", "Vacuum", "Broom", "Sponge"],
    rightAnswer: "Broom",
  },
  {
    question: "What animal has a long trunk?",
    answers: ["Zebra", "Giraffe", "Elephant", "Tiger"],
    rightAnswer: "Elephant",
  },
  {
    question: "What is the color of snow?",
    answers: ["Black", "Gray", "White", "Brown"],
    rightAnswer: "White",
  },
  {
    question: "What do you eat for a sweet treat?",
    answers: ["Meat", "Vegetables", "Candy", "Bread"],
    rightAnswer: "Candy",
  },
  {
    question: "What is the sound of a bell?",
    answers: ["Ring", "Bang", "Squeak", "Buzz"],
    rightAnswer: "Ring",
  },
  {
    question: "Which bird can talk?",
    answers: ["Pigeon", "Owl", "Parrot", "Duck"],
    rightAnswer: "Parrot",
  },
  {
    question: "What number comes after ten?",
    answers: ["Nine", "Eleven", "Twelve", "Thirteen"],
    rightAnswer: "Eleven",
  },
  {
    question: "What do you use to wash your hands?",
    answers: ["Towel", "Soap", "Toothbrush", "Comb"],
    rightAnswer: "Soap",
  },
  {
    question: "What is the home of a bird called?",
    answers: ["Cave", "Den", "Nest", "Hive"],
    rightAnswer: "Nest",
  },
  {
    question: "Which season do leaves fall off trees?",
    answers: ["Spring", "Summer", "Autumn", "Winter"],
    rightAnswer: "Autumn",
  },
  {
    question: "What animal runs very fast?",
    answers: ["Snail", "Turtle", "Cheetah", "Sloth"],
    rightAnswer: "Cheetah",
  },
  {
    question: "What do you use to tell time?",
    answers: ["Book", "Watch", "Scissors", "Ball"],
    rightAnswer: "Watch",
  },
  {
    question: "What is the color of the sun?",
    answers: ["Blue", "Green", "Yellow", "Purple"],
    rightAnswer: "Yellow",
  },
  {
    question: "What do you eat for breakfast that's round and flat?",
    answers: ["Soup", "Salad", "Pancake", "Steak"],
    rightAnswer: "Pancake",
  },
  {
    question: "Which sport uses a ball and a hoop?",
    answers: ["Soccer", "Tennis", "Basketball", "Golf"],
    rightAnswer: "Basketball",
  },
  {
    question: "What is the sound of a cat?",
    answers: ["Woof", "Moo", "Meow", "Chirp"],
    rightAnswer: "Meow",
  },
  {
    question: "What do you wear to swim?",
    answers: ["Jacket", "Sweater", "Swimsuit", "Boots"],
    rightAnswer: "Swimsuit",
  },
  {
    question: "What animal has a long tail and swings in trees?",
    answers: ["Bear", "Monkey", "Rabbit", "Deer"],
    rightAnswer: "Monkey",
  },
  {
    question: "What is the opposite of 'day'?",
    answers: ["Morning", "Night", "Noon", "Evening"],
    rightAnswer: "Night",
  },
  {
    question: "What do you use to sit on?",
    answers: ["Table", "Bed", "Chair", "Door"],
    rightAnswer: "Chair",
  },
  {
    question: "What do fish breathe with?",
    answers: ["Lungs", "Nose", "Gills", "Mouth"],
    rightAnswer: "Gills",
  },
  {
    question: "What is the color of ocean water?",
    answers: ["Red", "Green", "Blue", "Yellow"],
    rightAnswer: "Blue",
  },
  {
    question: "What do you drink when you are thirsty?",
    answers: ["Milk", "Juice", "Water", "Soda"],
    rightAnswer: "Water",
  },
  {
    question: "What animal flies at night and eats insects?",
    answers: ["Eagle", "Bat", "Owl", "Pigeon"],
    rightAnswer: "Bat",
  },
  {
    question: "How many toes are on one foot?",
    answers: ["Three", "Four", "Five", "Six"],
    rightAnswer: "Five",
  },
  {
    question: "What is the name of the small, round fruit often in bunches?",
    answers: ["Apple", "Orange", "Grape", "Banana"],
    rightAnswer: "Grape",
  },
  {
    question: "What do you use to comb your hair?",
    answers: ["Brush", "Spoon", "Fork", "Knife"],
    rightAnswer: "Brush",
  },
  {
    question: "What animal barks?",
    answers: ["Cat", "Dog", "Sheep", "Cow"],
    rightAnswer: "Dog",
  },
  {
    question: "What is the color of a stop sign?",
    answers: ["Blue", "Green", "Yellow", "Red"],
    rightAnswer: "Red",
  },
  {
    question: "What do you wear on your hands to keep them warm?",
    answers: ["Shoes", "Socks", "Gloves", "Hat"],
    rightAnswer: "Gloves",
  },
  {
    question: "What is a baby cow called?",
    answers: ["Lamb", "Calf", "Kid", "Foal"],
    rightAnswer: "Calf",
  },
  {
    question: "What do you use to open a door?",
    answers: ["Key", "Pen", "Book", "Chair"],
    rightAnswer: "Key",
  },
  {
    question: "What is the opposite of 'big'?",
    answers: ["Tall", "Small", "Wide", "Long"],
    rightAnswer: "Small",
  },
  {
    question: "Which light means 'go'?",
    answers: ["Red", "Yellow", "Green", "Blue"],
    rightAnswer: "Green",
  },
  {
    question: "What do you use to brush your hair?",
    answers: ["Spoon", "Toothbrush", "Hairbrush", "Towel"],
    rightAnswer: "Hairbrush",
  },
  {
    question: "What animal has a pouch for its baby?",
    answers: ["Bear", "Deer", "Kangaroo", "Fox"],
    rightAnswer: "Kangaroo",
  },
  {
    question: "What is the name of the big yellow fruit that grows on trees?",
    answers: ["Apple", "Orange", "Banana", "Grape"],
    rightAnswer: "Banana",
  },
  {
    question: "What do you use to tell a story?",
    answers: ["Numbers", "Words", "Pictures", "Sounds"],
    rightAnswer: "Words",
  },
]
const scienceQuestions = [
  {
    question: "What gas do humans breathe in?",
    answers: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    rightAnswer: "Oxygen",
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Earth", "Mars", "Mercury", "Venus"],
    rightAnswer: "Mercury",
  },
  {
    question: "What liquid falls from the sky as rain?",
    answers: ["Milk", "Juice", "Water", "Oil"],
    rightAnswer: "Water",
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Heart", "Brain", "Liver", "Skin"],
    rightAnswer: "Skin",
  },
  {
    question: "What metal is a good conductor for heat?",
    answers: ["Iron", "Copper", "Magnesium", "Sulphur"],
    rightAnswer: "Copper",
  },
  {
    question: "Which animal lays eggs?",
    answers: ["Dog", "Cat", "Chicken", "Cow"],
    rightAnswer: "Chicken",
  },
  {
    question: "What force pulls things down to Earth?",
    answers: ["Push", "Pull", "Gravity", "Wind"],
    rightAnswer: "Gravity",
  },
  {
    question: "What is the main source of light and heat for Earth?",
    answers: ["Moon", "Stars", "Sun", "Fire"],
    rightAnswer: "Sun",
  },
  {
    question: "What is the solid form of water called?",
    answers: ["Rain", "Vapor", "Ice", "Steam"],
    rightAnswer: "Ice",
  },
  {
    question: "Which gas do plants absorb from the air?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    rightAnswer: "Carbon Dioxide",
  },
  {
    question: "What body part helps you see?",
    answers: ["Ear", "Nose", "Eye", "Mouth"],
    rightAnswer: "Eye",
  },
  {
    question: "What is the opposite of a 'push'?",
    answers: ["Slide", "Pull", "Lift", "Drop"],
    rightAnswer: "Pull",
  },
  {
    question: "Which part of a plant is usually underground?",
    answers: ["Leaf", "Flower", "Stem", "Root"],
    rightAnswer: "Root",
  },
  {
    question: "What is the study of animals called?",
    answers: ["Botany", "Geology", "Zoology", "Astronomy"],
    rightAnswer: "Zoology",
  },
  {
    question: "What is a baby frog called?",
    answers: ["Chick", "Puppy", "Tadpole", "Kitten"],
    rightAnswer: "Tadpole",
  },
  {
    question: "What keeps birds flying in the air?",
    answers: ["Legs", "Wings", "Tail", "Beak"],
    rightAnswer: "Wings",
  },
  {
    question: "What do magnets attract?",
    answers: ["Wood", "Plastic", "Metal", "Glass"],
    rightAnswer: "Metal",
  },
  {
    question: "Which sense organ is for hearing?",
    answers: ["Eyes", "Nose", "Ears", "Tongue"],
    rightAnswer: "Ears",
  },
  {
    question: "What is the process of a caterpillar turning into a butterfly?",
    answers: ["Growing", "Eating", "Metamorphosis", "Sleeping"],
    rightAnswer: "Metamorphosis",
  },
  {
    question: "What is the force that makes things fall down?",
    answers: ["Push", "Pull", "Gravity", "Friction"],
    rightAnswer: "Gravity",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    rightAnswer: "Mars",
  },
  {
    question: "What is the main component of Earth's atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    rightAnswer: "Nitrogen",
  },
  {
    question: "What do trees produce for us to breathe?",
    answers: ["Water", "Food", "Oxygen", "Carbon Dioxide"],
    rightAnswer: "Oxygen",
  },
  {
    question: "What is the name of our galaxy?",
    answers: ["Andromeda", "Triangulum", "Milky Way", "Whirlpool"],
    rightAnswer: "Milky Way",
  },
  {
    question: "What is used to measure temperature?",
    answers: ["Ruler", "Scale", "Thermometer", "Clock"],
    rightAnswer: "Thermometer",
  },
  {
    question: "What part of the body do you use to smell?",
    answers: ["Eyes", "Ears", "Nose", "Mouth"],
    rightAnswer: "Nose",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: ["0°C", "50°C", "100°C", "200°C"],
    rightAnswer: "100°C",
  },
  {
    question: "Which animal is a mammal?",
    answers: ["Fish", "Bird", "Cat", "Snake"],
    rightAnswer: "Cat",
  },
  {
    question: "What causes thunder?",
    answers: ["Rain", "Wind", "Lightning", "Snow"],
    rightAnswer: "Lightning",
  },
  {
    question: "What is the study of rocks called?",
    answers: ["Biology", "Geology", "Chemistry", "Physics"],
    rightAnswer: "Geology",
  },
  {
    question: "What is the center of an atom called?",
    answers: ["Electron", "Proton", "Neutron", "Nucleus"],
    rightAnswer: "Nucleus",
  },
  {
    question: "What do plants need for photosynthesis?",
    answers: ["Darkness", "Sugar", "Sunlight", "Wind"],
    rightAnswer: "Sunlight",
  },
  {
    question: "What is the largest bone in the human body?",
    answers: ["Skull", "Rib", "Femur", "Spine"],
    rightAnswer: "Femur",
  },
  {
    question: "What is the natural process of a plant growing from a seed?",
    answers: ["Flowering", "Harvesting", "Germination", "Wilting"],
    rightAnswer: "Germination",
  },
  {
    question: "Which is a source of renewable energy?",
    answers: ["Coal", "Oil", "Solar", "Gas"],
    rightAnswer: "Solar",
  },
  {
    question: "What do bees collect from flowers?",
    answers: ["Water", "Honey", "Nectar", "Pollen"],
    rightAnswer: "Nectar",
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["O2", "CO2", "H2O", "NaCl"],
    rightAnswer: "H2O",
  },
  {
    question: "What is the name for a group of stars?",
    answers: ["Planet", "Comet", "Galaxy", "Asteroid"],
    rightAnswer: "Galaxy",
  },
  {
    question: "Which animal is an amphibian?",
    answers: ["Fish", "Bird", "Frog", "Lizard"],
    rightAnswer: "Frog",
  },
  {
    question: "What happens when you mix blue and yellow paint?",
    answers: ["Red", "Orange", "Green", "Purple"],
    rightAnswer: "Green",
  },
  {
    question: "What is the name of the process when water turns into vapor?",
    answers: ["Melting", "Freezing", "Evaporation", "Condensation"],
    rightAnswer: "Evaporation",
  },
  {
    question: "What is the main gas in the air we breathe out?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    rightAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the power source for electric cars?",
    answers: ["Gasoline", "Diesel", "Batteries", "Wood"],
    rightAnswer: "Batteries",
  },
  {
    question: "Which sense organ is for tasting?",
    answers: ["Eyes", "Nose", "Ears", "Tongue"],
    rightAnswer: "Tongue",
  },
  {
    question: "What is the solid state of matter?",
    answers: ["Liquid", "Gas", "Plasma", "Solid"],
    rightAnswer: "Solid",
  },
  {
    question: "What is the study of the weather called?",
    answers: ["Geology", "Biology", "Meteorology", "Astronomy"],
    rightAnswer: "Meteorology",
  },
  {
    question: "What do you call a very large body of salt water?",
    answers: ["Lake", "River", "Ocean", "Pond"],
    rightAnswer: "Ocean",
  },
  {
    question: "Which part of the body controls your thoughts and actions?",
    answers: ["Heart", "Lungs", "Brain", "Stomach"],
    rightAnswer: "Brain",
  },
  {
    question: "What animal builds dams in rivers?",
    answers: ["Fish", "Bear", "Beaver", "Duck"],
    rightAnswer: "Beaver",
  },
  {
    question: "What makes plants green?",
    answers: ["Water", "Soil", "Chlorophyll", "Sunlight"],
    rightAnswer: "Chlorophyll",
  },
  {
    question: "What is the main component of glass?",
    answers: ["Clay", "Sand", "Metal", "Plastic"],
    rightAnswer: "Sand",
  },
  {
    question: "What do you call an animal that eats only plants?",
    answers: ["Carnivore", "Omnivore", "Herbivore", "Predator"],
    rightAnswer: "Herbivore",
  },
  {
    question: "Which element do diamonds consist of?",
    answers: ["Gold", "Silver", "Iron", "Carbon"],
    rightAnswer: "Carbon",
  },
  {
    question: "What is the name of the star at the center of our solar system?",
    answers: ["Moon", "Jupiter", "Sun", "Mars"],
    rightAnswer: "Sun",
  },
  {
    question: "What type of energy does a light bulb produce?",
    answers: ["Heat", "Sound", "Light", "Mechanical"],
    rightAnswer: "Light",
  },
  {
    question: "What is the process of a liquid changing into a solid?",
    answers: ["Melting", "Evaporation", "Freezing", "Boiling"],
    rightAnswer: "Freezing",
  },
  {
    question: "What part of the body are your teeth in?",
    answers: ["Nose", "Ear", "Mouth", "Eye"],
    rightAnswer: "Mouth",
  },
  {
    question: "Which animal goes through metamorphosis?",
    answers: ["Dog", "Cat", "Butterfly", "Cow"],
    rightAnswer: "Butterfly",
  },
  {
    question: "What do you call a scientist who studies space?",
    answers: ["Biologist", "Geologist", "Astronomer", "Zoologist"],
    rightAnswer: "Astronomer",
  },
  {
    question: "What is the common name for NaCl?",
    answers: ["Sugar", "Water", "Table Salt", "Baking Soda"],
    rightAnswer: "Table Salt",
  },
  {
    question: "What causes an echo?",
    answers: ["Light", "Heat", "Sound reflection", "Wind"],
    rightAnswer: "Sound reflection",
  },
  {
    question: "What is the Earth's natural satellite?",
    answers: ["Sun", "Mars", "Moon", "Venus"],
    rightAnswer: "Moon",
  },
  {
    question: "Which type of rock is formed from cooled lava?",
    answers: ["Sedimentary", "Metamorphic", "Igneous", "Sandstone"],
    rightAnswer: "Igneous",
  },
  {
    question: "What does a barometer measure?",
    answers: ["Temperature", "Wind speed", "Air pressure", "Rainfall"],
    rightAnswer: "Air pressure",
  },
  {
    question: "What type of animal has a backbone?",
    answers: ["Insect", "Worm", "Vertebrate", "Jellyfish"],
    rightAnswer: "Vertebrate",
  },
  {
    question: "What is the main component of air?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    rightAnswer: "Nitrogen",
  },
  {
    question: "What is the name of the green pigment in plants?",
    answers: ["Melanin", "Hemoglobin", "Chlorophyll", "Carotene"],
    rightAnswer: "Chlorophyll",
  },
  {
    question: "Which of these is a liquid at room temperature?",
    answers: ["Wood", "Iron", "Water", "Stone"],
    rightAnswer: "Water",
  },
  {
    question: "What keeps boats floating on water?",
    answers: ["Weight", "Density", "Gravity", "Wind"],
    rightAnswer: "Density",
  },
  {
    question: "What is the thin layer of gas that surrounds Earth?",
    answers: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"],
    rightAnswer: "Atmosphere",
  },
  {
    question: "What do you call an animal that eats both plants and meat?",
    answers: ["Carnivore", "Herbivore", "Omnivore", "Scavenger"],
    rightAnswer: "Omnivore",
  },
  {
    question: "What is the unit of electric current?",
    answers: ["Volt", "Ohm", "Ampere", "Watt"],
    rightAnswer: "Ampere",
  },
  {
    question: "What part of the plant absorbs sunlight?",
    answers: ["Roots", "Stem", "Leaves", "Flowers"],
    rightAnswer: "Leaves",
  },
  {
    question: "Which is the smallest unit of matter?",
    answers: ["Molecule", "Compound", "Atom", "Cell"],
    rightAnswer: "Atom",
  },
  {
    question: "What is the force that slows things down when they rub together?",
    answers: ["Gravity", "Push", "Friction", "Pull"],
    rightAnswer: "Friction",
  },
  {
    question: "What causes day and night?",
    answers: ["Moon's orbit", "Earth's orbit around Sun", "Earth's rotation", "Sun's rotation"],
    rightAnswer: "Earth's rotation",
  },
  {
    question: "What type of animal is a shark?",
    answers: ["Mammal", "Bird", "Fish", "Reptile"],
    rightAnswer: "Fish",
  },
  {
    question: "What is the term for a group of birds?",
    answers: ["Herd", "Pack", "Flock", "School"],
    rightAnswer: "Flock",
  },
  {
    question: "What material is a good insulator of electricity?",
    answers: ["Copper", "Aluminum", "Plastic", "Silver"],
    rightAnswer: "Plastic",
  },
  {
    question: "What is the process where water turns from gas back into liquid?",
    answers: ["Evaporation", "Freezing", "Condensation", "Melting"],
    rightAnswer: "Condensation",
  },
  {
    question: "What makes up the main part of a tree trunk?",
    answers: ["Leaves", "Flowers", "Wood", "Roots"],
    rightAnswer: "Wood",
  },
  {
    question: "What do you call an animal that eats only meat?",
    answers: ["Herbivore", "Omnivore", "Carnivore", "Grazer"],
    rightAnswer: "Carnivore",
  },
  {
    question: "What protects your brain?",
    answers: ["Ribs", "Spine", "Skull", "Pelvis"],
    rightAnswer: "Skull",
  },
  {
    question: "What is the study of plants called?",
    answers: ["Zoology", "Geology", "Botany", "Ecology"],
    rightAnswer: "Botany",
  },
  {
    question: "Which planet has visible rings?",
    answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
    rightAnswer: "Saturn",
  },
  {
    question: "What is the main component of the sun?",
    answers: ["Oxygen", "Iron", "Hydrogen and Helium", "Carbon"],
    rightAnswer: "Hydrogen and Helium",
  },
  {
    question: "What is the process of a plant releasing water vapor?",
    answers: ["Photosynthesis", "Respiration", "Transpiration", "Germination"],
    rightAnswer: "Transpiration",
  },
  {
    question: "What produces light in the sky at night (apart from the moon)?",
    answers: ["Clouds", "Birds", "Stars", "Planes"],
    rightAnswer: "Stars",
  },
  {
    question: "What happens when you heat ice?",
    answers: ["It freezes", "It boils", "It melts", "It evaporates"],
    rightAnswer: "It melts",
  },
  {
    question: "What is the outermost layer of the Earth?",
    answers: ["Core", "Mantle", "Crust", "Outer Core"],
    rightAnswer: "Crust",
  },
  {
    question: "Which of these is a reptile?",
    answers: ["Frog", "Fish", "Snake", "Bird"],
    rightAnswer: "Snake",
  },
  {
    question: "What is the main component of pearls?",
    answers: ["Sand", "Plastic", "Calcium Carbonate", "Glass"],
    rightAnswer: "Calcium Carbonate",
  },
  {
    question: "What is the name for the movement of Earth around the Sun?",
    answers: ["Rotation", "Spinning", "Revolution", "Orbit"],
    rightAnswer: "Revolution",
  },
  {
    question: "What is the unit of force?",
    answers: ["Joule", "Watt", "Newton", "Volt"],
    rightAnswer: "Newton",
  },
  {
    question: "What do you call the gas that makes up most of the air?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    rightAnswer: "Nitrogen",
  },
  {
    question: "What color is light when all colors are combined?",
    answers: ["Black", "Gray", "White", "Brown"],
    rightAnswer: "White",
  },
  {
    question: "What makes up a rainbow?",
    answers: ["Clouds", "Rain", "Light passing through water droplets", "Stars"],
    rightAnswer: "Light passing through water droplets",
  },
  {
    question: "What instrument is used to see very tiny things?",
    answers: ["Telescope", "Binoculars", "Microscope", "Periscope"],
    rightAnswer: "Microscope",
  },
  {
    question: "What type of energy do batteries store?",
    answers: ["Heat", "Light", "Sound", "Chemical"],
    rightAnswer: "Chemical",
  },
  {
    question: "What do you call a scientist who studies Earth's physical structure?",
    answers: ["Biologist", "Chemist", "Geologist", "Physicist"],
    rightAnswer: "Geologist",
  },
  {
    question: "What process creates sugar in plants?",
    answers: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
    rightAnswer: "Photosynthesis",
  },
  {
    question: "Which of these is a bird?",
    answers: ["Bat", "Butterfly", "Eagle", "Fish"],
    rightAnswer: "Eagle",
  }
]
const subjects = ["Math", "English", "Science"]
function displaySubjectBtnsHandler() {
  subjects.forEach((subject, index) => {
    subjectDiv.innerHTML += 
    `<li id="subject-${index}" onclick="selectSubjectHandler(${index})">${subject}</li>`
  })
}
displaySubjectBtnsHandler()

function selectSubjectHandler(index) {
  const subjectBtns = document.querySelectorAll(".subjectListBtns li")
  subjectBtns.forEach((li) => {
    li.classList.remove("selected-subject")
  })
  const selectedBtn = document.getElementById(`subject-${index}`)
  selectedBtn.classList.add('selected-subject')
  return selectedBtn
}




function chooseSubject() {
  const selectedSubject = document.querySelector(".selected-subject")
  if(!selectedSubject) {
    return displayMessageHandler("You need to choose a subject before you begin your exam!")
  }
  let subject = selectedSubject.textContent;
  if(subject === "English") {
    questions = englishQuestions
  } else  if(subject === "Math") {
    questions = mathQuestions
  } else  if(subject === "Science") {
    questions = scienceQuestions
  }
  choosingSection.classList.add("hide")
  startSection.classList.remove("hide")
}
getBtn.addEventListener('click', chooseSubject)


let currentQuestion = null  

const shuffleQuestionHandler = (array = questions) => 
   array.sort(() => Math.random() - 0.5);

  function startQuiz() {
   shuffledQuestions = shuffleQuestionHandler()
   console.log(shuffledQuestions)
   currentQuestion = shuffledQuestions[currentQuestionIndex]
   displayCurrentQuestion();
   progressHandler()
   handlebuttons()

    startSection.classList.add('hide')
    questionSection.classList.remove('hide')
  }
  startBtn.onclick = startQuiz;
  
function getNextQuestionHandler() {
  if(currentQuestionIndex >= numberOfQuestions - 1){
    displayConfirmMessage()
     return
    }
  
  currentQuestionIndex++
  currentQuestion = shuffledQuestions[currentQuestionIndex]
  displayCurrentQuestion()
  progressHandler()
  handlebuttons()
}
nextBtn.onclick = getNextQuestionHandler;

function getPrevQuestionHandler() {
  if(currentQuestionIndex <= 0)
    return displayMessageHandler("You are at the first Question");
  currentQuestionIndex--
  currentQuestion = shuffledQuestions[currentQuestionIndex]
  displayCurrentQuestion()
  progressHandler()
  handlebuttons()
}
prevBtn.onclick = getPrevQuestionHandler;





function displayCurrentQuestion() {
    const { question, answers, rightAnswer} = currentQuestion;

    questionHead.textContent = question;

    const selectedAnswerObj = selectedAnswers[currentQuestionIndex]
    
  
  
  answerUl.innerHTML = "";
  
  
  answers.forEach((answer, i) => {
    let selectedClass = '';
    let checkClass = '';
    if(selectedAnswerObj) {
      const {selectedAnswer, rightAnswer, attempts, index} = 
        selectedAnswerObj
        if (index === i) {
            selectedClass = "selected-answer"

            if(attempts > 0) {
            if(rightAnswer === selectedAnswer) {
              checkClass = "correct"
              } else
              checkClass = "incorrect"
          }}
    }
      answerUl.innerHTML += 
       `<li class="${selectedClass} ${checkClass}" id="answer-${i}">${answer}</li>`
    });
    const answersLis = document.querySelectorAll('.answers-ul li');
    answersLis.forEach((li, i) => {
      li.addEventListener('click', () => {
        selectedAnswerHandler(answers[i], i, rightAnswer);
      })
    })
}



function progressHandler() {
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  numberOfQuestionSpan.textContent = numberOfQuestions;
  progress.max = numberOfQuestions;
  progress.value = currentQuestionIndex + 1;
}
progressHandler()




function selectedAnswerHandler(answer, index, rightAnswer) {
  const selectedAnswerObj = selectedAnswers[currentQuestionIndex];
  if(selectedAnswerObj) {
    const {selectedAnswer, attempts, rightAnswer, check} = selectedAnswerObj

    if(attempts >= 1 && selectedAnswer === rightAnswer && check) {
      return 
      //displayMessageHandler("You already selected the right Answer for the current question!")
    }
    if(attempts >= 2) {
      return displayMessageHandler("You can only try two times for each question")
    }
  }

  checkBtn.disabled = false;
  const answersLis = document.querySelectorAll(".answers-ul li")
  answersLis.forEach((li) => 
    {li.classList.remove("selected-answer")})

  const selectedLi = document.getElementById(`answer-${index}`)
  selectedLi.classList.add("selected-answer")

  selectedAnswers[currentQuestionIndex] = {
    selectedAnswer: answer,
    attempts: selectedAnswers[currentQuestionIndex]?.attempts || 0,
    rightAnswer: rightAnswer,
    index,
    check: false,
  };
}

function checkAnswerHandler() {
  const selectedAnswerObj = selectedAnswers[currentQuestionIndex]

  if(!selectedAnswerObj) {
    displayMessageHandler("Please select an answer")
    return
  }

    const { selectedAnswer, attempts, index, rightAnswer } = selectedAnswerObj
    if(attempts === 2) {
      displayMessageHandler("You can only try two times for Each question")
      return
    }
    
    const answersLis = document.querySelectorAll(".answers-ul li")
    answersLis.forEach((li) => {
      li.classList.remove("correct")
      li.classList.remove("incorrect")
    })
    const selectedLi = document.getElementById(`answer-${index}`)
    if(selectedAnswer === rightAnswer) {
      selectedLi.classList.add('correct')
    } else {
      selectedLi.classList.add('incorrect')
      checkBtn.disabled = true
    }
    
    selectedAnswers[currentQuestionIndex] = {
      ...selectedAnswers[currentQuestionIndex],
      attempts: attempts + 1,
      check: true,
    }
    handlebuttons()

  }

  checkBtn.onclick =  checkAnswerHandler

  
  function displayMessageHandler(text) {
    messageSection.classList.add("display-message")
    messageText.textContent = text;
    setTimeout(hideMessageHandler, 10000)
}

function hideMessageHandler() {
  messageSection.classList.remove("display-message");
}
messageSection.onclick = hideMessageHandler

// next => finish
//if the user press finish => show confirmation message
//okay - cancel

const handleCheckButton = () => {
  const selectedAnswerObj = selectedAnswers[currentQuestionIndex];
  //if we didnt select an answer
  if(!selectedAnswerObj) {
    checkBtn.disabled = true;
  } else {
    const {selectedAnswer, attempts, index, rightAnswer} = selectedAnswerObj
    if ((attempts >= 1 && selectedAnswer === rightAnswer) || attempts >= 2) {
      checkBtn.disabled = true;
    } else { 
      checkBtn.disabled = false;
    }
  }
}


const handlebuttons = () => {
  //if we are at last question
  if (currentQuestionIndex === numberOfQuestions - 1) {
    nextBtn.textContent = "Finish";
    nextBtn.classList.add("danger")
  } else {
    nextBtn.innerHTML = `Next<i class="fa-solid fa-angles-right"></i>`;
    nextBtn.classList.remove("danger")
    
  }
  
  if(currentQuestionIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  
  handleCheckButton()
}
handlebuttons()

function displayConfirmMessage() {
  layoutDiv.classList.add("display-layout")
  confirmSection.classList.add("display-confirm-section")
}

function hideConfirmMessage() {
  layoutDiv.classList.remove("display-layout")
  confirmSection.classList.remove("display-confirm-section")
}

cancelConfirmMsgBtn.addEventListener("click", hideConfirmMessage)
layoutDiv.addEventListener("click", hideConfirmMessage)


function calculateDisplayResults() {
  const score = selectedAnswers.reduce((prev, curr) => 
    curr?.selectedAnswer === curr.rightAnswer ? prev + 1: prev, 0)

  hideConfirmMessage()
  questionSection.classList.add('hide')
  resultSection.classList.remove('hide')

  scoreP.textContent = `${score} / ${numberOfQuestions}`

  const grade = calculateGrade(score)
  gradeSpan.textContent = grade
}

okayBtn.addEventListener('click', calculateDisplayResults)

function calculateGrade(score) {
  let grade = "";
  const percent = score / numberOfQuestions * 100

  if(percent > 100 || percent < 0) {
    grade = "Error!"
  } else if(percent >= 90) {
    grade = "Excellent!"
  } else if(percent >= 85) {
    grade = "Very Good!"
  } else if(percent >= 75) {
    grade = "Good!"
  } else if(percent >= 50) {
    grade = "Pass"
  } else if(percent < 50) {
    grade = "Fail!"
  }

  return grade
} 


const tryAgainHandler = () => {
  resultSection.classList.add('hide');
  choosingSection.classList.remove("hide");
  currentQuestionIndex = 0;
  selectedAnswers = [];
  const subjectBtns = document.querySelectorAll(".subjectListBtns li")
  subjectBtns.forEach((li) => {
    li.classList.remove("selected-subject")
  })

}

tryAgainBtn.addEventListener('click', tryAgainHandler);

