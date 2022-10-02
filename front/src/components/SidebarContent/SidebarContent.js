import { useContext, useState } from "react";
import SideBar from "../Sidebar/Sidebar";
import styled from 'styled-components'
import { Context } from "../..";
import { observer } from "mobx-react-lite";
const Container = styled.div`
   display:flex;
   width:100%;
    
   @media (max-width: 1180px) {

    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
   
`
const Content = styled.div`
    width:100%
   
`

const SidebarContent = observer(({data}) => {
    const {appTheme} = useContext(Context)
    const [secectedContent, SetSelectedContent] = useState(data[0].content)

    return(
        <Container style={{backgroundColor:appTheme.themeVariant.sideBarColor}}>
                <SideBar 
                    sidebarItems={data} 
                    changeContent={content => SetSelectedContent(content)}
                />
                <Content md={9} className='content' style={{backgroundColor:appTheme.themeVariant.mainColor}}>
                    {secectedContent}
                </Content>
        </Container>
    );
})

export default SidebarContent;