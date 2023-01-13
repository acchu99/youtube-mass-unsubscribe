(async function iife() {
  var UNSUBSCRIBE_DELAY_TIME = 2000;

  var runAfterDelay = (fn, delay) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fn();
        resolve();
      }, delay);
    });

  var channels = Array.from(
    document.getElementsByTagName(`ytd-channel-renderer`)
  );
  console.log(`${channels.length} channels found.`);

  var ctr = 0;
  for (const channel of channels) {
    channel.querySelector(`.yt-spec-touch-feedback-shape__fill`).click();
    await runAfterDelay(() => {
      document
        .getElementsByTagName(`yt-confirm-dialog-renderer`)[0]
        .querySelector(`#confirm-button`)
        .querySelector("button")
        .click();
      console.log(`Unsubsribed ${ctr + 1}/${channels.length}`);
      ctr++;
    }, UNSUBSCRIBE_DELAY_TIME);
  }
})();
