import React from 'react'
import { Box,styled } from '@mui/material'
import Editer from './Editer'

const Container=styled(Box)(`

    display:flex;
    background-color:#060606;
    height:50vh;

`)


export default function Code() {
    return (
        <Container>
            <Editer
                heading={'HTML'}
                icon ={'/'}
                color={'#ff3c41'}
            />
            <Editer
                heading={'CSS'}
                icon={'*'}
                color={'#0ebeff'}
            />
            <Editer
                heading={'JavaScript'}
                icon={'<>'}
                color={'#fcd000'}
            />
        </Container>
    )
}
