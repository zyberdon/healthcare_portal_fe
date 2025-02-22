import React, { useEffect, useState } from "react";
import { endpoints } from "../constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage } from "../actions";
import classes from './Home.module.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
  // const dispatch = useDispatch();

  // const { homepage } = useSelector((state) => state.dataReducer);
  let homepage = {
    title: 'Latest Health Updaes',
    content: [{
      title: 'ABCD COVID',
      subHeading: 'Subheading Subheading Subheading Subheading',
      readmore: 'Subheading vvvSubheadingSubheadingv SubheadingSubheadingv SubheadingSubheadingSubheading Subheadingv'
    },
    {
      title: 'ABCD COVID',
      subHeading: 'Subheading Subheading Subheading Subheading',
      readmore: 'Subheading vvvSubheadingSubheadingv SubheadingSubheadingv SubheadingSubheadingSubheading Subheadingv'
    },
    {
      title: 'ABCD COVID',
      subHeading: 'Subheading Subheading Subheading Subheading',
      readmore: 'Subheading vvvSubheadingSubheadingv SubheadingSubheadingv SubheadingSubheadingSubheading Subheadingv'
    }, {
      title: 'ABCD COVID',
      subHeading: 'Subheading Subheading Subheading Subheading',
      readmore: 'Subheading vvvSubheadingSubheadingv SubheadingSubheadingv SubheadingSubheadingSubheading Subheadingv'
    }]
  }
  const [homedata, setHomedata] = useState(homepage)

  // const homereq = {
  //   url: endpoints.HOMEPAGE,
  //   method: 'GET'
  // }

  // useEffect(() => {
  //   dispatch(fetchHomepage({ url: endpoints.HOMEPAGE })); // Trigger API call when component mounts
  // }, [dispatch]);


  // useEffect(() => {
  //   setHomedata(homepage)
  // }, [homepage]);

  function readmoreClick(id) {
    const data = homedata.content[id];
    const data1 = { ...data };
    data1.subHeading = data1.readmore
    data1.readmore = ''
    const homedatacopy = { ...homedata }
    homedatacopy.content[id] = data1
    setHomedata({
      ...homedatacopy,
    })

  }

  return (
    <div className={classes.padding}>
      <Typography variant="h4" component="div">
        {homedata?.title}
      </Typography>
      {homedata?.content?.map((item, i) => {
        return (
          <div className={classes.padding} key={i}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.subHeading}
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

export default Home;
