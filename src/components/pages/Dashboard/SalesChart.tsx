import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardChartType } from '../../../types/global';


function SalesChart({ data }:{ data: DashboardChartType[]}) {

    return (
        <ResponsiveContainer width="100%" height={250} >
            <AreaChart
                data={data}
                margin={{
                    //top: 10,
                    bottom: 10,
                    right: 20,
                }}
            >
                <CartesianGrid strokeDasharray="0" horizontal={true} vertical={false} />
                <XAxis dataKey='date' axisLine={false} tickLine={false} />
                <YAxis orientation="left"  axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="purchase" stroke="#EF2C5A" fill='#FEEDF1' />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default SalesChart