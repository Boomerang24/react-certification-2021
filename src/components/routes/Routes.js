import React from 'react'
import { Redirect } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { Grid } from '../Grid/Grid'
import {PlayerGrid} from '../VideoPlayerGrid/PlayerGrid'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Grid} />
            <Route path="/:videoID" exact component={PlayerGrid} />
            <Redirect to="/"/>
        </Switch>
    )
}
