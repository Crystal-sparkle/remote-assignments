import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <div id="header">
          <div class="topnav">
            <nav class="toolbar">
              <ul class="flex-nav">
                <li>
                  <li>
                    <a class="logo">Website Title / Logo</a>
                  </li>
                  <div class="hamburgerbtn">
                    <button class="hamburger"></button>
                  </div>
                </li>

                <div class="items">
                  <li>
                    <a class="item item-1">item 1</a>
                  </li>
                  <li>
                    <a class="item item-2">item 2</a>
                  </li>
                  <li>
                    <a class="item item-3">item 3</a>
                  </li>
                  <li>
                    <a class="item item-4">item 4</a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <nav id="mobile-nav" class="mobile-nav">
          <a href="#">item1</a>
          <a href="#">item2</a>
          <a href="#">item3</a>
          <a href="#">item4</a>
        </nav>
      </header>
      <section>
        <h1 id="h1Message">Welcome message</h1>

        <h3>Section Title</h3>

        <div class="contentbox">
          <div class="box box-1">Content Box1</div>
          <div class="box box-2">Content Box2</div>
          <div class="box box-3">Content Box3</div>
          <div class="box box-4">Content Box4</div>
        </div>
      </section>
      <div class="firstBtn">
        <button id="calltoAction">Call to Action</button>
      </div>
      <div id="contentbox2" class="contentbox">
        <div class="box box2 box-1">Content Box5</div>
        <div class="box box2 box-2">Content Box6</div>
        <div class="box box2 box-3">Content Box7</div>
        <div class="box box2 box-4">Content Box8</div>
      </div>
    </div>
  );
}

export default App;
