import {useState} from 'react';
import {sculptureList} from'./data'

export default function Gallery() {
  const[index, setIndex] = useState(0);
  const[showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  if(showMore) console.log('hmmmm')
  function handleNextClick() {
   return hasNext? setIndex(index + 1): setIndex(0);
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
    <h1>
      {data.name} by {data.artist}
    </h1>
    <p>
      ( {index} of {sculptureList.length} )
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
    </button>
    {finaLresult[index]}
    </>
  )
}

