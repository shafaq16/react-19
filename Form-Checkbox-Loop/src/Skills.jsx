import { useState } from "react";

function Skills(){
    const [skill,setSkill] = useState([]);
    const handleSkills=(ev)=>{
        console.log(ev.target.value , ev.target.checked);
        if(ev.target.checked){
            setSkill([...skill, ev.target.value])
        }
        else{
            setSkill([...skill.filter((item)=>item!=ev.target.value)])
        }
    }

    return(
        <div className="skill">
            <h3>Select Your Skills</h3>
            <input type="checkbox" onChange={handleSkills} id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />

            <input type="checkbox"  onChange={handleSkills} id="java" value="java" />
            <label htmlFor="java">JAVA</label>
            <br />

            <input type="checkbox"  onChange={handleSkills} id="js" value="js" />
            <label htmlFor="js">JAVASCRIPT</label>
            <br />

            <input type="checkbox" onChange={handleSkills} id="c" value="c" />
            <label htmlFor="c">C LANGUAGE</label>

            <h1>{skill.toString() }</h1>
        </div>

    )
}

export default Skills;