"use strict";
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
//This is the doc https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxNorm.getDrugs.html
//Create a basic get and do some stuff with that
const axios_1 = __importDefault(require("axios"));
const DOMAIN = 'https://rxnav.nlm.nih.gov';
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('This is a cookie here');
    //To save time - just take the whole url
    const url = new URL(`${DOMAIN}`);
    const med = 'azithromycin';
    url.pathname = '/REST/drugs.json';
    url.search = `?name=${med}`;
    const { data } = yield axios_1.default.request({ url: url.href, headers: { 'Content-Type': 'application/json' } });
    console.log(JSON.stringify(data, null, 2));
}))();
