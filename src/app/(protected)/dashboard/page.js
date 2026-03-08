import Header from "@/components/header";
import Table from "@/components/table/table";
import AgeSalaryChart from "@/components/chart";

const Dashboard = ()=>{
    return(
        <div className="p-12">
            <Header/>
            <Table/>
            <AgeSalaryChart/>
        </div>
    )
}

export default Dashboard;