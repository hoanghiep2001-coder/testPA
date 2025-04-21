import "./App.css";
import BestPA from "./data";

function App() {
  return (
    <div className="App">

      <div className="overlay">
        <div className="inner">
          <h3 className="title">List PA test Demo!</h3>
          <ul className="list">

            {BestPA.map((month, index) => {
              return (

                <li className="item">
                  <div key={index}>
                    <p className="content">{month.timeline}</p>

                    <ul className="sub-list">
                      {BestPA[0].data.map((PA_info, index) => {
                        return (
                          <li key={index} className="sub-item">

                            <p className="sub-item-dev">
                              - {" " + PA_info.dev}:
                            </p>

                            <a href={PA_info.path} className="link" target="_">
                                {" " + PA_info.name}
                            </a>
                          </li>
                        )
                      })}

                    </ul>
                  </div>
                </li>

              )
            })}
          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;