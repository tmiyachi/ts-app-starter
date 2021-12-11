// entry point file
class Greeter {
  element: HTMLElement;
  span: HTMLElement;
  timerToken: number | undefined;

  constructor(element: HTMLElement) {
    this.element = element;
    this.element.innerHTML += 'The time is: ';
    this.span = document.createElement('span');
    this.element.appendChild(this.span);
    this.span.innerHTML = new Date().toUTCString();
  }

  start() {
    this.timerToken = window.setInterval(
      () => (this.span.innerHTML = new Date().toUTCString()),
      500
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  const greeter = new Greeter(el);
  greeter.start();
});
