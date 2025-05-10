//creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What is the Japanese word for the number 12?",
        answer: "juu ni",
        options: [
            "juu san",
            "juu ni",
            "juu roku",
            "ni juu"
        ]
    },
    {
        numb: 2,
        question: "What is the Japanese word for the number 1?",
        answer: "ichi",
        options: [
            "yon",
            "ichi",
            "san",
            "ni"
        ]
    },
    {
        numb: 3,
        question: "What is the Japanese word for the number 17?",
        answer: "juu nana",
        options: [
            "juu hachi",
            "juu nana",
            "nana juu",
            "juu roku"
        ]
    },
    {
        numb: 4,
        question: "What is the Japanese word for the number 4?",
        answer: "yon",
        options: [
            "go",
            "shi",
            "yon",
            "san"
        ]
    },
    {
        numb: 5,
        question: "What is the Japanese word for the number 10?",
        answer: "juu",
        options: [
            "juu ichi",
            "juu",
            "sen",
            "hyaku"
        ]
    },
    {
        numb: 6,
        question: "What is the Japanese word for the number 7?",
        answer: "nana",
        options: [
            "nana",
            "kyuu",
            "san",
            "hachi"
        ]
    },
    {
        numb: 7,
        question: "What is the Japanese word for the number 2?",
        answer: "ni",
        options: [
            "yon",
            "ni",
            "ichi",
            "san"
        ]
    },
    {
        numb: 8,
        question: "What is the Japanese word for the number 9?",
        answer: "kyuu",
        options: [
            "kyuu",
            "roku",
            "hachi",
            "juu"
        ]
    },
    {
        numb: 9,
        question: "What is the Japanese word for the number 14?",
        answer: "juu yon",
        options: [
            "juu go",
            "juu yon",
            "juu shi",
            "yon juu"
        ]
    },
    {
        numb: 10,
        question: "What is the Japanese word for the number 6?",
        answer: "roku",
        options: [
            "ichi",
            "roku",
            "hachi",
            "go"
        ]
    },
    {
        numb: 11,
        question: "What is the Japanese word for the number 13?",
        answer: "juu san",
        options: [
            "juu ni",
            "ichi san",
            "san juu",
            "juu san"
        ]
    },
    {
        numb: 12,
        question: "What is the Japanese word for the number 20?",
        answer: "ni juu",
        options: [
            "san juu",
            "juu ni",
            "ni juu",
            "hyaku"
        ]
    },
    {
        numb: 13,
        question: "What is the Japanese word for the number 5?",
        answer: "go",
        options: [
            "go",
            "ichi",
            "hachi",
            "roku"
        ]
    },
    {
        numb: 14,
        question: "What is the Japanese word for the number 3?",
        answer: "san",
        options: [
            "ichi",
            "ni",
            "san",
            "yon"
        ]
    },
    {
        numb: 15,
        question: "What is the Japanese word for the number 18?",
        answer: "juu hachi",
        options: [
            "juu hachi",
            "juu kyuu",
            "juu nana",
            "hachi juu"
        ]
    },
    {
        numb: 16,
        question: "What is the Japanese word for the number 30?",
        answer: "san juu",
        options: [
            "san juu",
            "ni juu",
            "go juu",
            "yon juu"
        ]
    },
    {
        numb: 17,
        question: "What is the Japanese word for the number 50?",
        answer: "go juu",
        options: [
            "juu go",
            "roku juu",
            "hachi juu",
            "go juu"
        ]
    },
    {
        numb: 18,
        question: "What is the Japanese word for the number 70?",
        answer: "nana juu",
        options: [
            "nana juu",
            "kyuu juu",
            "hachi juu",
            "roku juu"
        ]
    },
    {
        numb: 19,
        question: "What is the Japanese word for the number 100?",
        answer: "hyaku",
        options: [
            "sen",
            "ichi man",
            "juu",
            "hyaku"
        ]
    },
    {
        numb: 20,
        question: "What is the Japanese word for the number 300?",
        answer: "sanbyaku",
        options: [
            "san hyaku",
            "sanbyaku",
            "yon hyaku",
            "ni hyaku"
        ]
    },
    {
        numb: 21,
        question: "What is the Japanese word for the number 1,000?",
        answer: "sen",
        options: [
            "ichi man",
            "sen",
            "hyaku",
            "ichi sen"
        ]
    },
    {
        numb: 22,
        question: "What is the Japanese word for the number 2,000?",
        answer: "ni sen",
        options: [
            "juu sen",
            "ni sen",
            "san sen",
            "sen ni"
        ]
    },
    {
        numb: 23,
        question: "What is the Japanese word for the number 10,000?",
        answer: "man",
        options: [
            "juu sen",
            "ichi sen",
            "sen",
            "man"
        ]
    },
    {
        numb: 24,
        question: "What is the Japanese word for the number 27?",
        answer: "ni juu nana",
        options: [
            "ni nana",
            "juu nana",
            "nana juu ni",
            "ni juu nana"
        ]
    },
    {
        numb: 25,
        question: "What is the Japanese word for the number 46?",
        answer: "yon juu roku",
        options: [
            "shi juu roku",
            "san juu roku",
            "yon juu roku",
            "roku juu yon"
        ]
    },
    {
        numb: 26,
        question: "What is the Japanese word for the number 135?",
        answer: "hyaku san juu go",
        options: [
            "hyaku go juu san",
            "hyaku san juu go",
            "ichi hyaku san juu go",
            "sen san juu go"
        ]
    },
    {
        numb: 27,
        question: "What is the Japanese word for the number 90?",
        answer: "kyuu juu",
        options: [
            "juu kyuu",
            "kyuu juu",
            "hachi juu",
            "roku juu"
        ]
    },
    {
        numb: 28,
        question: "What is the Japanese word for the number 500,000?",
        answer: "go juu man",
        options: [
            "go juu man",
            "hyaku man",
            "go man",
            "sen man"
        ]
    },
    {
        numb: 29,
        question: "What is the Japanese word for the number 999,999?",
        answer: "kyuu juu kyuu man kyuu sen kyuu hyaku kyuu juu kyuu",
        options: [
            "kyuu man kyuu sen kyuu hyaku kyuu juu kyuu",
            "kyuu juu kyuu sen kyuu hyaku kyuu juu kyuu",
            "sen man kyuu sen kyuu hyaku kyuu juu kyuu",
            "kyuu juu kyuu man kyuu sen kyuu hyaku kyuu juu kyuu"
        ]
    },
    {
        numb: 30,
        question: "What is the Japanese word for the number 1,000,000?",
        answer: "hyaku man",
        options: [
            "ichi man",
            "sen man",
            "juu man",
            "hyaku man"
        ]
    }
    
    
    
    
    
    
    
];