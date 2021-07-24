import React from "react";
import logo from '../../assets/logo.svg';
import { RotatedLogo, AppDiv, AppHeader, AppLink} from './styles';

function Placeholder() {
  return (
    <AppDiv>
      <AppHeader>
        <RotatedLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppDiv>
  );
}

export default Placeholder;
