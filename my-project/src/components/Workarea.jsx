import './Workarea.css';
import { useState, useRef } from 'react';
import handleCommand from '../HandleCommand.js';
import Command from './Command.jsx';


function Workarea() {
  const [path, setPath] = useState('~');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const user = "Rakshika";
  const host = "Sharma";
  const [history, setHistory] = useState([]);
  const [pastCommands, setPastCommands] = useState(['']);
  const inputRef = useRef(null);
  const [pastCommadIndex, setPastCommadIndex] = useState(0);
  const handleInput = (e) => {
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
    setInputValue(target.value);
    setPastCommadIndex(pastCommands.length - 2);
  };


  const handleKeyDown = (e) => {


    if (e.key === 'Enter') {
      e.preventDefault();
      const res = handleCommand(path, inputValue, setPath);
      if (res === '0') { setHistory([]); }
      else {
        const entry = {
          prompt: user + '@' + host + ':' + path + '$',
          text: res
        }
        history.push(entry);
        setHistory(history);
        if (pastCommands[pastCommands.length - 2] !== inputValue) {
          pastCommands.splice(pastCommands.length - 1, 0, inputValue);
          setPastCommadIndex(pastCommands.length - 2);
        }



      }
      console.log(pastCommands);
      setInputValue('');
    }
    else if (e.key === 'ArrowUp') {
      console.log(pastCommadIndex);
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.value = pastCommands[pastCommadIndex] ? pastCommands[pastCommadIndex] : '';

        setInputValue(inputRef.current.value);
        if (pastCommadIndex > 0) setPastCommadIndex(pastCommadIndex - 1);
      }
    }
    else if (e.key === 'ArrowDown') {
      console.log(pastCommadIndex);
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.value = pastCommands[pastCommadIndex] ? pastCommands[pastCommadIndex] : '';
        setInputValue(inputRef.current.value);
        if (pastCommadIndex < pastCommands.length - 1) setPastCommadIndex(pastCommadIndex + 1);
      }
    }
  };



  return (

    <div className='w-full'>
      {
        history.map((item, index) => {
          return (
            <Command key={index} prompt={item.prompt} text={item.text} />
          )
        })
      }
      <div className='flex w-full mono'>
        <span className='yellow mr-[0.5em]'>{'Rakshika'}</span>
        <span className='white mr-[0.5em]'>{'@'}</span>
        <span className='green mr-[0.5em]'>{'Sharma'}</span>
        <span className='white mr-[0.5em]'>{path + '$'}</span>
        <textarea
          ref={inputRef}
          className="terminal-input"
          rows="1"
          autoFocus
          value={inputValue}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue(e.target.value)}
        />      </div>

    </div >

  );
}

export default Workarea;
