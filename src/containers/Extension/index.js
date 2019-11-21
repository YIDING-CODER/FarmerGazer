import React from 'react';
import './extension.scss';
import Layout from "../../components/layout";

export default class Note extends React.PureComponent {

	render() {
		return (
			<Layout
				sideBarTitle="Extension">
				<div className="extension">
					note
				</div>
			</Layout>
		);
	}
}
