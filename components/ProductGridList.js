import Link from 'next/link'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Card, CardContent, CardMedia, CardActionArea, CardActions, Typography, Button, Slider, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Basket } from '../services/basket'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'flex-start'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 240,
    },
    actions: {
        padding: '0 2rem'
    }
}));

export default function ProductGridList({tileData}) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const basketItems = useSelector(state => state.basket)
    const initialState = Object.assign({}, ...Object.values(basketItems).map(item => ({...{}, [item.id]: item.quantity})))

    const [quantity, setQuantity] = useState(initialState)

    tileData = tileData || []

    const onClick = (e, id) => {
        dispatch(Basket.addToBasket({id, quantity: quantity[id]}))
    }

    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={2}>
            {tileData.map((tile) => (
            <Grid key={tile.id} item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Card>
                        <Link href={`/products/${tile.id}`}>
                            <CardActionArea className={classes.details}>
                                <CardMedia
                                    className={classes.cover}
                                    component="img"
                                    alt={tile.name}
                                    image={tile.img}
                                    title={tile.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {tile.name}
                                    </Typography>
                                    {tile.shortDescription ?
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {tile.shortDescription}
                                        </Typography> : <span></span>
                                    }
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions className={classes.actions}>
                            <Slider
                                defaultValue={0}
                                onChange={(e, value) => setQuantity(quantity => ({...quantity, ...{[tile.id]: value}}))}
                                getAriaValueText={() => quantity[tile.id]}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                value={quantity[tile.id]}
                                step={1}
                                min={0}
                                max={10}
                            />
                            <Button size="small" color="primary" onClick={(e) => onClick(e, tile.id)}>Add to basket</Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
            ))}
        </Grid>
    </div>
    );
}