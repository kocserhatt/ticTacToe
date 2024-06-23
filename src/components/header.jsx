export const Header = ({nextPlayer, hasWinner}) => {
    return (
        <>
            <h4>Tic Tac Toe</h4>
            <p>{`Next Player: ${nextPlayer}`}</p>
            <p>{`Winner: ${hasWinner && nextPlayer === "x" ? "o" : hasWinner ? "x" : ""}`} </p>
        </>
    )
}