import print from './output.js';

describe("Testing console colors", () => {

    test("Has correct colors", () => {

        const customLog = jest.spyOn(console, 'log');

        const color = 'FgBlue';
        const printString = `\n${ " Should be blue " }\n`;


        print(color, printString);

        expect(customLog).toHaveBeenCalledTimes(1);
        expect(customLog).toHaveBeenCalledWith('\x1b[34m%s\x1b[0m', printString);
        
    })

})