import { Typography, Button, Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import ReviewItemCard from '../ReviewItemCard/ReviewItemCard';
import serverLocation from './../../../../ServerLocation/serverlocation';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import model from '../../../../images/designpics/model.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{}}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const ReviewShowTotal = () => {

    const [fewReviews, setFewReviews] = useState([])

    useEffect(() => {

        fetch(`${serverLocation}review?limit=6`)
            .then(res => res.json())
            .then(result => {
                setFewReviews(result)
            })

    }, [])

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const itemCount = fewReviews.length

    const deCrease = () => {
        if (value > 0) {
            setValue(value - 1);
        } else {
            setValue(itemCount - 1)
        }
    };
    const inCrease = () => {
        if (value + 1 < itemCount) {
            setValue(value + 1)
        } else {
            setValue(0)
        }
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                    color: 'white',
                    py: 5,
                    mt: 4
                }}
            >


                <Typography variant='h3' gutterBottom>
                    What our Customers Say About Us
                </Typography>
            </Box>

            <Box
                sx={{
                    overflow: 'hidden',
                    height: '100%',
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: 'end',
                    flexWrap: 'wrap'
                }}
            >


                <Box sx={{
                    my: 4,
                    height: 320,
                    display: 'flex',
                    justifyContent: 'end'
                }}>

                    <Box
                        sx={{
                            display: 'flex',
                            height: 320,

                        }}
                    >

                        <Button
                            sx={{
                                backgroundColor: 'lightgray',
                                opacity: .5
                            }}
                            onClick={deCrease}><ArrowBackIosNewIcon /></Button >

                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            {
                                fewReviews.map((reviewedItem, ind) =>
                                    <TabPanel value={value} index={ind} dir={theme.direction}>
                                        <ReviewItemCard key={reviewedItem._id} reviewedItem={reviewedItem}>

                                        </ReviewItemCard>
                                    </TabPanel>
                                )
                            }
                        </SwipeableViews>
                        <Button
                            sx={{
                                backgroundColor: 'lightgray',
                                opacity: .5
                            }}
                            onClick={inCrease}><ArrowForwardIosIcon /></Button >

                    </Box>


                </Box>


                <Box sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    width: '50%',
                    height: 400,
                    backgroundColor: 'black'
                }}>

                    <img
                        style={{
                            objectFit: 'stretch'
                        }}
                        src={model} alt="" />

                </Box>




            </Box>
        </>
    )
}

export default ReviewShowTotal
