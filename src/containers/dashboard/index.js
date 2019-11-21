import React from 'react';
import './dashboard.scss';
import Basic from '../../components/barchart'
import { Statistic, Card, Row, Col, Icon, List } from 'antd';
import PageHeader from "../../components/page-header";

const todoList = [
	{
		title: 'Check your vegetation image',
	}, {
		title: 'Check your vegetation image',
	}, {
		title: 'Check your vegetation image',
	}, {
		title: 'Check your vegetation image',
	}, {
		title: 'Check your vegetation image',
	},
];

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
								prefix={<Icon type="border-outer"/>}
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
								prefix={<Icon type="dot-chart" />}
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
								prefix={<Icon type="check-circle" />}
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
								prefix={<Icon type="ordered-list" />}
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
							<List
								dataSource={todoList}
								renderItem={(item, idx) => (
									<List.Item key={idx} actions={[<a key="list-loadmore-edit">edit</a>,
										<div onClick={() => this.tickToDoItem(item)}>done</div>]}>
										<List.Item.Meta
											// avatar={<Icon type="bug" theme="twoTone"/>}
											title={<div><Icon type="pushpin" theme="twoTone"/> {item.title}</div>}
										/>
									</List.Item>
								)}
							/>
						</Card>
					</Col>
				</Row>

				<div style={{ height: 40 }}/>
				<Row type="flex" justify="space-around">
					<Col span={11}>
						<Card type="inner" title="Fields NDVI Rank">
							<a href="http://www.indexmundi.com/commodities/?commodity=sugar" target="_blank">
								<img
									style={{ width: '100%' }}
									alt="Sugar - Monthly Price - Commodity Prices - Price Charts, Data, and News - IndexMundi"
									src="http://www.indexmundi.com/commodities/image.aspx?commodity=sugar"/>
							</a>
						</Card>
					</Col>
					<Col span={11}>
						<Card type="inner" title="News">
							<iframe src="https://www.acfa.com.au/blog/" style={{width: '100%', height: 260}}/>
						</Card>
					</Col>
				</Row>
			</div>

		);
	}
}

export default Fertilizer;
