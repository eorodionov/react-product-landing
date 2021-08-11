import a from '../leads.png'
import b from '../responsive.png'
import c from '../sales.png'
import d from '../compliance.png'


function Features() {

    return(
    <div className ="Features-flexbox-container">
        <div className="App-card">
          <img className="Icon" src={a}/>
          <h2>Benefit 1</h2>
          <br></br>
          <body>Etiam interdum risus et velit dictum consectetur.</body>
        </div>       
        <div className="App-card">
          <img className="Icon" src={b}/>
          <h2>Benefit 2</h2>
          <br></br>
          <body>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</body>
        </div>
        <div className="App-card">
          <img className="Icon" src={c}/>
          <h2>Benefit 3</h2>
          <br></br>
          <body>Morbi gravida nunc eu dolor volutpat, sit amet ultrices mi finibus. Phasellus egestas non arcu elementum sodales.</body>
        </div>
        <div className="App-card">
          <img className="Icon" src={d}/>
          <h2>Benefit 4</h2>
          <br></br>
          <body>Cras maximus massa id sagittis tristique.</body>
        </div>
    </div>
    );

};

export default Features;