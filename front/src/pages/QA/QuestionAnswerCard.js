import Accordion from 'react-bootstrap/Accordion';


const QuestionAnswerCard = (id, titleUA, descriptionUA) => {
    return(
        <Accordion>
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{titleUA}</Accordion.Header>
                <Accordion.Body>
                        {descriptionUA}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default QuestionAnswerCard