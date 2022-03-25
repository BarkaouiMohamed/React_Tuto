import React from 'react'
import Person from '../Components/Person'
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        { id: 1, 
          name: 'mohamed',
          age: 33,
          skill: 'React'
        },
        { id: 2, 
          name: 'ANAS',
          age: 30,
          skill: 'VUEJS'
        },
        { id: 3, 
          name: 'nabil',
          age: 40,
          skill: 'FLUTTER'
        },
        { id: 4, 
          name: 'houssem',
          age: 60,
          skill: 'Angular'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default NameList
/* the list component is only responsible for rendering the list  */