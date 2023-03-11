import './css/main.css';
function Card(props){
    console.log(props)
    return<>
    <div class="card">
      
      <h3 className="cardheading">{props.name}</h3>
      <p class="carddesc">{props.description}</p>
      <button class="cardbutton">{props.view}</button>


        
    </div>
    </>
};

export default Card;