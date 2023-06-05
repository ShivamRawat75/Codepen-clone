import React from 'react'
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Heading = styled(Box)(
    `
    background:#1d1e22;
    display:flex;
    color:white;
    padding: 9px 12px;
    `
)

const Header = styled(Box)(`

    display:flex;
    background:#060606;
    color:#AAAEBC;
    justify-content:space-between;
    font-weight:700;
`)

export default function Editer() {
    return (
        <Box>
            <Header>
                <Heading>

                    <Box component="span"
                        style={{
                            background: 'red',
                            display: 'flex',
                            width: 20,
                            height: 20,
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2

                        }}
                    >

                        /</Box>HTML

                </Heading>

                <CloseFullscreenIcon />

            </Header>

            <Box>


            </Box>

        </Box>

    )
}
