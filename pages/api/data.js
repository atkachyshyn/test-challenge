const products = [
    { 
        id: 0,
        name: 'Apples',
        shortDescription: 'Fresh apples',
        description: `Apples are the ideal fruit to eat at any time, having a positive role in the achievement of 
nourish balance. Their skin may be green, yellow or reddish, and the meat taste ranges from a bitter to sweet flavour.
It is one of the most consumed fruit in the world. There is a great amount of varieties; thanks to that, 
apples are available all the year round.`,
        price: 1.0,
        currency: 'USD',
        img: '/images/apples.jpg'
    },
    { 
        id: 1,
        name: 'Soup',
        shortDescription: 'Tasty sea soup',
        description: `This delicious soup has only half the cholesterol, 
a fourth of the fat and half the calories of the original recipe from Mildred Fasig of Stephens City, Virginia. 
Best of all, our entire taste panel agreed that this makeover has an even richer and creamier texture and taste!`,
        price: 0.65,
        currency: 'USD',
        img: '/images/soup.jpg'
    },
    { 
        id: 2,
        name: 'Bread',
        shortDescription: 'Crunchy bread',
        description: `The heavenly smell and fresh out-of-the-oven taste of this old-fashioned loaf will make you want 
to eat it on the drive home! Makes the perfect peanut butter & jelly or grilled cheese sammy.`,
        price: 0.8,
        currency: 'USD',
        img: '/images/bread.jpg'
    },
    { 
        id: 3,
        name: 'Milk',
        shortDescription: 'Delicious milk',
        description: `A whitish liquid containing proteins, fats, lactose, and various vitamins and minerals 
that is produced by the mammary glands of all mature female mammals after they have given birth and serves as 
nourishment for their young. The milk of cows, goats, or other animals, used as food by humans.`,
        price: 1.3,
        currency: 'USD',
        img: '/images/milk.jpg'
    },
]

const volumeDiscounts = [
    {
        id: 0,
        sourceProductId: 1,
        quantity: 2,
        destinationProductId: 2,
        value: 0.5,
        isPercent: true
    }
]

const discounts = [
    {
        id: 0,
        productId: 0,
        dateFrom: new Date(),
        dateTo: new Date() + 7,
        value: 0.1,
        isPercent: true
    }
]

export default {
    products,
    volumeDiscounts,
    discounts
}

