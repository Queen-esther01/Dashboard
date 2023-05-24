import CardGraph1 from '../../assets/images/card-graph-1.svg'
import CardGraph2 from '../../assets/images/card-graph-2.svg'
import CardGraph3 from '../../assets/images/card-graph-3.svg'

export const data = [
    {
        date: '20 Aug',
        purchase: 1000
    },
    {
        date: '21 Aug',
        purchase: 700
    },
    {
        date: '22 Aug',
        purchase: 1500
    },
    {
        date: '23 Aug',
        purchase: 800
    },
    {
        date: '24 Aug',
        purchase: 1500
    },
    {
        date: '25 Aug',
        purchase: 700
    },
];


export const salesOverview = [
    {
        date: null,
        total: 1652.50,
        chart: null,
        period: "Today's sales",
        theme: 'light'
    },
    {
        date: '24 Aug - 01 Sep 21',
        total: 1652.50,
        chart: CardGraph1,
        period: "This week",
        theme: 'dark'
    },
    {
        date: '24 Aug - 01 Sep 21',
        total: 1652.50,
        chart: CardGraph2,
        period: "This month",
        theme: 'light'
    },
    {
        date: '24 Aug - 01 Sep 21',
        total: 1652.50,
        chart: CardGraph3,
        period: "Last month",
        theme: 'light'
    },
]
