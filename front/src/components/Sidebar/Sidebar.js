import { useState } from "react"
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

const SidebarItem = styled.div`
    color:#F4F5FB;
    cursor:pointer;
    text-align:left;
    font-size:1.5rem; 
    padding-left:2rem;

    &:hover{
        color:white;
        border: 0.5px solid grey;
    }

    @media (max-width: 1180px) {
        padding-top:0.25rem;
        text-align:center;
        &:hover{
            border: none;
        }
        
    }

`

const SidebarContent = styled.div`
    width:25%;
    .active {
        border: 1px solid grey;
    }

    @media (max-width: 1180px) {
        width:100%;
    }
`


const SideBar = ({sidebarItems, changeContent}) => {

    const {t} = useTranslation()
    const [selectedItemID, setSelectedItemId] = useState(1)
    
    return(
        <SidebarContent >
                {sidebarItems.map(({id, title, content}) => {
                      return (
                            <SidebarItem 
                                className={(selectedItemID === id) ? 'active' : null}
                                key={id}
                                onClick={() => {
                                    setSelectedItemId(id)
                                    changeContent(content)
                                }}
                            >
                                {t(`${title}`)}
                            </SidebarItem>
                        )
                    }
                )}
           
        </SidebarContent>
        )
}

export default SideBar
