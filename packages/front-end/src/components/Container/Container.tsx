"use client";
import React from "react";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import Chart from "../Chart/Chart";
import Buypanel from "../Buypanel/Buypanel";
import Chat from "../Chat/Chat";

export default function Container() {
	return (
		<div className="flex flex-row h-[100%]  snes-container mt-8 w-[100%]">
			<div className="flex flex-col w-[70%]">
				<div className="flex flex-row w-full h-[70%]">
					<div className="w-full">
						Crash and Boom Chart
						<Chart />
					</div>
					<Buypanel />
				</div>

				<Chat />
			</div>
			<div className="w-[30%]">
				<PlayerBoard />
			</div>
		</div>
	);
}
