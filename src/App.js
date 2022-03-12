import React, { Component } from "react";
import "./App.scss";
import { fileStructureError, meData, trackMetadataError, albumMetadataError, serverError, bulkSuccess, arrangement } from "./assets/dummy";
import SectionOne from "./component/sections/SectionOne";
import SectionTwo from "./component/sections/SectionTwo";
import SectionThree from "./component/sections/SectionThree";
import SectionFour from "./component/sections/SectionFour";
import SectionFive from "./component/sections/SectionFive";
import SectionSix from "./component/sections/SectionSix";
import SectionSeven from "./component/sections/SectionSeven";
import SectionEight from "./component/sections/SectionEight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(serverError)
    return (
      <div className="App">
        <h1>React.js Playground</h1>
        <ol>
          <SectionOne meData={meData} />
          <SectionTwo />
          <SectionThree />
          <SectionFour fileStructureError={fileStructureError} />
          <SectionFive trackMetadataError={trackMetadataError} />
          <SectionSix albumMetadataError={albumMetadataError} />
          <SectionSeven serverError={serverError} bulkSuccess={bulkSuccess} />
          <SectionEight arrangement={arrangement} />
        </ol>
      </div>
    );
  }
}

export default App;
