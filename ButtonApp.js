import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  marginTop: 12,
    width: '6%',

};

const ButtonApp = () => (
  <center>
  <div className="row" style={{ marginTop: 20 }}>
    <div className="col-xs end-xs">

	<br />
    <RaisedButton className="col end-xs" label="Edit" secondary={true} style={style} />
	 <br />
	<RaisedButton className="col end-xs"  label="Delete" secondary={true} style={style} />
		 <br />

	<RaisedButton className="col end-xs" label="Add" primary={true} style={style} />
	  <br />
	 <RaisedButton className="col end-xs" label="Submit" primary={true} style={style} />
   <br />
   <RaisedButton className="col end-xs"  label="Print Scheduale" secondary={true} style={style} />

    </div>
  </div>
  </center>


);

export default ButtonApp;
