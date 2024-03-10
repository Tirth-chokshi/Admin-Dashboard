
import styles from '@/app/ui/dashboard/chart/chart.module.css'
import { Chart } from "react-google-charts";

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];
const options = {
    title: "My Daily Activities",
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const AnalysisPage = async () => {
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    )
}
export default AnalysisPage