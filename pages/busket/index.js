import { Paper, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, TableFooter, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { fetcher } from '../../services'
import { applicableDiscountRules } from '../../services/busket'
import useSwr from 'swr'
import Default from '../../layouts/Default'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ccyFormat = num => {
    return `${num.toFixed(2)}`;
}

const getDiscount = (discount, product, quantity) => {
    if (!discount) return 0
    else {
        const applicableQuantity = discount.maxTimes && quantity > discount.maxTimes ? discount.maxTimes : quantity

        return discount.isPercent ? 
            product.price * discount.value * applicableQuantity 
            : discount.value * applicableQuantity
    }
}

const Busket = () => {
    const { data: discountData } = useSwr('/api/discount', fetcher)
    const { data: volumeDiscountData } = useSwr('/api/volume-discount', fetcher)

    const classes = useStyles()

    const busketItems = useSelector(state => state.busket)
    const products = Object.values(useSelector(state => state.product))

    const discountRules = applicableDiscountRules(discountData, volumeDiscountData, Object.values(busketItems))

    let subTotal = 0
    let totalDiscount = 0

    const rows = Object.keys(busketItems).map((productId, index) => {
        const { quantity } = busketItems[productId]
        const product = products.filter(({id}) => id == productId)[0]
        const discountRule = discountRules.filter(discountRule => discountRule.productId == productId)[0]

        subTotal += quantity * product.price
        const discount = getDiscount(discountRule, product, quantity)
        totalDiscount += discount

        return {
            index, 
            name: product.name,
            quantity: quantity,
            unitPrice: product.price,
            discount: discount,
            price: product.price * quantity - discount,
        }
    })

    return (
        <React.Fragment>
            {rows && rows.length ?
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Unit price</TableCell>
                            <TableCell align="right">Discount</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.index}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{ccyFormat(row.unitPrice)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.discount)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell rowSpan={3} colSpan={3}/>
                            <TableCell colSpan={1}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(subTotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}>Discount</TableCell>
                            <TableCell align="right">- {ccyFormat(totalDiscount)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(subTotal - totalDiscount)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer> 
            : <Typography>Your busket is empty.</Typography>
        }</React.Fragment>
    )
}

Busket.Layout = Default

export default Busket
