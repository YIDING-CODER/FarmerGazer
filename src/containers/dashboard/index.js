import React from 'react';
import './dashboard.scss';
import Basic from '../../components/barchart'
import { Statistic, Card, Row, Col, Icon } from 'antd';
import PageHeader from "../../components/page-header";

class Fertilizer extends React.PureComponent {

	render() {
		return (
			<div className="dashboard">
				<PageHeader>Dashboard</PageHeader>
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
