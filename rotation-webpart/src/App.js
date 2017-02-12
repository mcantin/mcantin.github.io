import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         This rotation webpart is something that you can use ont he front page of any SharePoint page or site. It makes announcements, events, or any sort of content slick and easy on the eyes.
        </p>
          <div className="App-body">
            <div id="slidercontainer">
              <ul class="bxslider">
                <li><img src="/images/pic1.jpg" /></li>
                <li><img src="/images/pic2.jpg" /></li>
                <li><img src="/images/pic3.jpg" /></li>
                <li><img src="/images/pic4.jpg" /></li>
              </ul>
            </div>          
          </div>
      </div>
    );
  }
}


export default App;
