import React, {useEffect, useState}  from 'react'
import './App.css';
import Child from './components/Child'

function App() {
  console.log('%cApp: render start', 'color: tomato');

  const [showChild, setShowChild] = useState(() => {
    console.log('%cApp: useState callback', 'color: tomato');
    return false;
  });

  useEffect(() => {
    console.log('%cApp: useEffect no deps', 'color: LightCoral')
    return () => {
      console.log('%cApp: useEffect no deps cleanup', 'color: LightCoral')
    }
  })
  
  useEffect(() => {
    console.log('%cApp: useEffect empty deps', 'color: MediumTurquoise')
    return () => {
      console.log('%cApp: useEffect empty cleanup', 'color: MediumTurquoise');
    }
  }, [])

  useEffect(() => {
    console.log('%cApp: useEffect with dep', 'color: HotPink')
    return () => {
      console.log('%cApp: useEffect with dep cleanup', 'color: HotPink')
    }
  }, [showChild])

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={evt => setShowChild(evt.target.checked)}
        />{' '}
        show child
        
      </label>
      <div className="box">
        {showChild ? <Child/> : null}
      </div>
    </>
  ) 
  
  console.log('%cApp: render end', 'color:MediumSpringGreen');
  return element;
}

export default App;
