import React from "react";
import { createContractClient, parseTon } from "@fotonjs/core";
import { publicClient, walletClient } from "@/sdk/client";
import {
	MemeCashPool,
	Predict,
	storePredict
} from "@/sdk/wrappers/MemeCrashPool";
import { contractAddress } from "@/sdk/const";
import { useTonConnect } from "./ueTonConnect";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract, beginCell } from "@ton/core";

export default function useContractClient() {
	const { client } = useTonClient();
	const { wallet, sender } = useTonConnect();

	const contractClient = useAsyncInitialize(async () => {
		if (!client || !wallet) return;

		const contract = MemeCashPool.fromAddress(
			Address.parse(contractAddress)
		);

		return await sender.send({
			to: contract.address,
			value: parseTon("0.1") + parseTon("0.05"),
			body: beginCell()
				.store(
					storePredict({
						$$type: "Predict",
						queryId: BigInt(1),
						amount: parseTon("0.1"),
						roundNumber: BigInt(0),
						predictionNumber: BigInt(100)
					})
				)
				.endCell()
		});
	}, [client, wallet]);
	return {
		joinGame: async (
			amount: string,
			predictionNumber: number,
			roundNumber: number
		) => {
			const contract = MemeCashPool.fromAddress(
				Address.parse(contractAddress)
			);

			return await sender.send({
				to: contract.address,
				value: parseTon("0.1") + parseTon("0.05"),
				body: beginCell()
					.store(
						storePredict({
							$$type: "Predict",
							queryId: BigInt(1),
							amount: parseTon("0.1"),
							roundNumber: BigInt(0),
							predictionNumber: BigInt(100)
						})
					)
					.endCell()
			});
		}
	};
}
