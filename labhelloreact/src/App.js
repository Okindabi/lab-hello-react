// src/App.js
import "./App.css";

import background from "./images/background.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhacklogo from "./images/ironhack-logo-xs.png";
import menutop from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div className="Top-Half">
        <header>
          <img src={ironhacklogo} className="Ironhack-logo" alt="logo" />
          <img src={menutop} className="Menu" alt="menu" />
        </header>

        <section className="Say-Hello">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <h5>
            You will learn how to use
            <br />
            the most popular frontend library,
            <br />
            and become a super Ninja developer
          </h5>
          <div className="Button">
            <h4>Awesome!</h4>
          </div>
        </section>
      </div>

      <section className="Four-Icons">
        <div className="Each-Icon">
          <div>
            <img src={icon1} className="Menu" alt="menu" />
          </div>
          <div>
            <h3>Declarative</h3>
            <p>
              React makes it
              <br />
              painless to create
              <br />
              interactive UIs.
            </p>
          </div>
        </div>
        <div className="Each-Icon">
          <div>
            <img src={icon2} className="Menu" alt="menu" />
          </div>
          <div>
            <h3>Components</h3>
            <p>
              Build encapsulated
              <br />
              components that
              <br />
              manage their state.
            </p>
          </div>
        </div>
        <div className="Each-Icon">
          <div>
            <img src={icon3} className="Menu" alt="menu" />
          </div>
          <div>
            <h3>Single-Way</h3>
            <p>
              A set of immutable
              <br />
              values are passed to
              <br />
              the components.
            </p>
          </div>
        </div>
        <div className="Each-Icon">
          <div>
            <img src={icon4} className="Menu" alt="menu" />
          </div>
          <div>
            <h3>JSX</h3>
            <p>
              Statically-typed,
              <br />
              designed to run on
              <br />
              modern browsers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
