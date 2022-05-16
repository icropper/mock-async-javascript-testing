

const waitForMe = (shouldResolve) => {
    return new Promise((resolve, reject) => {
        if(shouldResolve){
            setTimeout(() => resolve(true), 1);
        }
        else { 
            reject(new Error('rejected'));
        }
    })
}

describe("Some basic stuff", () => {

    test('addition', () => {
        expect(2 + 2).toBe(4);
    })

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
      });

    test('1', () => {
        const i = 1;
        expect(i).not.toBeNull();
        expect(i).toBeDefined();
        expect(i).toBeTruthy();
        expect(i).not.toBe(true);
    });
})

describe("async stuff", () => {

    test('using then', () => 
        waitForMe(true)
            .then((response) => 
                expect(response).toBe(true))
    );

    test('using then with reject', () => 
        waitForMe(false)
            .catch((e) => {
             expect(e).toEqual('error')
             done();
            })
    );

    test('using await', async () => {
        const response = await waitForMe(true);
        expect(response).toBe(true);

        //OR

        await expect(waitForMe).resolves.toBe(true);
    });

    test('using await with reject', async () => {
        const response = await waitForMe(false);
        expect(response).toThrowError(/rejected/);
    });
})