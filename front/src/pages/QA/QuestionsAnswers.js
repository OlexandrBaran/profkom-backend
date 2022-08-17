import { useContext } from "react";
import { Accordion, Col, ListGroup,  ListGroupItem, Row} from "react-bootstrap";
import { Context } from "../..";
import SideBar from "../../components/Sidebar/Sidebar";
import SidebarContent from "../../components/SidebarContent/SidebarContent";
import QuestionAnswerCard from "./QuestionAnswerCard";


const QuestionsAnswers = () => {
    const {questAndAnsws} = useContext(Context)

    const qaData = []

    const isCategoryPresent = (array, category) => {
        return array.some( item => {
            return item.titleUA === category
        })
    }
    const categories = [...new Set(questAndAnsws.questionAnswers)];


    return(
        <div>
            <Row><h1 className="text-center">Питання-відповіді</h1></Row>
           <Row>
            <Col md={3}><h1 className="text-center">Категорії</h1></Col>
            <Col md={9}>
                <Accordion className="m-5">
                 {questAndAnsws.questionAnswers.map(item => {
                    return(
                        
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header>{item.titleUA}</Accordion.Header>
                            <Accordion.Body>
                                    {item.descriptionUA}
                            </Accordion.Body>
                        </Accordion.Item>
                    
                    )
                 })}</Accordion>
            </Col>
           </Row>
        </div>
    );
}

export default QuestionsAnswers;