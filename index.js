import {DataProvider} from "./dataProvider.js";

import print from "./output.js";

const dp = new DataProvider();

const result = await dp.getNameWithYodaFilter(1);

console.log(result);


/*
print('FgBlue', `\n${ " Should be blue " }\n`);

print('FgYellow', `\n${ " And this should be yellow " }\n`)
*/
