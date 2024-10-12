import './Command.css'
function Command({ prompt, text }) {

  return (

    <div className='flex w-full'>
      <pre className='history'>
        <span className='yellow mr-[0.5em]'>{prompt.slice(0, 6)}</span>
        <span className='white mr-[0.5em]'>{prompt.slice(6, 7)}</span>
        <span className='green mr-[0.5em]'>{prompt.slice(7, 15)}</span>
        <span className='white mr-[0.5em]'>{prompt.slice(15,)}</span>
        {text}</pre>
    </div>


  )
}


export default Command;