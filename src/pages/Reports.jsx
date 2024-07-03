import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Reports</h1>
      </header>

      <section>
        <ReportOptions />
        <ReportDisplay />
      </section>
    </div>
  );
};

const ReportOptions = () => (
  <Card>
    <CardHeader>
      <CardTitle>Generate Report</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Select the type of report you want to generate.</p>
      {/* Add form elements for report options here */}
    </CardContent>
  </Card>
);

const ReportDisplay = () => (
  <Card>
    <CardHeader>
      <CardTitle>Report</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        {/* Placeholder for report display */}
        <p>Report content goes here</p>
      </div>
    </CardContent>
  </Card>
);

export default Reports;