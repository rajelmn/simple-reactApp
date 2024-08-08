import {useState} from 'react';
import {sculptureList} from'./data'

export default function Gallery() {
  const[index, setIndex] = useState(0);
  const[showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index !== 0;
  
  function handleNextClick() {
   return hasNext? setIndex(index + 1): setIndex(0);
  }

  function handlePrevClick(){
    if(hasPrev) {
      setIndex(prev => prev - 1)
    }
    else return
  }

  function handleClickshowMore() {
    if(!showMore) {
      setShowMore(true)
    }
    else {
      setShowMore(false)
    }
  }

  const finaLresult = sculptureList.map((data, index) => {
  
   return( <>
     <button onClick={handlePrevClick}>
     previous
     </button> 
    <h1>
      {data.name} by {data.artist}
    </h1>
    <p>
      ( {index + 1} of {sculptureList.length} )
    </p>
    <button onClick={handleClickshowMore}> {showMore? 'hide': 'showMore'} </button> 
    <p> { showMore && data.description} </p>
    <br/> <br/>
    <img src={data.url}
    alt={data.name}
    />

    </>)
  })
  console.log(finaLresult)
  return(
    <>
    <button onClick={handleNextClick}>
      Next
    </button> <br/>
    {finaLresult[index]}
    </>
  )
}
}

