import React from 'react'
import './App.css';
import Child from './components/Child'

function App() {

  console.log('%cApp: render start', 'color: tomato');

  const [showChild, setShowChild] = React.useState(() => {
    console.log('%cApp: useState callback', 'color: tomato');
    return false;
  });

  React.useEffect(() => {
    console.log('%cApp: useEffect no deps', 'color: LightCoral')
    return () => {
      console.log('%cApp: useEffect no deps cleanup', 'color: LightCoral')
    }
  })
  
  React.useEffect(() => {
    console.log('%cApp: useEffect empty deps', 'color: MediumTurquoise')
    return () => {
      console.log('%cApp: useEffect empty cleanup', 'color: MediumTurquoise');
    }
  }, [])

  React.useEffect(() => {
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
  return element;
}

export default App;
