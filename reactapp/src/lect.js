import {useState} from 'react';

function New(){
    const [name,setName]=useState('mario');
    const handleclick=()=>{
        setName('baa');

    }
    return<>
       <p>{name}</p>
       <button onClick={handleclick}>click me</button>



    </>
};

export default New;