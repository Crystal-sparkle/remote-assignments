import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div id="header">
          <div className="topnav">
            <nav className="toolbar">
              <ul className="flex-nav">
                <li>
                  <li>
                    <a className="logo">Website Title / Logo</a>
                  </li>
                  <div className="hamburgerbtn">
                    <button className="hamburger"></button>
                  </div>
                </li>

                <div className="items">
                  <li>
                    <a className="item item-1">item 1</a>
                  </li>
                  <li>
                    <a className="item item-2">item 2</a>
                  </li>
                  <li>
                    <a className="item item-3">item 3</a>
                  </li>
                  <li>
                    <a className="item item-4">item 4</a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <nav id="mobile-nav" className="mobile-nav">
          <a href="#">item1</a>
          <a href="#">item2</a>
          <a href="#">item3</a>
          <a href="#">item4</a>
        </nav>
      </header>
      <section>
        <h1 id="h1Message">Welcome message</h1>

        <h3>Section Title</h3>

        <div className="contentbox">
          <div className="box box-1">Content Box1</div>
          <div className="box box-2">Content Box2</div>
          <div className="box box-3">Content Box3</div>
          <div className="box box-4">Content Box4</div>
        </div>
      </section>
      <div className="firstBtn">
        <button id="calltoAction">Call to Action</button>
      </div>
      <div id="contentbox2" className="contentbox">
        <div className="box box2 box-1">Content Box5</div>
        <div className="box box2 box-2">Content Box6</div>
        <div className="box box2 box-3">Content Box7</div>
        <div className="box box2 box-4">Content Box8</div>
      </div>
    </div>
  );
}

export default App;
