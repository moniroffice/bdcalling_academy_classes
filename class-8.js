const enrollSuccess = true;
const marks = 80;

function enroll(callback) {

  if (enrollSuccess) {
    setTimeout(function () {
      console.log('enrollment is completed');
      const student = { name: 'John', age: 26 };
      callback(student);
    }, 1000);
  }
  else {
    setTimeout(function () {
      console.log('enrollment is not completed');
    }, 1000);
  }
}



function progress(student, callback) {
  setTimeout(function () {
    student.progress = '50%';
    console.log('student has completed the course');
    callback(student);
  }, 1000);
}


function getCertificate(student) {
  setTimeout(function () {
    if (marks >= 80) {
      student.certificate = 'JavaScript Course';
      console.log('student has received the certificate: ' + student.certificate);
    } else {
      console.log('student has not received the certificate');
    }
  }, 1000);
}

enroll((student) => {
  progress(student, getCertificate);
});


