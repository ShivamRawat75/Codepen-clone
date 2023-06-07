import React from 'react'
import { Box,styled } from '@mui/material'
import Editer from './Editer'

import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Container=styled(Box)(`

    display:flex;
    background-color:#060606;
    height:50vh;

`)


export default function Code() {

const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);


    return (
        <Container>
            <Editer
                heading={'HTML'}
                icon ={'/'}
                color={'#ff3c41'}
                value={html}
                onChange={setHtml}
            />
            <Editer
                heading={'CSS'}
                icon={'*'}
                color={'#0ebeff'}
                value={css}
                onChange={setCss}
            />
            <Editer
                heading={'JavaScript'}
                icon={'<>'}
                color={'#fcd000'}
                value={js}
                onChange={setJs}
            />
        </Container>
    )
}
