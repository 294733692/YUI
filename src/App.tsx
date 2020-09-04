import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMnue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {
          alert(index)
        }}>
          <MenuItem>
            cool link 0
          </MenuItem>
          <MenuItem disabled>
            cool link 1
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown link 0
            </MenuItem>
            <MenuItem>
              dropdown link 1
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 2
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
