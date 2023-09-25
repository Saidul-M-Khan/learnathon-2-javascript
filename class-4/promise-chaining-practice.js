const hasClass = false;

const myClass = new Promise((resolve, reject) => {
  if (!hasClass) {
    const classDetails = {
      id: 4,
      name: "Asynchronous JS",
      location: "Google Meet",
      time: "4:00pm",
    };
    resolve(classDetails);
  } else {
    reject(new Error("Class is already in scheduled!"));
  }
});

const addToCalendar = (classDetails) => {
  const calendar = `${classDetails.name} class is scheduled at ${classDetails.time} on ${classDetails.location}`;
  return Promise.resolve(calendar);
};


myClass
.then(addToCalendar)
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error.message);
});


console.log("Hello,");