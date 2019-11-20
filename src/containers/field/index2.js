import React from 'react';
import './field.scss';
import Layout from "../../components/layout";
import { Button, Icon } from "antd";


import { Progress } from 'antd';
import harvestPro from '../../data.json';
const percent = harvestPro;
export default class Field extends React.PureComponent {


	_renderSideBarContent = () => {
		return (
			<div className="field__sidebar">
				<div className="field__sidebar-body">

					<div>
						<a href="#" className="field__sidebar-soil-fields-list-item">
							<div className="field__sidebar-soil-fields-list-pic" style={{backgroundImage: `url(${"favicon.ico"})`, Height:48,width:48}}></div>
							<div className="field__sidebar-soil-fields-list-content">
								<h2 className="field__sidebar-soil-fields-list-header">2. Field, 0.2&nbsp;ha</h2>
								<div style={{ width: 100 }}>
									<Progress percent={percent.harvestPro.percentage} size="small" format={(percent) => `Harvest in ${percent*200/100} days`}/>
								</div>
							</div>
						</a>
					</div>
					<div>
						<a href="#" className="field__sidebar-soil-fields-list-item">
							<div className="field__sidebar-soil-fields-list-pic" style={{backgroundImage: `url(${"favicon.ico"})`, Height:48,width:48}}></div>
							<div className="field__sidebar-soil-fields-list-content">
								<h2 className="field__sidebar-soil-fields-list-header">2. Field, 0.2&nbsp;ha</h2>

								<div className="field__sidebar-soil-fields-list-meta" >
									<div className="field__sidebar-soil-fields-list-progrss"  style={{ width: 100 }}>
										<Progress percent={percent.harvestPro.percentage} size="small" />
									</div>
									<div className="field__sidebar-soil-fields-list-ndvi">0.63</div>
								</div>
								{/*<div className="field__sidebar-soil-fields-list-ndvi">0.63</div>*/}
							</div>
						</a>
					</div>
					<div>
						<a href="#" className="field__sidebar-soil-fields-list-item">
							<div className="field__sidebar-soil-fields-list-pic" style={{backgroundImage: `url(${"favicon.ico"})`, Height:48,width:48}}></div>
							<div className="field__sidebar-soil-fields-list-content">
								<h2 className="field__sidebar-soil-fields-list-header">2. Field, 0.2&nbsp;ha</h2>



							</div>
							<div className="field__sidebar-soil-fields-list-pic2">
								<div >
									<Progress width={60} type="circle" percent={percent.harvestPro.percentage} size="small" format={percent => <span>{percent}<br/>Days</span>} />
								</div>

							</div>
						</a>
					</div>
				</div>
				<div className="field__sidebar-footer">
					<Button
						block
						size="large"
						type="primary">
						<Icon type="plus"/>Add Fields
					</Button>
				</div>
			</div>
		);
	};

	render() {
		return (
			<Layout
				sideBarTitle="Field"
				sideBarComponent={this._renderSideBarContent()}>
				<div className="field">
					field
				</div>
			</Layout>
		);
	}
}
