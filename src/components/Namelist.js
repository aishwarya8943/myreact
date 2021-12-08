import React from "react"


// function Namelist(){
//     const names = ['Aishu','Anu','Celin']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return (
//         <div>
//             {
//                 nameList
//             }
            
//         </div>

//     )
// }

function Namelist (){
    const persons = [
        {
            id : 1,
            name : 'Aishu',
            mail: 'xxxx@yah' 
        },
        {
            id : 2,
            name : 'Anna',
            mail: 'xyyx@yah'  

        }
    ]

    const personList = persons.map(person => <h2> I am {person.name} and my email is {person.mail}</h2>)
    return (
        <div>
        {personList}</div>

    )

    
}
export default Namelist