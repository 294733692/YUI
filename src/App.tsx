import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="userClass" onClick={(e) => {e.preventDefault()}}>hello world</Button>
        <Button btnType={ButtonType.Primary} disabled>disabled Primary</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello world</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} disabled>Disabled Link</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} target='_blank' href='https://www.baidu.com'>Baidu
          Link</Button>
      </header>
    </div>
  );
}

export default App;
