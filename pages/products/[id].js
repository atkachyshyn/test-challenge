import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import useSwr from 'swr'
import { fetcher } from '../../services'
import Default from '../../layouts/Default'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        minWidth: 540,
        minHeight: 540
    },
    action: {
        justifyContent: 'flex-end'
    },
  });

const Product = () => {
    const classes = useStyles()

    const router = useRouter()
    const { data, error } = useSwr(`/api/product/${router.query.id}`, fetcher)
  
    if (error) return <div>Failed to load product</div>
    if (!data) return <div>Loading...</div>
  
    return <Paper>
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={data.img}
                title={data.name}
            />
            <div className={classes.details}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                    <Link href='/'>
                        <Button size="small">Back to product list</Button>
                    </Link>
                </CardActions>
            </div>
        </Card>
    </Paper>
}

Product.Layout = Default

export default Product