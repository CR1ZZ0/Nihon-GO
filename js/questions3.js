//creating an array and passing the number, questions, options, and answers
let questions = [
        {
            numb: 1,
            question: "What does 'こんにちは' (Konnichiwa) mean in English?",
            answer: "Hello / Good afternoon",
            options: ["Goodbye", "Good morning", "Hello / Good afternoon", "Good night"]
        },
        {
            numb: 2,
            question: "How do you say 'Good morning' in Japanese?",
            answer: "Ohayou gozaimasu",
            options: ["Oyasuminasai", "Konnichiwa", "Ohayou gozaimasu", "Konbanwa"]
        },
        {
            numb: 3,
            question: "What is the Romanization of 'こんばんは'?",
            answer: "Konbanwa",
            options: ["Konnichiwa", "Konbanwa", "Ohayou", "Oyasumi"]
        },
        {
            numb: 4,
            question: "What does 'ありがとう' (Arigatou) mean?",
            answer: "Thank you",
            options: ["Excuse me", "Thank you", "Goodbye", "Good work"]
        },
        {
            numb: 5,
            question: "How do you say 'Excuse me / I'm sorry' in Japanese?",
            answer: "Sumimasen",
            options: ["Gomen", "Sumimasen", "Arigatou", "Hai"]
        },
        {
            numb: 6,
            question: "What is the meaning of 'はい' (Hai)?",
            answer: "Yes",
            options: ["No", "Maybe", "Yes", "Excuse me"]
        },
        {
            numb: 7,
            question: "What does 'いいえ' (Iie) mean?",
            answer: "No",
            options: ["Hello", "Yes", "No", "Thank you"]
        },
        {
            numb: 8,
            question: "What does 'はじめまして' (Hajimemashite) mean?",
            answer: "Nice to meet you",
            options: ["Goodbye", "Nice to meet you", "How are you?", "I'm fine"]
        },
        {
            numb: 9,
            question: "How do you say 'My name is [Name]' in Japanese?",
            answer: "Watashi no namae wa [Name] desu",
            options: [
                "Watashi wa [Name] desu",
                "Watashi no namae wa [Name] desu",
                "Boku wa [Name] desu",
                "Namae wa [Name]"
            ]
        },
        {
            numb: 10,
            question: "What is the meaning of 'よろしくお願いします' (Yoroshiku onegaishimasu)?",
            answer: "Please take care of it / I look forward to working with you",
            options: [
                "Thank you very much",
                "See you tomorrow",
                "Please take care of it / I look forward to working with you",
                "Nice to meet you"
            ]
        },
        {
            numb: 11,
            question: "What is 'お元気ですか?' (Ogenki desu ka?) used for?",
            answer: "How are you?",
            options: ["What is your name?", "How old are you?", "How are you?", "Where do you live?"]
        },
        {
            numb: 12,
            question: "What is the correct response to 'お元気ですか?' (Ogenki desu ka?) if you're fine?",
            answer: "Hai, genki desu",
            options: ["Genki janai", "Hai, genki desu", "Iie, genki desu", "Oyasuminasai"]
        },
        {
            numb: 13,
            question: "What does '少し疲れています' (Sukoshi tsukarete imasu) mean?",
            answer: "I'm a little tired",
            options: [
                "I'm very excited",
                "I'm a little tired",
                "I'm happy",
                "I'm hungry"
            ]
        },
        {
            numb: 14,
            question: "How do you say 'I am [Age] years old' in Japanese?",
            answer: "Watashi wa [Age] sai desu",
            options: [
                "Watashi wa [Age] nen desu",
                "Watashi wa [Age] toshi desu",
                "Watashi wa [Age] sai desu",
                "Watashi wa [Age] nichi desu"
            ]
        },
        {
            numb: 15,
            question: "What is the meaning of '何歳ですか?' (Nan sai desu ka?)",
            answer: "How old are you?",
            options: ["What is your name?", "How old are you?", "Where are you from?", "What time is it?"]
        },
        {
            numb: 16,
            question: "What does 'さようなら' (Sayounara) mean?",
            answer: "Goodbye",
            options: ["Good night", "Goodbye", "See you", "Thank you"]
        },
        {
            numb: 17,
            question: "What is the meaning of 'じゃね' (Ja ne)?",
            answer: "See you",
            options: ["Good night", "Goodbye", "See you", "Hello"]
        },
        {
            numb: 18,
            question: "What does 'またね' (Mata ne) mean?",
            answer: "See you later",
            options: ["Later, thank you", "Goodbye", "See you later", "Good job"]
        },
        {
            numb: 19,
            question: "What is '失礼します' (Shitsurei shimasu) commonly used for?",
            answer: "Excuse me (when leaving)",
            options: [
                "Excuse me (when arriving)",
                "Excuse me (when leaving)",
                "I'm hungry",
                "Good morning"
            ]
        },
        {
            numb: 20,
            question: "What does 'お疲れ様でした' (Otsukaresama deshita) express?",
            answer: "Good work (used for coworkers)",
            options: [
                "Nice to meet you",
                "Thank you very much",
                "Good work (used for coworkers)",
                "Goodbye"
            ]
        }
    ];
    
    
