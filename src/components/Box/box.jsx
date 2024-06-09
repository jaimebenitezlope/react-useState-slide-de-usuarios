import React, { useState } from 'react';
import { StyledDiv } from './box.style.js';
import { USERS } from './users.js';

const Box = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex - 1 + USERS.length) % USERS.length);
	};

	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % USERS.length);
	};

	const currentUser = USERS[currentIndex];

	return (
		<StyledDiv>
			<img src={currentUser.profileImage} alt={currentUser.name} />
			<h1>Name: {`${currentUser.title} ${currentUser.name}`}</h1>
			<p>Username: {currentUser.username}</p>
			<p>Email: {currentUser.email}</p>
			<button onClick={handlePrev}>Previous</button>
			<button onClick={handleNext}>Next</button>
		</StyledDiv>
	);
};

export default Box;
