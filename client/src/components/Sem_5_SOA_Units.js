/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
// import profilepic from './images/pic-1.jpg'
// import thumb from "./images/Thumbnail/Sem-5/SOA.webp"
import postpic from "./images/Thumbnail/Sem-5/SOA.webp"

import handledarkmode from "./handledarkmode";
function Sem_5_SOA_Units() {
  useEffect(() => {
 
    
    handledarkmode();
    }, []);
    return (
    <>



<section class="playlist-details">

    <h1 class="heading">Subject Details</h1>

    <div class="row">

        <div class="column">
            <form action="" method="post" class="save-playlist">
                <button type="submit"><i class="far fa-bookmark"></i> <span>save unitlist</span></button>
            </form>

            <div class="thumb">
                <img src={postpic}alt=""/>
                <span>7 Units</span>
            </div>
        </div>

        <div class="column">
            <div class="tutor">
                            {/* <img src={profilepic} alt=""/> */}
                <div>
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                </div>
            </div>

            <div class="details">
                <h3>Service Oriented Architecture [IT502-N]</h3>
                <p>This course provides a comprehensive overview of service orientation principles, covering fundamental concepts, analysis techniques, and underlying technologies. Participants delve into advanced topics such as service composition, orchestration, and choreography, while exploring various WS-* specification standards.
</p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>             </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/581' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction To distributed Computing and SOA</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/582' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Web Services Fundamental and Standard</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/583' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Principles of Service-Oriented Architecture</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/584' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>SOA and WS-* Extension</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/585' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Principle of Service Oriented Computing</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/586' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>SOA Platforms</h3>
    </a> 
  </Link>


</div>


</section>





</>
);
}

export default Sem_5_SOA_Units;