import { useState } from "react";
function Radio(){
    const [gen,setGen] = useState("female");
    const [city,setCity] = useState("Kolkata");
    return(
        <>
            <h1>Handle Radio Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(ev)=>setGen(ev.target.value)} checked={gen == "male"} name="gender" id="male" value={"male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(ev)=>setGen(ev.target.value)} checked={gen == "female"}  name="gender" id="female" value={"female"} />
            <label htmlFor="female">Female</label>
            <h5>Selected Gender: {gen} </h5>


            <br /><br />
            <h4>Select City</h4>
            <select defaultValue={"Kolkata"} onChange={(ev)=>setCity(ev.target.value)}>
                <option value="Munger" >Munger</option>
                <option value="Kolkata" >Kolkata</option>
                <option value="Patna">Patna</option>
                <option value="Ranchi">Ranchi</option>
            </select>
            <h5>Selected City: {city}</h5>
        </>
    )
}
export default Radio;