import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ id: 1, answerText: 'New York', isCorrect: false },
				{ id: 2, answerText: 'London', isCorrect: false },
				{ id: 3, answerText: 'Paris', isCorrect: true },
				{ id: 4, answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ id: 1, answerText: 'Jeff Bezos', isCorrect: false },
				{ id: 2, answerText: 'Elon Musk', isCorrect: true },
				{ id: 3, answerText: 'Bill Gates', isCorrect: false },
				{ id: 4, answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ id: 1, answerText: 'Apple', isCorrect: true },
				{ id: 2, answerText: 'Intel', isCorrect: false },
				{ id: 3, answerText: 'Amazon', isCorrect: false },
				{ id: 4, answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ id: 1, answerText: '1', isCorrect: false },
				{ id: 2, answerText: '4', isCorrect: false },
				{ id: 3, answerText: '6', isCorrect: false },
				{ id: 4, answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [afterFinsh, setAfterFinsh] = useState("");
	const [status, setStatus] = useState("");


	const handleAnswerButtonClick = (isCorrect, answerId) => {
		console.log(answerId);
		if (isCorrect) {
			setScore(score + 1);
			setStatus("correct");
		} else {
			setStatus("incorrect");
		}
		setTimeout(() => {
			const nextQuestion = currentQuestion + 1;

			if (nextQuestion < questions.length) {
				setStatus("");
				setCurrentQuestion(nextQuestion);
			} else {
				setAfterFinsh("after-finsh");
				setShowScore(true);
			}
		}, 1000)
	}

	return (
		<div className={`app ${afterFinsh}`}>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<>
					<div className='score-section'>You scored {score} out of {questions.length}</div>
					<button className="reset-game-button" onClick={() => window.location.reload()}>Reset the game</button>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answer) => {
							return <button key={answer.id} className={`answer-button ${status}`} onClick={() => handleAnswerButtonClick(answer.isCorrect, answer.id)}>{answer.answerText}</button>
						})}
					</div>
				</>
			)}
		</div>
	);
}
