import { getAPIKey, getUserInput } from "./helpers.ts";
import { xenditClient } from "../lib/xendit_client.ts";

const apiKey = getAPIKey();
const bankCode = getUserInput("bank code:");
const bankAccountNumber = getUserInput("bank account number:");
const transferAmount = getUserInput("transfer amount:");

const client = xenditClient(apiKey);
const json = await client.simulateVAPayment(
  bankCode,
  bankAccountNumber,
  transferAmount,
);

console.log(json);
