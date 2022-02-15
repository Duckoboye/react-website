import React, { useState } from 'react';

const ApiClient = () => {
	const [key, setKey] = useState('');
	const [endpoint, setEndpoint] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log(key, endpoint);
		fetch(`https://api.hypixel.net/key?key=${key}`)
			.then((result) => result.json())
			.then(({ record }) => {
				// Log the owner's player UUID
				console.log(record);
				console.log(record.owner);
			});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Key:
					<input
						type="text"
						name="key"
						value={key}
						onChange={(e) => {
							setKey(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Endpoint:
					<input
						type="text"
						name="endpoint"
						value={endpoint}
						onChange={(e) => {
							setEndpoint(e.target.value);
						}}
					/>
				</label>
				<br />
				<button disabled={!key || !endpoint}>Submit</button>
			</form>
		</div>
	);
};

export default ApiClient;
