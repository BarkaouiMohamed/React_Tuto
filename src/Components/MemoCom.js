import React from 'react'

function MemoCom({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoCom)