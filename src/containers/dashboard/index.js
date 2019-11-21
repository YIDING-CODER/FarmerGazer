import React from 'react';
import './dashboard.scss';
import Basic from '../../components/barchart'
import { Statistic, Card, Row, Col, Icon } from 'antd';
import { connect } from "react-redux";
import { setMenuCollapsed } from "../../redux/setting";

@connect(state => ({ setting: state.setting }), { setMenuCollapsed })
class Fertilizer extends React.PureComponent {


	render() {
		const { setting } = this.props;
		return (

			<div className="dashboard">

				<div className="dashboard__title-container">
					<Icon type={setting.menuCollapsed ? 'menu-unfold' : 'menu-fold'}
					      className="side-bar__icon"
					      onClick={() => {
						      this.props.setMenuCollapsed(!setting.menuCollapsed)
					      }}/>
					<h1 className="dashboard__title">Dashboard</h1>
				</div>
				<Row type="flex" justify="space-around">
					<Col span={5}>
						<Card>
							<Statistic
								title="# Fields"
								value={11.28}
								precision={2}
								valueStyle={{ color: '#3f8600' }}
								prefix={<Icon type="barcode"/>}
								suffix="%"
							/>
						</Card>
					</Col>
					<Col span={5}>
						<Card>
							<Statistic
								title="Total Fields Size"
								value={9.3}
								precision={2}
								prefix={<Icon type="arrow-down"/>}
								suffix="Ha"
							/>
						</Card>
					</Col>
					<Col span={5}>
						<Card>
							<Statistic
								title="Ready for harvest"
								value={9.3}
								precision={2}
								valueStyle={{ color: '#cf1322' }}
								prefix={<Icon type="arrow-down"/>}
								suffix="%"
							/>
						</Card>
					</Col>
					<Col span={5}>
						<Card>
							<Statistic
								title="To do Items"
								value={9.3}
								precision={2}
								valueStyle={{ color: '#cf1322' }}
								prefix={<Icon type="arrow-down"/>}
								suffix="%"
							/>
						</Card>
					</Col>
				</Row>
				<br/>
				<Row type="flex" justify="space-around">
					<Col span={11}>
						<Card type="inner" title="Fields NDVI Rank">
							<Basic/>
						</Card>
					</Col>
					<Col span={11}>
						<Card type="inner" title="Action List">
							<Basic/>
						</Card>
					</Col>

				</Row>

			</div>

		);
	}
}

export default Fertilizer;
