import Navbar from './Navbar.js';
import './css/course.css';
import Singlecourse from './singlecourse';
function Course(){
    return<>
        <Navbar/>
        <div class="empty1">
              <h1>Select Course</h1>

        </div>
        <div class="empty2">
            <div class="course-container">
                  <Singlecourse coursename="Engineering" course1="B.E/B.Tech" course2="M.E/M.Tech" 
                  description1="Bachelor of technology" description2="Master of technology"/>
                    

            </div>
        </div>

    </>

};
export default Course; 