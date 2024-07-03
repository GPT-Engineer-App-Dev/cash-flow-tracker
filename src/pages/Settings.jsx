import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>

      <section>
        <UserSettings />
      </section>
    </div>
  );
};

const UserSettings = () => (
  <Card>
    <CardHeader>
      <CardTitle>User Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Manage your profile information, notification preferences, and more.</p>
      {/* Add form elements for user settings here */}
    </CardContent>
  </Card>
);

export default Settings;