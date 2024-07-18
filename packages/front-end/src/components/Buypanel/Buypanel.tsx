import React from "react";

export default function Buypanel() {
	return (
		<div className="w-1/3 text-white rounded-sm  text-xs">
			<span className="text-xs">Place Your Trade</span>

			<div className=" snes-container">
				<div>
					{" "}
					<div className="snes-form-group">
						<label>Select Auto Cash Out Amount </label>
						<div className="snes-input">
							<select>
								<option value="1">1x</option>
								<option value="2">2x</option>
								<option value="3">3x</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					{" "}
					<label>Amount to trade:</label>
					<input type="text" placeholder="Input text" />{" "}
					<button className="snes-button has-ocean-color">
						Trade
					</button>{" "}
				</div>

				<div>
					<div>
						<label>Amount to claim: 0.0 Ton</label>
					</div>
					<div>
						<button className="snes-button has-ocean-color">
							Claim
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
