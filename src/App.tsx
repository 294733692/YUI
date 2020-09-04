import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} mode='vertical' onSelect={(index) => {
          alert(index)
        }}>
          <MenuItem index={0}>
            cool link 0
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link 1
          </MenuItem>
          <MenuItem index={2}>
            cool link 2
          </MenuItem>
        </Menu>

        <Button className="userClass" onClick={(e) => {
          e.preventDefault()
        }}>hello world</Button>
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
