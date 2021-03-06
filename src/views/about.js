import { h, render, Component } from 'preact';
/** @jsx h */

class About extends Component {
  // Preact!
  render(props, state) {
    return (
      <div class="Preact">
        <h1>{props.title}</h1>
        <a href="/">Home</a>
        <a href="/about" style={{ color: 'black' }}>
          About
        </a>
        <a href="/something">Something</a>
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  let data = window.__DATA__;

  function renderApp() {
    render(<About {...data} />, document.body, document.body.firstElementChild);
  }

  // Initial render.
  renderApp();
}

export default About;
