import throttle from 'lodash.throttle';

const updatePosition = player.on(
  'timeupdate',
  throttle(function ({ duration, percent, seconds }) {
    // data is an object containing properties specific to that event
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

// console.log(localStorage.getItem('videoplayer-current-time'));
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
