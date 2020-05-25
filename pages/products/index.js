import ProductGridList from '../../components/ProductGridList'
import Default from '../../layouts/Default'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Products = () => {
    const { data } = useSwr(`/api/product`, fetcher)

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
