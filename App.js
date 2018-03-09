import React from 'react';
import ReactDOM from 'react-dom'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ButtonApp from './ButtonApp'
import CheckboxApp1 from './CheckboxApp1'
import TextFieldApp from './TextFieldApp'

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
class App extends React.Component {
  render(){
	  return(
		<div>

			<CheckboxApp1 />
			<TextFieldApp / >
			<ButtonApp / >
			
		</div>
   );
 }

}
export default App;