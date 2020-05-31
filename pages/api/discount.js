import data from './data'

export default (req, res) => {
    console.log('discounts', data.discounts)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data.discounts))
}