/**
 * ? Memory Leak
 */

const data = [];

function addData() {
  data.length = 0;

  for (let i = 0; i < 10000; i++) {
    data.push({ value: i });
  }

  console.log('Data Length: ', data.length);
}

addData();