import { Typography, Button, } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import ReviewItemCard from '../ReviewItemCard/ReviewItemCard';
import serverLocation from './../../../../ServerLocation/serverlocation';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import model from '../../../../images/designpics/model.png'
import glamourbackground from '../../../../images/designpics/glamourbackground.jpg'
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


                <Typography
                    sx={{ 
                        fontFamily: 'Passions Conflict, cursive' ,
                    fontSize: { xs: '2.5rem', md:'6rem' }

                }}
                    variant='h1'>
                    What our Customers Say About Us
                </Typography>
            </Box>

            <Box
                sx={{
                    overflow: 'hidden',
                    height: '100%',
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'end' },
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >


                <Box sx={{
                    my: { xs: 0, md: 4 },
                    height: 320,
                    display: 'flex',
                    border: 5,
                    borderColor: 'black',
                    borderRadius: '5px',

                }}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            height: 320,

                        }}
                    >

                        <Button
                            sx={{
                                backgroundColor: 'lightgray',
                                opacity: .5,
                                display: { xs: 'none', sm: 'block' }
                            }}
                            onClick={deCrease}><ArrowBackIosNewIcon /></Button >

                        <SwipeableViews
                            axis='x'
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
                                opacity: .5,
                                display: { xs: 'none', sm: 'block' }
                            }}
                            onClick={inCrease}><ArrowForwardIosIcon /></Button >

                    </Box>


                </Box>


                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '50%' },
                    height: 400,
                    backgroundImage: `url(${glamourbackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: { xs: '100% 400px', md: '50% 400px' },
                    backgroundPosition: 'right',

                }}>

                    <img
                        className="glampic"
                        style={{
                            objectFit: 'cover',
                            borderColor: 'red',
                            borderWidth: '15px',
                            borderStyle: 'solid',
                            backgroundColor: 'black',
                            transform: 'rotate(5deg)'
                        }}
                        src={model} alt="" />

                </Box>




            </Box>
        </>
    )
}

export default ReviewShowTotal
