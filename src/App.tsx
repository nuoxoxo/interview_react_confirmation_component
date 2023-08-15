import { useState } from "react";
import { GetRandomColor } from "./Helpers";
// import Badge from "react-bootstrap/Badge"
import { marked } from "marked";

function App() {
  const [textColor, SetTextColor] = useState(GetRandomColor());
  const [markdown, setMarkdown] = useState("");

  let inputStyle = {
    width: "400px",
    height: "400px",
    backgroundColor: "#FEFBEA",
    marginLeft: "auto",
    marginRight: "3px",
    padding: "10px",
    fontFamily: "Georgia",
    fontSize: "21px",
  };

  var outputStyle = {
    width: "400px",
    height: "400px",
    backgroundColor: "#E6FFE6",
    marginLeft: "3px",
    marginRight: "auto",
    padding: "10px",
    fontFamily: "Georgia",
    fontSize: "21px",
    textAligh: "left",
  };

  return (
    <>
      <div>
        <span style={{ color: textColor }}>Hello</span>
        &nbsp;<span style={{ color: textColor }}>World</span>
      </div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              {/* <h4><Badge className="text-align-center" variant="secondary">Input</Badge></h4> */}
              <div className="mark-input">
                <textarea
                  className="input"
                  style={inputStyle}
                  value={markdown}
                  onChange={(e) => {
                    setMarkdown(e.target.value);
                  }}
                  placeholder="👯 Write Your Markdown here 👯"
                >
                  {/* { console.log(markdown) } */}
                </textarea>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col">
              {/* <h4><Badge className="text-align-center" variant="secondary">Preview</Badge></h4> */}
              <div className="mark-output">
                <div
                  className="output"
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(markdown),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
