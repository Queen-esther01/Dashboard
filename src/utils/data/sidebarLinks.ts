import Piechart from '../../assets/icons/pie-chart.svg'
import PiechartActive from '../../assets/icons/pie-chart-active.svg'
import Wallet from '../../assets/icons/wallet.svg'
import Arrow from '../../assets/icons/arrow.svg'
import ArrowActive from '../../assets/icons/arrow-active.svg'
import Chart from '../../assets/icons/chart.svg'
import Speaker from '../../assets/icons/radar.svg'
import Exchange from '../../assets/icons/exchange.svg'
import Cart from '../../assets/icons/shopping-cart.svg'
import PaymentLink from '../../assets/icons/payment-link.svg'
import Wire from '../../assets/icons/wire.svg'

export const sidebarLinks = [
    {
        group: 'Main pages',
        links: [
            {
                link: '/',
                label: 'Dashboard',
                icon: Piechart,
                activeIcon: PiechartActive
            },
            {
                link: '/balances',
                label: 'Balances',
                icon: Wallet,
                activeIcon: null
            },
            {
                link: '/transactions',
                label: 'Transactions',
                icon: Arrow,
                activeIcon: ArrowActive
            },
            {
                link: '/analytics',
                label: 'Analytics',
                icon: Chart,
                activeIcon: null
            },
            {
                link: '/marketing',
                label: 'Marketing',
                icon: Speaker,
                activeIcon: null
            },
            {
                link: '/exchange',
                label: 'Exchange rates',
                icon: Exchange,
                activeIcon: null
            },
        ]
    },
    {
        group: 'Accept payments',
        links: [
            {
                link: '/cart',
                label: 'Checkout',
                icon: Cart,
                activeIcon: null
            },
            {
                link: '/payment',
                label: 'Payment Links',
                icon: PaymentLink,
                activeIcon: null
            }
        ]
    },
    {
        group: 'Send payments',
        links: [
            {
                link: '/wire',
                label: 'Wire',
                icon: Wire,
                activeIcon: null
            }
        ]
    },
]