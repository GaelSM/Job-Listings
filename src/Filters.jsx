import icon from './images/icon-remove.svg' 

export default function Filters({name, handle}){
    return (
        <div className='container'> 
            <p> {name} </p> 
            <div onClick={handle}> 
                <img src={icon}/> 
            </div> 
        </div>
    )
}