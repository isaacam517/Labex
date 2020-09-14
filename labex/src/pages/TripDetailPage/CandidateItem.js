import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'


const CandidateItem = () => {
    return <ListItem>
        <ListItemText primary="Candidato 1"/>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <ThumbUpIcon/>
            </IconButton>
            <IconButton edge="end" aria-label="delete">
                <ThumbDownIcon/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export default CandidateItem