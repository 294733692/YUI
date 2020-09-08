import React from 'react';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMnue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={(index) => {
          alert(index)
        }}>
          <MenuItem index='0'>
            cool link 0
          </MenuItem>
          <MenuItem disabled index='1'>
            cool link 1
          </MenuItem>
          <SubMenu title='dropdown' index='2'>
            <MenuItem index='2-1'>
              dropdown link 0
            </MenuItem>
            <MenuItem index='2-2'>
              dropdown link 1
            </MenuItem>
          </SubMenu>
          <MenuItem index='3'>
            cool link 2
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
