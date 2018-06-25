import React from 'react';

const Introduction = ({userEmail}) =>
	<div className="intro-text">
	  <p>Welcome {userEmail}! So happy you could join us. This app was created as the final
	  portfolio project for Flatiron's Full-Stack Web Development program. It was
	  created with React/Redux, with a Rails API backend. To check out the project
	  yourself, visit the <a href="https://github.com/dande313/team_collab">Team
	  Collab Repository</a> on Github.</p>
	  <p>The purpose of Team Collaborator is for a team of software developers to
	  report to each other on the work they are doing, as well as flag when they need
	  assistance. To use, you must first sign-up or log in. You can then view all the
	  reports by clicking on "All Reports", or view only the reports flagged for assistance
	  by clicking on "urgent". Admin users differ from normal users, in that they are the
	  only ones able to delete reports.</p>
	  <p>To run locally on your machine, download the project from Github, and navigate to
	  "team_collab_api" in  your console. run the server entering "rails s -p 3001". Then, in
	  a seperate console, navigate to "team_collab_client". Enter "npm install", and then "npm
	  start".</p>
  	</div>
export default Introduction;
