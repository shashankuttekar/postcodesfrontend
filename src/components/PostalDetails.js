import { Card, Col, Row } from "react-bootstrap";

//This function show the details for postcode selected from lookup.
export default function PostalDetails(props) {
  const { postalData } = props;
  const marginTop = { marginTop: "10px" };
  if (!postalData) {
    return null;
  }
  return (
    <div className="container-fluid" style={{marginTop: "10px", paddingLeft:"0"}}>
          <Row>
              <Col>
                  <Card>
                      <Card.Body>
                          <Card.Title> Country </Card.Title>
                          <Card.Text>
                              {  postalData.country}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card>
                      <Card.Body>
                          <Card.Title> Region </Card.Title>
                          <Card.Text>
                              {  postalData.region || "Not Found"}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          
         
          <Row style={marginTop}>
              <Col>
                  <Card>
                      <Card.Body>
                          <Card.Title> Admin District </Card.Title>
                          <Card.Text>
                              {  postalData.admin_district}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card>
                      <Card.Body>
                          <Card.Title> Parliamentary Constituency </Card.Title>
                          <Card.Text>
                              {  postalData.parliamentary_constituency}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
         
          <Row style={marginTop}>
              <Col>
                  <Card>
                      <Card.Body>
                          <Card.Title> Area </Card.Title>
                          <Card.Text>
                              {  postalData.area}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </div>
  );
}