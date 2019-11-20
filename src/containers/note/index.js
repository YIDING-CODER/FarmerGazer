import React from 'react';
import './note.scss';
import Layout from "../../components/layout";

export default class Note extends React.PureComponent {

	render() {
		return (
			<Layout
				sideBarTitle="Note">
				<div className="note">
					note
				</div>
			</Layout>
		);
	}
}
