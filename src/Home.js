import React from 'react';
import { Row, Col } from 'antd';
import AppointmentDetails from './booking/AppointmentDetails';

export default function Home(props) {
  return (
    <div>
      <img
        alt="clinic"
        width="100%"
        src="./images/steth-sm.jpg"
        srcSet="./images/steth-sm.jpg 775w,./images/steth-md.jpg 1550w, ./images/steth-lg.jpg 3100w"
        sizes="100vw"
      />
      <Row type="flex" justify="center">
        <Col sm={{span: 12, offset: 0}} xs={{span: 20, offset: 1}}>
          <AppointmentDetails setAppDetails={props.setAppDetails}/>
        </Col>
      </Row>
    </div>
  );
}