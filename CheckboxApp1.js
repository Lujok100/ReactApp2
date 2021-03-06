import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxApp1 extends React.Component {
  state(){
    checked: false;
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
	
      <div style={{display:'flex'}}>
        <Checkbox
          label="MON"
          style={{width:'auto'}}
        />
        <Checkbox
          label="TUE"
          style={{width:'auto'}}
        />
		
		<Checkbox
          label="WED"
          style={{width:'auto'}}
        />
		
		<Checkbox
          label="THUS"
          style={{width:'auto'}}
        />
		
		<Checkbox
          label="FRI"
          style={{width:'auto'}}
        />
        
      </div>
    );
  }
}
export default CheckboxApp1;