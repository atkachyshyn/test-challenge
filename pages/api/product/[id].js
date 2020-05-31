import data from '../data'

export default (req, res) => {
    const {
      query: { id },
      method,
    } = req
    const { products } = data 
  
    switch (method) {
      case 'GET':
        // Get data from your database
        const product = products.filter(item => item.id == id)[0]

        res.status(200).json(product)
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }