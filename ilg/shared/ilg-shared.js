window.StudyOSILG = window.StudyOSILG || {
  focusMain() {
    const main = document.querySelector("main");
    if (main) main.focus({ preventScroll: true });
  }
};
