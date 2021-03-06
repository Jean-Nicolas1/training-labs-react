//
//
//                  uuuuuuu
//              uu$$$$$$$$$$$uu
//           uu$$$$$$$$$$$$$$$$$uu
//          u$$$$$$$$$$$$$$$$$$$$$u
//         u$$$$$$$$$$$$$$$$$$$$$$$u
//        u$$$$$$$$$$$$$$$$$$$$$$$$$u
//        u$$$$$$$$$$$$$$$$$$$$$$$$$u
//        u$$$$$$"   "$$$"   "$$$$$$u
//        "$$$$"      u$u       $$$$"
//         $$$u       u$u       u$$$
//         $$$u      u$$$u      u$$$
//          "$$$$uu$$$   $$$uu$$$$"
//           "$$$$$$$"   "$$$$$$$"
//             u$$$$$$$u$$$$$$$u
//              u$"$"$"$"$"$"$u
//   uuu        $$u$ $ $ $ $u$$       uuu
//  u$$$$        $$$$$u$u$u$$$       u$$$$
//   $$$$$uu      "$$$$$$$$$"     uu$$$$$$
// u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
// $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
//  """      ""$$$$$$$$$$$uu ""$"""
//            uuuu ""$$$$$$$$$$uuu
//   u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
//   $$$$$$$$$$""""           ""$$$$$$$$$$$"
//    "$$$$$"                      ""$$$$""
//      $$$"                         $$$$"
//
//
//
// Look the solution only if your are stuck
//
//
//




