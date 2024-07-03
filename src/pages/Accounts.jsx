import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Accounts = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Accounts</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AccountCard name="Checking Account" balance="$5,678.90" type="Checking" />
        <AccountCard name="Savings Account" balance="$12,345.67" type="Savings" />
        <AccountCard name="Credit Card" balance="$1,234.56" type="Credit" />
      </section>
    </div>
  );
};

const AccountCard = ({ name, balance, type }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xl font-bold">{balance}</p>
      <p className="text-gray-500">{type}</p>
    </CardContent>
  </Card>
);

export default Accounts;