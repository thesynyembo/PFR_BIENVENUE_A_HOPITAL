import React from 'react';
import { Grid } from 'semantic-ui-react';
import SelectIn from '../Contenair/Select';
import styled from 'styled-components';
import Bouton from '../Contenair/Bouton';
import { Link } from 'react-router-dom';
import Header from '../Nav/Header';

const Div = styled.div`
	overflow-x: hidden;
	//overflow-y:scroll;
	height: 600px;
	padding-left: 30px;
	.footer {
		text-align: justify;
	}
`;
const DivB = styled.p`
	width: 100%;
	border-bottom-style: dotted;
`;

const MapRight = () => (
	<Div>
		<Grid columns={1}>
			<Grid.Row>
				<Grid.Column style={{ backgroundColor: '#FBF6F6' }}>
					<Header />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column>
					<br />
					<Link to="/DetailList">
						<Bouton />
					</Link>
					<br />

					<SelectIn />
					<br />
					<br />
					<br />
					<br />
				</Grid.Column>
				<DivB />
				<br />
				<br />
				<br />
			</Grid.Row>

			<Grid.Row>
				<Grid.Column>
					<h6 className="footer">Apropos</h6>
					<h6 className="footer">
						Copyright @2020<br />Créer par Thesy Nyembo
					</h6>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Div>
);

export default MapRight;
