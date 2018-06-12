function getTempCallback(location, callback) {
  callback(undefined, 70);
  callback('City not found');
}
getTempCallback('Zurich', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('Success', temp);
  }
});


function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(79);
        reject('City not found');
      }, 1000);
  });
}

getTempPromise('Zurich').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error');
});



function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A & b need to be numbers');
    }
  });
}


addPromise(2, 3).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);

});

addPromise('tenzin', 9).then(function () {
  console.log('this should not show up');
}, function() {
  console.log('this should appear', err);
});
