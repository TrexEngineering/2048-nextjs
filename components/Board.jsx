import { useState, useEffect } from "react"
import Cell from "./Cell"
import Tile from "./Tile"
import { Board } from "../helper"
import useEvent from "../hooks/useEvent"
import GameOverlay from "./GameOverlay"
import { useSwipeable } from "react-swipeable";

export default function BoardView() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        setBoard(new Board());
      }, []);

    const handleKeyDown = (event) => {
        if (board.hasWon()){
            return;
        }

        if (event.keyCode>=37 && event.keyCode<=40){
            let direction = event.keyCode - 37;
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
            let newBoard = boardClone.move(direction);
            setBoard(newBoard);
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => setBoard(Object.assign(Object.create(Object.getPrototypeOf(board)), board).move(0)),
        onSwipedUp: () => setBoard(Object.assign(Object.create(Object.getPrototypeOf(board)), board).move(1)),
        onSwipedRight: () => setBoard(Object.assign(Object.create(Object.getPrototypeOf(board)), board).move(2)),
        onSwipedDown: () => setBoard(Object.assign(Object.create(Object.getPrototypeOf(board)), board).move(3)),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    useEvent('keydown', handleKeyDown)

    const cells =board.cells.map((row,rowIndex)=>{
        return (
            <div key={rowIndex}>
                {row.map((col,colIndex)=>{
                    return <Cell key={rowIndex * board.size + colIndex}/>
                })}
            </div>
        );
    });

    const tiles =board.tiles
        .filter((tile)=>tile.value !== 0)
        .map((tile,index)=>{
        return <Tile tile={tile} key={index}/>
    });

    const resetGame = () => {
        setBoard(new Board())
    }

    return (
        <div className="board-container" {...handlers}>
            <div className="details-box">
                <div className="resetButton" onClick={resetGame}>new game</div>
                <div className="score-box">
                    <div className="score-header">SCORE</div>
                    <div>{board.score}</div>
                </div>
            </div>
            <div className="board">
                {cells}
                {tiles}
                <GameOverlay onRestart={resetGame} board={board} />
            </div>
        </div>
    )
}