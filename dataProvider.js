

import {Api} from "./Api.js";

export class DataProvider {


    async getNameWithYodaFilter(id) {

        //console.log(Api.toString());

        //return ' ';

        const req = await Api.getPersonById(id);
        const name = req['name'];
        return name.split(' ').reverse().join(' ');
    }
}