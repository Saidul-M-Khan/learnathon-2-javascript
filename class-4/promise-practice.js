const hasClass = false;

const myClass = new Promise((resolve, reject) => {
    if(!hasClass) {
        const classDetails = {
            id: 4,
            name: 'Asynchronous JS',
            location: 'Google Meet',
            time: '4:00pm'
        };
        resolve(classDetails);
    } else {
        reject(new Error('Class is already in scheduled!'));
    }
});

myClass
    .then((response)=> {
        console.log(JSON.stringify(response));
    })
    .catch((error)=>{
        console.log(error.message);
    });