import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, PieChart } from "lucide-react";
import { format } from "date-fns";

const Index = () => {
  const currentDate = format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome to Your Financial Dashboard</h1>
        <p className="text-gray-500">{currentDate}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Balance" value="$12,345.67" />
        <SummaryCard title="Income" value="$4,567.89" />
        <SummaryCard title="Expenses" value="$2,345.67" />
        <SummaryCard title="Savings" value="$1,234.56" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Account</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>01/01/2023</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>Food</TableCell>
              <TableCell>$123.45</TableCell>
              <TableCell>Checking</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>01/02/2023</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Income</TableCell>
              <TableCell>$4,000.00</TableCell>
              <TableCell>Savings</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartCard title="Expense Distribution" icon={<PieChart className="h-6 w-6" />} />
          <ChartCard title="Income vs. Expenses" icon={<LineChart className="h-6 w-6" />} />
        </div>
      </section>
    </div>
  );
};

const SummaryCard = ({ title, value }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

const ChartCard = ({ title, icon }) => (
  <Card>
    <CardHeader className="flex items-center justify-between">
      <CardTitle>{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        {/* Placeholder for chart */}
        <p>Chart goes here</p>
      </div>
    </CardContent>
  </Card>
);

export default Index;