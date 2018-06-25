import React from 'react';
import Introduction from './Introduction';

const Home = ({userEmail}) =>
	<div className="welcome-note">
	  <br/>
	  <h3>Introduction</h3>
	  <Introduction component={Introduction} userEmail={userEmail} />
  	</div>

export default Home;
