import React from "react";
// import img1 from './img1.jpeg';
import "./App.css";

function Home() {
 
    return (
      <div className="Home">
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    
    <a className="navbar-brand d-flex justify-content-start " href="">Track Your Order</a>
    <img style={{height:'2%',width:'1%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IMVptd9nb25RAqIXuVnKs1b0aozxpmh0MI-5VDeO9MRYShtl1diJ_94GQA&s" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
    <img className="d-flex justify-content-center" style={{height:'20%',width:'20%',marginLeft:'40%'}} src="https://s3-alpha-sig.figma.com/img/7828/b120/5b407f670f09853593344ffbe909ef59?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2eOFSdMZDGbuiMDv5WKOFhJ3W~iclJlNXUhegTH-mfAgzp4buelC4mxPRArZR734xWrUphW4uU-EknX2XF4Bj~JBYbSP84XfESLnQltzLtO020jBumhqXcj0dRi1nSx1ZnnmURMlWGU0xCJX-D04nDj0w~CthqYXjua~JTNn9t~rDintzP7tuxIVpithWW3FK5mhzyZS58c~8GFKQFRQDgpSMC-7W4-xqxLdWkarawOdEYLCfuqECHHw5c-cEOotQsJTdaTuSbnpc~zpx-Xs7ft4edyt4koaRHe8ug1Jdv~6eqo7xvJ~yZaG9yubHBgYxWN6D6s~9FKpk2JvdUCLA__" />
    
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end"style={{marginLeft:'10%'}} >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >About Us</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Login</a>
        </li>
      </ul> 

    </div>
  </div>

</nav>
<div className="container-fluid">
  <div className="row">
    <div  className="col-md-6 col-sm-6">
   
       <div
            className = "image"
            style = {{
               height: "450px",
               width: "1650px",
               backgroundImage:
               'url("https://s3-alpha-sig.figma.com/img/f97c/60aa/740a3d1898c8d95c59a6c1ec13a9a1c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b5NwkNS11TrYw~O29aJuYXFAb~6mGZSQ0YEH1h7ZHCINPYes6~FN9O013lelh5oXcaCWUPnCGqRiLaq6kcSriMy5U-knnzud0hyXCaYEZN2p2hQHBgezWKx0ujNLpoyNLmDmWmZ0sp~FNLlKGN2y04pnIVbw9enP0qFdWMQsTf8TnhHQr82y7XeqDDG3QzzPlcV94FcydoAZRi-JujE79V~VCTirMeWNFdlXE~Zun3CQDgyTdZ3ckiJS5rJZZ7cukU6bNViILypTjbQSSCNm8kSOU3sa2lk0xedfd-37oPPZKWd3fdM3gekRe1nU1WJm9XMDcr7-AcKoN0Tykvp2lw__")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
               opacity: "0.7",
               borderRadius:"10px",
            }}
         >
          
          <p  className="justify-contant-center" style={{fontFamily: 'Inter',
fontSize: '20.14px',
fontWeight: '300',
lineHeight: '29.22px',
textAlign: 'left',
color: 'blue',
marginLeft:'40px',

          }}>
            BOOK YOUR SERVICE NOW</p>
            <h4  style={{fontFamily: 'Inter',
fontSize: '30.14px',
fontWeight: '300',
lineHeight: '29.22px',
textAlign: 'left',
color:  '#646464',

marginLeft:'40px',

          }}>Fine art service
</h4>
<h4  className=" style={{marginLeft:'40px',}}"> ON TIME DELIEVERY</h4>
<h4 style={{marginLeft:'40px',}}> ECONIMICAL PRICE</h4>
<h4 style={{marginLeft:'40px',}}>ZERO DAMAGE POLICY</h4>
      </div>

      <br/> <br/>
  <div className="row" >
  <div className="col-md-6 col-sm-6">
    <div className="card" style={{width: '18rem',backgroundColor:'#C0C0C0'}}>
  <div className="card-body">
  <h5 className="card-title  d-flex justify-content-center">Transportation</h5>
  <p className="card-text">Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system.  A supply of clean PU Foam, bubble wrap and acid free tissue should be carried. The cargo area of the truck should be clean and free of any loose objects/particles. Works should be crated for transportation, as per Museum specifications. Crates should be strapped or wedged so that they cannot move about when in transit. There should be a minimum of two UAPL staff  with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser. Loading/Unloading of 
  works into the trucks in strong wind or rain is to be avoided, unless required in an emergency.</p>
  </div>
</div>
    </div>
    
    <div className="col-md-6 col-sm-6">
    <div className="card" style={{width: '18rem',backgroundColor:'#C0C0C0'}}>
  <div className="card-body">
  <h5 className="card-title d-flex justify-content-center">Airport Supervision</h5>
  <p className="card-text">To handle successful fine art consignment is to have maximum control on the consignment 
  starting from packing, handling, transportation and handover to airlines. The key is to go one step more and 
  
  oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment. Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).
   Professional Art handlers for examination & x-ray handling of crates.</p>
  </div>
  </div>
</div>
    </div>
    </div>
 
    <div className="col-md-6 col-sm-6">
    <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown">Delhi
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>
   
<form>
<button className="btn2 " type="button">Domestic</button>
<button className="btn1 " type="button">InterNational</button>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pick up location</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Drop up location</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pick up location</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Shipping Date</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
  <i class='far fa-calendar-check'></i>
</div>

<div className="mb-3">
<button className="btn btn-success" type="button">Get estimate</button>
  
</div>
</form>
    </div>
    
  </div>
  


</div>

      </div>
    );
  }
  
  export default Home;
  