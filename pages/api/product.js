// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        { 
            productId: 0,
            name: 'Apples',
            price: 1.0,
            currency: 'USD'
        },
        { 
            productId: 0,
            name: 'Soup',
            price: 0.65,
            currency: 'USD'
        },
        { 
            productId: 0,
            name: 'Bread',
            price: 0.8,
            currency: 'USD'
        },
        { 
            productId: 0,
            name: 'Milk',
            price: 1.3,
            currency: 'USD'
        },
    ]))
  }