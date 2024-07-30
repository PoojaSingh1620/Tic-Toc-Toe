export default function Log({turns}){
    //the idea behind this log is in the end that it's outputs an ordered list 
    // where we output the information about the different turns  we had in our game thus far
    //for that we need to mange dynamic array of turns here, An array that grows with every button click
    //and that ofcourse means that we can't really manage that state here because that information,
    //which button was clicked is generated in the gameBoard componenet.
    //so we again, need to lift state up  to the app component because thats the componenet that has access to both the game board and the log component
    return <ol id ="log">
   {turns.map(turn=> <li key ={`${turn.square.row}${turn.square.col}`}>
    {turn.player}selected{turn.square.row},{turn.square.col}</li>)}
    </ol>
}