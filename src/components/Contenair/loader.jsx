import React from 'react';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';

const DivLoad = styled.div`
  margin-top:30%;
  
  }
`;

export default function Loading() {
	return (
		<DivLoad>
			<Loader active inline="centered" />
		</DivLoad>
	);
}
