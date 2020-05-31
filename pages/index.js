import ProductGridList from '../components/ProductGridList'
import Default from '../layouts/Default'
import useSwr from 'swr'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetcher } from '../services'
import { Product } from '../services/product'

const Products = () => {
    const { data } = useSwr(`/api/product`, fetcher)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Product.storeProducts(data))
    })

    return (
        <React.Fragment>
            <ProductGridList 
                tileData={data}
            />
        </React.Fragment> 
    )
}

Products.Layout = Default

export default Products