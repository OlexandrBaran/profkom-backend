import { Col, ListGroup, ListGroupItem } from "react-bootstrap"
import cookie from 'js-cookie'
import { useState } from "react"


const SideBar = ({sidebarItems, changeContent}) => {
    const [selectedItemID, setSelectedItemId] = useState(1)


    const currenLanguageCode = cookie.get('i18next') || 'ua'
    return(
        <Col md={3}>
            <ListGroup>
                {sidebarItems.map(({id, titleUA, titleEN, content}) => {
                    return (
                        <ListGroupItem 
                        style={{cursor:'pointer'}}
                        active={selectedItemID === id}
                        key={id}
                        onClick={() => {
                            setSelectedItemId(id)
                            changeContent(content)
                        }}
                        >
                            {(currenLanguageCode === 'ua' ? titleUA : titleEN)}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </Col>
        )
}

export default SideBar
