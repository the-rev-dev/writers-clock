import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { GameMenu } from "./GameMenu";

interface GamePageProps {
}

export const GamePage: React.FC<GamePageProps> = (props) => {


    const [displayBoard, setDisplayBoard] = useState(false);

    const handleGameOnBitchezClick = () => {
        setDisplayBoard(true);
    }

    const handleMenuClick = () => {
        setDisplayBoard(false);
    }

    if (displayBoard) {
        return <GameBoard
            handleMenuClick={handleMenuClick}
        />
    } else {
        return <GameMenu
            handleGameOnBitchezClick={handleGameOnBitchezClick}
        />
    }
}