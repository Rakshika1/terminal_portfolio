import React from 'react';
import './Initial.css'
function Initial() {
  return (
    <div className='w-full header'>
      <div className='typing'>
        Welcome to my Terminal Portfolio!
      </div>
      <div className='flex'>
      <pre className='marginx'>
        {`
>>================================<<
||  _______ ____ ____  ___ _____  ||
|| / __/ _  / _  / _ \\/ _  / __/  ||
||/_/  \\_,_/\\_, /_//_/\\_,_/_/     ||
||         /___/____        __    ||
|| _  _____ _/ / / /  ___ _/ /__ _||
||| |/ / _  / / / _ \\/ _  / / _  /||
|||___/\\_,_/_/_/_//_/\\_,_/_/\\_,_/ ||
>>================================<<`}</pre>
</div>
      Type help to know more...
    </div>
  )
}

export default Initial;