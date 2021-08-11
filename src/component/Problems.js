import a from '../box.png'
import b from '../responsive.png'
import c from '../digital.png'

function Problems() {

    return(
    <div className ="Problems-flexbox-container">
        <div className="App-card">
          <img className="Icon" src={a}/>
          <h2>Problem 1</h2>
          <br></br>
          <body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero odio, accumsan quis lorem a, porta lacinia metus. Aliquam consequat sit amet massa ac commodo. </body>
        </div>       
        <div className="App-card">
          <img className="Icon" src={b}/>
          <h2>Problem 2</h2>
          <br></br>
          <body>Praesent pulvinar auctor lectus in rhoncus. Ut commodo tincidunt neque vitae ornare. Aliquam volutpat bibendum dui, quis finibus risus faucibus tristique.</body>
        </div>
        <div className="App-card">
          <img className="Icon" src={c}/>
          <h2>Problem 3</h2>
          <br></br>
          <body>Proin odio lectus, viverra ac nunc vitae, aliquam bibendum metus.</body>
        </div>
    </div>
    );

};

export default Problems;