import Navbar from './Navbar';
import './css/main.css';
import Card from './Topcollection';
import SwipeToSlide from './slide';
import Home from './photos/1.png';
import {useState} from 'react';
import {BrowserRouter as Routes,Route} from 'react-router-dom';
import  college from './photos/college.png';
import  exams from './photos/exams.png';
import  reviews from './photos/reviews.png';
import Course from './course.js';
import {Link} from 'react-router-dom';

function Main (){
    return<>
        <Navbar/>
        <div class="main-search">
        
            <form class="main-search-form">
                
                <input class="main-search-input" type="text" placeholder=" search for college"/><br/>
                <button class="main-search-button" type="submit">Search</button>
                
             </form>
        </div> 
        <div class="extra">
            <div class="extra-col">
                    <div class="extra-col-img">
                    
                      <Link to="/course"><img src={college}  className="extra-col-image" alt="img not found"/></Link>
                    </div>
                    
                  <div class="extra-name">
                  <Link to="/course" className='extra-name-name'>Colleges</Link>
                  </div>
            </div>
            
            <div class="extra-col">
                    <div class="extra-col-img">
                      <img class="extra-col-image" src={exams} alt="img not found"/>
                    </div>
                    
                  <div class="extra-name">
                    <p>Exams</p>
                  </div>
            </div> 
            
            <div class="extra-col"> 
            <div class="extra-col-img">
                      <img class="extra-col-image" src={reviews} alt="img not found"/>
                    </div>
                    
                  <div class="extra-name">
                    <p>Reviews</p>
                  </div>

            </div>
                

        </div>
                 
        <div class="Top">
        <h1 class="cardhead">TOP COLLECTIONS</h1>
          <div class="card-row">
             <Card name="best colleges...." description="check details ..." view="View college"/>
             <Card name="best colleges...." description="check details ..." view="View college"/>
             <Card name="best colleges...." description="check details ..." view="View college"/>

            
          </div>
          <div class="card-row">
             <Card name="best colleges...." description="check details ..." view="View college"/>
             <Card name="best colleges...." description="check details ..." view="View college"/>
             <Card name="best colleges...." description="check details ..." view="View college"/>

            
          </div>
          
        </div>
        <div class="slidediv">
              <div class="slide">
                 <SwipeToSlide/>
               </div>
        </div>
        
    
             
    </>
    
};
export default Main;