import React from 'react';
import ReactDOM from 'react-dom';
import './pizza.css';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pepperonni: {
        isActive: true,
        btnClass: "btn-pepperonni"
      },
      mushrooms: {
        isActive: true,
        btnClass: "btn-mushrooms"
      },
      greenPeppers: {
        isActive: true,
        btnClass: "btn-green-peppers"
      },
      sauce: {
        isActive: false,
        btnClass: "btn-sauce"
      },
      crust: {
        isActive: false,
        btnClass: "btn-crust"
      }
    }
  }

  getButtonClass(ingredientKey) {
    let res = "btn " + this.state[ingredientKey].btnClass;
    if (this.state[ingredientKey].isActive)
      res += " active";
    return res;
  }

  toggleIngredient(ingredientKey) {
    let change = {}
    change[ingredientKey] = {
      isActive: !this.state[ingredientKey].isActive,
      btnClass: this.state[ingredientKey].btnClass
    }
    this.setState(change)
  }

  calculatePrice() {
    let res = 10;
    if (this.state.pepperonni.isActive) {
      res += 1;
    }
    if (this.state.mushrooms.isActive) {
      res += 1;
    }
    if (this.state.greenPeppers.isActive) {
      res += 1;
    }
    if (this.state.sauce.isActive) {
      res += 3;
    }
    if (this.state.crust.isActive) {
      res += 5;
    }
    return res;
  }

  render() {
    return (
      <div>
        {/* <!-- Begin Header --> */}
        <header>
          <h1>Pizza Builder</h1>
          <p className="description">Build your own HTML and CSS pizza.</p>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- Controls --> */}
        <div className="panel controls">
          <ul>
            <li>
              <button className={this.getButtonClass('pepperonni')} onClick={() => {this.toggleIngredient("pepperonni")}}>Pepperonni</button>
            </li>
            <li>
              <button className={this.getButtonClass('mushrooms')} onClick={() => {this.toggleIngredient("mushrooms")}}>Mushrooms</button>
            </li>
            <li>
              <button className={this.getButtonClass('greenPeppers')} onClick={() => {this.toggleIngredient("greenPeppers")}}>Green peppers</button>
            </li>
            <li>
              <button className={this.getButtonClass('sauce')} onClick={() => {this.toggleIngredient("sauce")}}>White sauce</button>
            </li>
            <li>
              <button className={this.getButtonClass('crust')} onClick={() => {this.toggleIngredient("crust")}}>Gluten-free crust</button>
            </li>
          </ul>
        </div>
        {/* <!-- End Controls --> */}

        {/* <!-- Price --> */}
        <aside className="panel price">
          <h2>Your pizza's price</h2>

          <b>$10 cheese pizza</b>
          <ul>
            <li className={this.state.pepperonni.isActive ? '' : 'hidden'}>$1 pepperonni</li>
            <li className={this.state.mushrooms.isActive ? '' : 'hidden'}>$1 mushrooms</li>
            <li className={this.state.greenPeppers.isActive ? '' : 'hidden'}>$1 green peppers</li>
            <li className={this.state.sauce.isActive ? '' : 'hidden'}>$3 white sauce</li>
            <li className={this.state.crust.isActive ? '' : 'hidden'}>$5 gluten-free crust</li>
          </ul>
          <strong>${this.calculatePrice()}</strong>
        </aside>
        {/* <!-- End Price --> */}

        {/* <!-- Begin Pizza --> */}
        <div id="pizza">
          <div className={this.state.greenPeppers.isActive ? "" : "hidden"}>
            <section className="green-pepper one"></section>
            <section className="green-pepper two"></section>
            <section className="green-pepper three"></section>
            <section className="green-pepper four"></section>
            <section className="green-pepper five"></section>
            <section className="green-pepper six"></section>
            <section className="green-pepper seven"></section>
            <section className="green-pepper eight"></section>
            <section className="green-pepper nine"></section>
            <section className="green-pepper ten"></section>
            <section className="green-pepper eleven"></section>
            <section className="green-pepper twelve"></section>
            <section className="green-pepper thirteen"></section>
            <section className="green-pepper fourteen"></section>
            <section className="green-pepper fifteen"></section>
            <section className="green-pepper sixteen"></section>
            <section className="green-pepper seventeen"></section>
            <section className="green-pepper eightteen"></section>
            <section className="green-pepper nineteen"></section>
            <section className="green-pepper twenty"></section>
            <section className="green-pepper twenty-one"></section>
          </div>

          <div className={this.state.mushrooms.isActive ? "" : "hidden"}>
            <section className="mushroom one">
              <div className="cap">1</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom two">
              <div className="cap">2</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom three">
              <div className="cap">3</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom four">
              <div className="cap">4</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom five">
              <div className="cap">5</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom six">
              <div className="cap">6</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom seven">
              <div className="cap">7</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom eight">
              <div className="cap">8</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom nine">
              <div className="cap">9</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom ten">
              <div className="cap">10</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom eleven">
              <div className="cap">11</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twelve">
              <div className="cap">12</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom thirteen">
              <div className="cap">13</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom fourteen">
              <div className="cap">14</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom fifteen">
              <div className="cap">15</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom sixteen">
              <div className="cap">16</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom seventeen">
              <div className="cap">17</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom eighteen">
              <div className="cap">18</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom nineteen">
              <div className="cap">19</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty">
              <div className="cap">20</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-one">
              <div className="cap">21</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-two">
              <div className="cap">22</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-three">
              <div className="cap">23</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-four">
              <div className="cap">24</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-five">
              <div className="cap">25</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-six">
              <div className="cap">26</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-seven">
              <div className="cap">27</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-eight">
              <div className="cap">28</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom twenty-nine">
              <div className="cap">29</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom thirty">
              <div className="cap">30</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom thirty-one">
              <div className="cap">31</div>
              <div className="stem"></div>
            </section>

            <section className="mushroom thirty-two">
              <div className="cap">31</div>
              <div className="stem"></div>
            </section>
          </div>

          <div className={this.state.pepperonni.isActive ? "" : "hidden"}>
            <section className="pep one">1</section>
            <section className="pep two">2</section>
            <section className="pep three">3</section>
            <section className="pep four">4</section>
            <section className="pep five">5</section>
            <section className="pep six">6</section>
            <section className="pep seven">7</section>
            <section className="pep eight">8</section>
            <section className="pep nine">9</section>
            <section className="pep ten">10</section>
            <section className="pep eleven">11</section>
            <section className="pep twelve">12</section>
            <section className="pep thirteen">13</section>
            <section className="pep fourteen">14</section>
            <section className="pep fifteen">15</section>
            <section className="pep sixteen">16</section>
            <section className="pep seventeen">17</section>
            <section className="pep eightteen">18</section>
            <section className="pep nineteen">19</section>
            <section className="pep twenty">20</section>
            <section className="pep twenty-one">21</section>
            <section className="pep twenty-two">22</section>
            <section className="pep twenty-three">23</section>
            <section className="pep twenty-four">24</section>
            <section className="pep twenty-five">25</section>
            <section className="pep twenty-six">26</section>
            <section className="pep twenty-seven">27</section>
            <section className="pep twenty-eight">28</section>
            <section className="pep twenty-nine">29</section>
            <section className="pep thirty">30</section>
            <section className="pep thirty-one">31</section>
            <section className="pep thirty-three">33</section>
          </div>

          <section className={this.state.crust.isActive ? "crust crust-gluten-free" : "crust"}>
            <section className="cheese"></section>
            <section className={this.state.sauce.isActive ? "sauce sauce-white" : "sauce"}></section>
          </section>
        </div>
        {/* <!-- End Pizza --> */}

        {/* <!-- Begin Crumbs --> */}
        <p id="crumbs">&there4;</p>
        {/* <!-- End Crumbs --> */}

        {/* <!-- Footer --> */}
        <footer>
          <p>
            This pizza educational experience<br />
            brought to you by <a href="http://ironhack.com" target="_blank">Ironhack</a>.
          </p>
        </footer>
        {/* <!-- Footer --> */}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
