import { useEffect, useState } from "react";
import Grid from "./Grid";

const Game = () => {

    const gamePattern = [0, 3, 6, 2, 8, 1];
    const [patternSize, setPatternSize] = useState(3);
    const [userPattern, setUserPattern] = useState([]);

    const addToUserPattern = id => {
        console.log(id);
        setUserPattern([...userPattern, id])
    };

    useEffect(() => {
        console.log(userPattern);
    }, [userPattern])

    return (
        <div>
            <Grid pattern={gamePattern} handleBoxClick={addToUserPattern} size={patternSize}></Grid>
        </div>
    );
}

export default Game;