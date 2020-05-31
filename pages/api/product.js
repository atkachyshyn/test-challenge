// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data'

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data.products))
}