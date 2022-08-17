import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import SideBar from "../Sidebar/Sidebar";



const SidebarContent = ({data}) => {
    const [secectedContent, SetSelectedContent] = useState(data[0].content)
    return(
        <Container>
            <Row className="m-2">
                <SideBar 
                    sidebarItems={data} 
                    changeContent={content => SetSelectedContent(content)}
                />
                <Col md={9} >
                    {secectedContent}
                </Col>
            </Row>
        </Container>
    );
}

export default SidebarContent;