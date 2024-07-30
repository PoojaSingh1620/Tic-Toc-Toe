import {useState} from 'react';

export default function Player({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false); //so we are not editing the player name and also not showing an input field
     const [playerName, setPlayerName] =useState(initialName)
    function handleEditClick(){
    setIsEditing((editing)=>!editing); // calling this state updating function will then also cause React to re-execute this player component function and it will cause React to re-evaluate this JSX code and if see any changes and if anything did change , those will be reflected to the real dOM and other component functions.
    }

     function handleChange(event){
      //  console.lof(event)

        setPlayerName(event.target.value);
     }
    let editablePlayerName =<span className='player-Name'>{playerName}</span>;
    // btnCaption ="Edit";
    if(isEditing){
        editablePlayerName= 
        <input type="text" required value={playerName} onChange={handleChange}/>
     // btnCaption ="Save";
    }
    
    return(
        <>
        <li className={isActive?'active': undefined}>
          <span className="player">
          {editablePlayerName}
         <span className='player-symbol'>{symbol}</span>
         </span>
         <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
         </li>
        </>
    )
}