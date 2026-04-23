import { useState } from "react";
import Clock from './clock'

const Color = () => {
    const [color, setColor] = useState("white");

    return (
        <div>
            <h1>Choose Your Desired Color: </h1>
            <select onChange={(ev) => setColor(ev.target.value)}>
                <option value="red">Red</option>
                <option value="#662f6b">Lavender</option>
                <option value="#783e15">Golden Brown</option>
                <option value="#09fb09">Lime Green</option>
                <option value="white">White</option>
            </select>

            <Clock color={color} />
        </div>
    )
}

export default Color;