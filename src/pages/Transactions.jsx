import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Transactions = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Transactions</h1>
      </header>

      <section>
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
    </div>
  );
};

export default Transactions;