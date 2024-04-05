"use strict";
/**
 * PROMPT
 * Create a function that can read a file like this:
 *  1 oxygen
    2 fire
    7 force
    5 select
    4 paragraph

    The function should put the rows in ascending order in the shape of a pyramid
    And then return the last element in the row. The number of rows is the number increasing from 1 - n

 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const node_process_1 = require("node:process");
const readFileAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield promises_1.default.readFile('./bin/input.txt', { encoding: 'utf8' });
    const dataArray = data.split("\n").map((item) => {
        const row = item.split(" ");
        const parsedNum = parseInt(row[0]);
        return [parsedNum, row[1]];
    });
    const sorted = dataArray.sort((a, b) => {
        const numA = a[0];
        const numB = b[0];
        return numA - numB;
    });
    let skip = 0;
    let target = 0;
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        const currentIdx = sorted[i][0] - 1;
        if (currentIdx === target) {
            result.push(sorted[target][1]);
            skip++;
            target = target + skip + 1;
        }
    }
    const answer = result.join(" ");
    console.log(answer);
    return result.join(" ");
});
const process = () => __awaiter(void 0, void 0, void 0, function* () {
    yield readFileAsync();
});
process().then(() => { (0, node_process_1.exit)(); });
