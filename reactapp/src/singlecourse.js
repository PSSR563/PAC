import './css/course.css';
function Singlecourse(props) {
    console.log(props)

    return<>
       <div class="single-course">
            <div class="single-course-row">
                 <h1>{props.coursename}</h1>

            </div>
            <div class="single-course-row">
                    <div class="single-course-column">
                         <div class="single-course-column-row">
                                <h3>{props.course1}</h3>
                         </div>
                         <div class="single-course-column-row">
                                <p>{props.description1}</p>
                            
                         </div>
                         

                    </div>
                    <div class="single-course-column">
                        <div class="single-course-column-row">
                              <h3>{props.course2}</h3>


                        </div>
                        <div class="single-course-column-row">
                              <p>{props.description2}</p>
                              
                                
                        </div>
                                
                    </div>
                    
                            
            </div>

        </div>
                
    </>
};
export default Singlecourse;