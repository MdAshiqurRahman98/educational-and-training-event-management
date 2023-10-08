import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredService } from "../../utilities/localStorage";
import { Cell, Pie, PieChart } from "recharts";


const Dashboard = () => {
    const totalService = useLoaderData();

    const [addedServices, setAddedServices] = useState([]);
    useEffect(() => {
        const storedServiceIds = getStoredService();
        if (totalService.length > 0) {
            const servicesAdded = [];
            for (const id of storedServiceIds) {
                const service = totalService.find(service => service.id === id);
                if (service) {
                    servicesAdded.push(service)
                }
            }
            setAddedServices(servicesAdded);
        }
    }, [totalService]);

    const data = [
        { name: "Total Service", value: totalService.length },
        { name: "Added Services", value: addedServices.length }
    ];

    const COLORS = ["#FF1493", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className="flex justify-center text-3xl font-bold">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={190}
                        cy={190}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={190}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="text-center mt-9 mb-11">
                Service You Bought
                <progress className="progress-accent w-20 h-[10px] mr-11 ml-3" value="100" max="100"></progress>
                Total Service
                <progress className="progress-secondary w-20 h-[10px] ml-3" value="100" max="100"></progress>
            </div>
        </>
    );
};

export default Dashboard;