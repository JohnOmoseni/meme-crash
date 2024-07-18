import React from "react";

export default function Chat() {
	return (
		<div className="text-white w-full h-[100%] snes-container">
			This is the chatting place
			<div className="snes-form-group">
				<label>Input Text</label>
				<div className="snes-input">
					<input type="text" value="" placeholder="Input text" />
				</div>
			</div>
		</div>
	);
}
