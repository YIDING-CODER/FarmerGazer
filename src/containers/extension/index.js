import React from 'react';
import './extension.scss';
import {Card, Row, Col, Skeleton} from 'antd';
import PageHeader from "../../components/page-header";

export default class Extension extends React.PureComponent {

	render() {
		return (
			<div className="extension">
				<PageHeader>Extension</PageHeader>
				<Row type="flex" justify="space-around">
					<Col span={10}>
						<Card
							style={{ marginTop: 16 }}
							type="inner"
							title="Inner Card title"
							extra={<a href="#">More</a>}>
							<Skeleton active/>
						</Card>
					</Col>
					<Col span={10}>
						<Card
							style={{ marginTop: 16 }}
							type="inner"
							title="Inner Card title"
							extra={<a href="#">More</a>}>
							<Skeleton active/>
						</Card>
					</Col>
				</Row>
				<Row type="flex" justify="space-around">
					<Col span={10}>
						<Card
							style={{ marginTop: 16 }}
							type="inner"
							title="Inner Card title"
							extra={<a href="#">More</a>}>
							<Skeleton active/>
						</Card>
					</Col>
					<Col span={10}>
						<Card
							style={{ marginTop: 16 }}
							type="inner"
							title="Inner Card title"
							extra={<a href="#">More</a>}>
							<Skeleton active/>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
