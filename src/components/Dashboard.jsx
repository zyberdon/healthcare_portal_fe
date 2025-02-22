import React, { useEffect } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { endpoints } from "../constants/endpoints";
import { postDashboard } from "../actions";
import classes from './Home.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Dashboard() {

    const dispatch = useDispatch();

    const { dashboard } = useSelector((state) => state.dataReducer);
    const dash = {
        url: endpoints.DASHBOARD,
        reqBody: {
            method: 'GET'
        }
    }

    useEffect(() => {
        dispatch(postDashboard(dash)); // Trigger API call when component mounts
    }, [dispatch]);


    return (
        <div className={classes.padding}>
            <Typography variant="h4" component="div">
                {dashboard && dashboard.length && dashboard[0].content.title}
            </Typography>
            {dashboard && dashboard.length && dashboard[0].content.map((item, i) => {
                return (
                    <div className={`${classes.padding} ${classes.wid}`} key={i}>
                        <Card variant="outlined" >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2">
                                    {item.value}
                                </Typography>
                                <Typography variant="body2">
                                    {item.percentage}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {item.readmore && <Button size="small" onClick={() => readmoreClick(i)}>Read More</Button>}
                            </CardActions>
                        </Card></div>)
            })}
        </div>
    );
}

export default Dashboard;


// create a page for user profile using mui with - side drawer having route options for different pages, name of user at top , and page will have some information with cards