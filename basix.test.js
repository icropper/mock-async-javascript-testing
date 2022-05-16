

// const waitForMe = (shouldResolve) => {
//     return new Promise((resolve, reject) => {
//         if(shouldResolve){
//             resolve(true);
//         }
//     })
// }

// describe("Some basic stuff", () => {

//     test('addition', () => {
//         expect(2 + 2).toBe(4);
//     })

//     test('zero', () => {
//         const z = 0;
//         expect(z).not.toBeNull();
//         expect(z).toBeDefined();
//         expect(z).not.toBeUndefined();
//         expect(z).not.toBeTruthy();
//         expect(z).toBeFalsy();
//       });

//     test('1', () => {
//         const i = 1;
//         expect(i).not.toBeNull();
//         expect(i).toBeDefined();
//         expect(i).toBeTruthy();
//         expect(i).not.toBe(true);
//     });
// })

// describe("async stuff", () => {

//     test('using then', () => 
//         waitForMe(true)
//             .then((response) => 
//                 expect(response).toBe(true))
//     );

//     test('using then with reject', () => 
//         waitForMe(false)
//             .catch((e) => {
//              expect(e).toEqual('error')
//              done();
//             })
//     );

//     test('using await', async (done) => {
//         const response = await waitForMe(true);
//         expect(response).toBe(true);
//         done();

//         //OR

//         //await expect(waitForMe).resolves.toBe(true);
//     });

//     test('using await with reject', async (done) => {
//         const response = await waitForMe(true);

//         done();



//         //expect(response).toThrowError(/rejected/);
//     });
// })