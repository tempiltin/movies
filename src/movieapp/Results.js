import React from 'react'
import Result from './Result';
import { Container, Row, Col } from 'reactstrap';

function Results ({ results }) {
	return (
        <Container>
            <Row>
                {results.map(result => (
                    <Col md="4">
                        <Result key={result.imdbID} result={result} />
                    </Col>
                ))}
            </Row>
        </Container>
	)
}

export default Results