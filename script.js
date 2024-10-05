$(document).ready(function () {
    const quizData = [
        // Existing questions
        {
            type: "mcq",
            question: "What is the plural form of 'child'?",
            options: ["Childs", "Children", "Childes", "Childrens"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - Children. 'Child' має неправильну множину.",
            hint: "It's an irregular plural."
        },
        {
            type: "fill-in-the-blank",
            question: "What is the past tense of 'go'?",
            correctAnswer: "went",
            explanation: "Правильна відповідь - Went. 'Go' має неправильну форму минулого часу.",
            hint: "Think of 'went' to the market."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'ice', 'cream', 'likes', 'He'",
            options: ["ice", "cream", "likes", "He"],
            correctAnswer: ["He", "likes", "ice", "cream"],
            explanation: "Правильна відповідь - 'He likes ice cream.' Порядок слів має бути таким."
        },
        {
            type: "true-false",
            question: "The word 'childrens' is correct in English grammar.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - False. 'Childrens' не є правильною формою множини слова 'child'."
        },

        // Additional questions
        {
            type: "mcq",
            question: "Which of the following is a synonym for 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - Joyful. 'Happy' та 'joyful' мають схоже значення.",
            hint: "Think about being joyful or cheerful."
        },
        {
            type: "mcq",
            question: "Which sentence is grammatically correct?",
            options: [
                "She don't know the answer.",
                "She doesn't know the answer.",
                "She don't knows the answer.",
                "She isn't knows the answer."
            ],
            correctAnswer: 1,
            explanation: "Правильна відповідь - She doesn't know the answer. 'Doesn't' використовується замість 'don't' для 3-ї особи однини."
        },
        {
            type: "fill-in-the-blank",
            question: "What is the comparative form of 'good'?",
            correctAnswer: "better",
            explanation: "Правильна відповідь - Better. 'Good' має неправильну форму порівняння.",
            hint: "Remember 'better' than good."
        },
        {
            type: "mcq",
            question: "Which of these is an adjective?",
            options: ["Quickly", "Quick", "Quickness", "Quicker"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - Quick. Це прикметник, що описує іменник."
        },
        {
            type: "true-false",
            question: "The word 'cats' is the plural form of 'cat'.",
            options: ["True", "False"],
            correctAnswer: 0,
            explanation: "Правильна відповідь - True. 'Cats' є правильною множиною для 'cat'."
        },
        {
            type: "mcq",
            question: "Which sentence is correct?",
            options: [
                "She were going to the store.",
                "They is going to the store.",
                "He are going to the store.",
                "They are going to the store."
            ],
            correctAnswer: 3,
            explanation: "Правильна відповідь - They are going to the store. Всі інші варіанти мають неправильний дієслово-підмет."
        },
        {
            type: "fill-in-the-blank",
            question: "What is the opposite of 'hot'?",
            correctAnswer: "cold",
            explanation: "Правильна відповідь - Cold. Це антонім слова 'hot'.",
            hint: "Think about temperature."
        },
        {
            type: "mcq",
            question: "Choose the correct sentence:",
            options: [
                "He don't like ice cream.",
                "He doesn't like ice cream.",
                "He didn't liked ice cream.",
                "He isn't like ice cream."
            ],
            correctAnswer: 1,
            explanation: "Правильна відповідь - He doesn't like ice cream. 'Don't' змінюється на 'doesn't' для 3-ї особи однини."
        },
        {
            type: "true-false",
            question: "The word 'quick' is an adverb.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - False. 'Quick' є прикметником, а 'quickly' є прислівником."
        },
        {
            type: "mcq",
            question: "Which of the following is a correct sentence?",
            options: [
                "He don't has a car.",
                "He doesn't have a car.",
                "He didn't have no car.",
                "He don't got a car."
            ],
            correctAnswer: 1,
            explanation: "Правильна відповідь - He doesn't have a car. Це правильна структура заперечення."
        },
        {
            type: "fill-in-the-blank",
            question: "What is the past participle of 'run'?",
            correctAnswer: "run",
            explanation: "Правильна відповідь - Run. 'Run' має однакову базову та минулу партиципійну форму.",
            hint: "The same word."
        },
        {
            type: "mcq",
            question: "Which is the correct usage?",
            options: [
                "It's going to rain today.",
                "Its going to rain today.",
                "Its' going to rain today.",
                "Its going too rain today."
            ],
            correctAnswer: 0,
            explanation: "Правильна відповідь - It's going to rain today. 'It's' є скороченням для 'it is'."
        },
        {
            type: "true-false",
            question: "The sentence 'She didn't knew the answer.' is grammatically correct.",
            options: ["True", "False"],
            correctAnswer: 1,
            explanation: "Правильна відповідь - False. Правильна форма - 'She didn't know the answer.'"
        },
        {
            type: "mcq",
            question: "Which of the following sentences is correct?",
            options: [
                "He is a honest man.",
                "He is an honest man.",
                "He is honest man.",
                "He is the honest man."
            ],
            correctAnswer: 1,
            explanation: "Правильна відповідь - He is an honest man. 'An' використовується перед голосним звуком."
        },
        {
            type: "mcq",
            question: "Choose the correct option to complete the sentence: 'I have been living here ____ five years.'",
            options: ["for", "since", "from", "by"],
            correctAnswer: 0,
            explanation: "Правильна відповідь - 'for'. Ми використовуємо 'for' із проміжком часу, таким як 'for five years'."
        },
        {
            type: "fill-in-the-blank",
            question: "What is the superlative form of 'fast'?",
            correctAnswer: "fastest",
            explanation: "Правильна відповідь - 'fastest'. Це суперлативна форма для слова 'fast'.",
            hint: "Think of speed."
        },
        {
            type: "mcq",
            question: "Which of these words is an adverb?",
            options: ["Quickly", "Smart", "Beautiful", "Red"],
            correctAnswer: 0,
            explanation: "Правильна відповідь - 'Quickly'. Це прислівник, що описує дієслово."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'is', 'beautiful', 'sky', 'The'",
            options: ["is", "beautiful", "sky", "The"],
            correctAnswer: ["The", "sky", "is", "beautiful"],
            explanation: "Правильна відповідь - 'The sky is beautiful.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct question: 'your', 'What', 'name', 'is'",
            options: ["your", "What", "name", "is"],
            correctAnswer: ["What", "is", "your", "name"],
            explanation: "Правильна відповідь - 'What is your name?' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'dog', 'The', 'brown', 'runs'",
            options: ["dog", "The", "brown", "runs"],
            correctAnswer: ["The", "brown", "dog", "runs"],
            explanation: "Правильна відповідь - 'The brown dog runs.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'to', 'I', 'like', 'read'",
            options: ["to", "I", "like", "read"],
            correctAnswer: ["I", "like", "to", "read"],
            explanation: "Правильна відповідь - 'I like to read.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'play', 'We', 'in', 'the', 'park'",
            options: ["play", "We", "in", "the", "park"],
            correctAnswer: ["We", "play", "in", "the", "park"],
            explanation: "Правильна відповідь - 'We play in the park.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct question: 'you', 'do', 'Where', 'live'",
            options: ["you", "do", "Where", "live"],
            correctAnswer: ["Where", "do", "you", "live"],
            explanation: "Правильна відповідь - 'Where do you live?' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'eat', 'He', 'likes', 'pizza'",
            options: ["eat", "He", "likes", "pizza"],
            correctAnswer: ["He", "likes", "to", "eat", "pizza"],
            explanation: "Правильна відповідь - 'He likes to eat pizza.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'cake', 'bake', 'a', 'They'",
            options: ["cake", "bake", "a", "They"],
            correctAnswer: ["They", "bake", "a", "cake"],
            explanation: "Правильна відповідь - 'They bake a cake.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'the', 'library', 'at', 'study', 'We'",
            options: ["the", "library", "at", "study", "We"],
            correctAnswer: ["We", "study", "at", "the", "library"],
            explanation: "Правильна відповідь - 'We study at the library.' Порядок слів має бути таким."
        },
        {
            type: "drag-and-drop",
            question: "Arrange the words to form a correct sentence: 'breakfast', 'for', 'eggs', 'I', 'eat'",
            options: ["breakfast", "for", "eggs", "I", "eat"],
            correctAnswer: ["I", "eat", "eggs", "for", "breakfast"],
            explanation: "Правильна відповідь - 'I eat eggs for breakfast.' Порядок слів має бути таким."
        }

    ];


    let currentQuestionIndex = 0;

    // Shuffle the questions for randomization
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(quizData);

    // Generate the quiz questions dynamically
    function generateQuiz() {
        $('#quizContainer').empty();

        quizData.forEach((data, index) => {
            let questionHtml = `<div class="question-container ${index === 0 ? '' : 'hidden'}" id="question${index}">
                                <h5>Question ${index + 1}: ${data.question}</h5>`;

            // Optionally add a hint button if a hint is available
            if (data.hint) {
                questionHtml += `<button type="button" class="btn btn-sm btn-info mb-2 hint-btn" data-index="${index}">Hint</button>`;
                questionHtml += `<div class="alert alert-info hint-text hidden" id="hint${index}">${data.hint}</div>`;
            }

            switch (data.type) {
                case "mcq":
                    questionHtml += data.options.map((option, i) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question${index}" id="question${index}_option${i}" value="${i}">
                            <label class="form-check-label" for="question${index}_option${i}">${option}</label>
                        </div>`).join('');
                    break;

                case "fill-in-the-blank":
                    questionHtml += `<input type="text" class="form-control" id="question${index}_input" placeholder="Type your answer here">`;
                    break;

                case "drag-and-drop":
                    questionHtml += `<div class="drag-container" id="drag-container${index}">`;
                    questionHtml += data.options.map((option, i) => `<div class="draggable-item" data-index="${i}">${option}</div>`).join('');
                    questionHtml += `</div>`;
                    break;

                case "true-false":
                    questionHtml += data.options.map((option, i) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question${index}" id="question${index}_option${i}" value="${i}">
                            <label class="form-check-label" for="question${index}_option${i}">${option}</label>
                        </div>`).join('');
                    break;
            }

            questionHtml += `<div class="alert explanation" id="explanation${index}" style="display: none;">
                                <strong>Помилка: </strong> ${data.explanation}
                             </div></div>`;

            $('#quizContainer').append(questionHtml);

            // If drag-and-drop, add SortableJS functionality
            if (data.type === "drag-and-drop") {
                addSortableJS(index, data.correctAnswer);
            }
        });
    }

    // Add SortableJS functionality for drag-and-drop questions
    function addSortableJS(questionIndex, correctOrder) {
        const dragContainer = document.getElementById(`drag-container${questionIndex}`);

        Sortable.create(dragContainer, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: function (evt) {
                // Handle drag-and-drop logic here if needed
            }
        });
    }

    // Navigate through questions
    function showQuestion(index) {
        $('.question-container').addClass('hidden');
        $(`#question${index}`).removeClass('hidden');
        updateProgressBar(index);
    }

    // Update the progress bar
    function updateProgressBar(index) {
        const progress = ((index + 1) / quizData.length) * 100;
        $('#progressBar').css('width', `${progress}%`);
        $('#progressBar').text(`${Math.round(progress)}%`);
    }

    // Initial quiz generation
    generateQuiz();

    // Show next question
    $('#nextBtn').on('click', function () {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    // Show previous question
    $('#prevBtn').on('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    // Show hint when button is clicked
    $(document).on('click', '.hint-btn', function () {
        const index = $(this).data('index');
        $(`#hint${index}`).toggleClass('hidden');
    });

    // Handle form submission
    $('#submitBtn').on('click', function (event) {
        event.preventDefault();
        let score = 0;

        quizData.forEach((data, index) => {
            let isCorrect = false;

            switch (data.type) {
                case "mcq":
                case "true-false":
                    const selectedOption = $(`input[name=question${index}]:checked`).val();
                    isCorrect = selectedOption == data.correctAnswer;
                    break;

                case "fill-in-the-blank":
                    const userAnswer = $(`#question${index}_input`).val().trim().toLowerCase();
                    isCorrect = userAnswer === data.correctAnswer.toLowerCase();
                    break;

                case "drag-and-drop":
                    const draggedOrder = [];
                    $(`#drag-container${index} .draggable-item`).each(function () {
                        draggedOrder.push($(this).text());
                    });
                    isCorrect = JSON.stringify(draggedOrder) === JSON.stringify(data.correctAnswer);
                    break;
            }

            if (isCorrect) {
                score++;
                $(`#explanation${index}`).hide();
            } else {
                $(`#explanation${index}`).show();
            }
        });

        const resultMessage = `
            <div class="alert ${score === quizData.length ? 'alert-success' : 'alert-warning'}">
                ${score === quizData.length ? 'Вітаємо! Всі відповіді правильні.' : `Ваш результат: ${score} з ${quizData.length}.`}
            </div>`;
        $('#result').append(resultMessage);
        $('#submitBtn').hide();
        $('#restartBtn').show();
    });

    // Restart the quiz
    $('#restartBtn').on('click', function () {
        location.reload(); // Reload the page to restart the quiz
    });
});
