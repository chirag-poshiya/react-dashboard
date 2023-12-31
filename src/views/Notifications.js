
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  
  CardTitle,
  Col,
  CardBody,
  Alert,
  Row,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      message: (
        <div>
          <div>
            Welcome to <b>My Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      place: place,
      autoDismiss: 7,
      icon: "ch-icons icon-bell-55",
      type: type,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} alertMessage="Test Message" />
        </div>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info" typeM="info">
                  <span>This is a plain notification with color Props</span>
                </Alert>
                <UncontrolledAlert color="info" autoClose="false">
                  <span>This is a notification with close button and props color</span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info" typeM="info">
                  <span className="ch-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon.  
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info" typeM="info">
                  <span className="ch-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states </CardTitle>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert color="primary">
                  <span>
                    <b>Primary - </b>
                    This is a regular notification made with ".alert-primary"
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span>
                    <b>Info - </b>
                    This is a regular notification made with ".alert-info"
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="success">
                  <span>
                    <b>Success - </b>
                    This is a regular notification made with ".alert-success"
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning">
                  <span>
                    <b>Warning - </b>
                    This is a regular notification made with ".alert-warning"
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="danger" typeM="danger">
                  <span>
                    <b>Danger - </b>
                    This is a regular notification made with ".alert-danger"  from props
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click here to view notifications </p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            color="primary"
                            onClick={
                              () => notify("tl")
                            }
                            block
                            typeM="primary"
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            color="primary"
                            block
                            typeM="primary"
                            onClick={
                              () => notify("tc")
                            }
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            color="primary"
                            typeM="primary"
                            block
                            onClick={
                              () => notify("tr")
                            }
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            color="primary"
                            block
                            typeM="primary"
                            onClick={
                              () => notify("bl")
                            }
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            typeM="primary"
                            color="primary"
                            block
                            onClick={
                              () => notify("bc")
                            }
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            color="primary"
                            block
                            typeM="primary"
                            onClick={
                              () => notify("br")
                            }
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
