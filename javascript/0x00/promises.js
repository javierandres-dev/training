'use strict';
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        forename: 'john',
        surname: 'doe',
      });
      /* reject({
        code: 0,
        message: 'fail',
      }); */
    }, 3000);
  });
}

const res = myPromise();
console.log('res:', res);

res
  .then((payload) => {
    console.log('resolve - payload:', payload);
  })
  .catch((error) => console.log('reject - error:', error));

async function callFecth() {
  try {
    const res = await myPromise();
    console.log('res:', res);
  } catch (error) {
    console.log('error:', error);
  } finally {
    console.log('always');
  }
}
callFecth();
