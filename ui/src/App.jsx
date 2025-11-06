
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import AppLayout from "./layouts/AppLayouts.jsx";
import AddRequirementPage from "./pages/AddRequirementPage.jsx";
import FarmerListTab from "./pages/FarmerList.jsx";

function App() {
  return (
    <AppLayout>
      <div className="p-6">
        <Tabs defaultValue="add" className="max-w-4xl mx-auto">
          <TabsList className="flex justify-center space-x-4 mb-6 bg-green-50 rounded-lg p-1">
            <TabsTrigger
              value="add"
              className="data-[state=active]:bg-green-700 data-[state=active]:text-white px-4 py-2 rounded-lg text-green-800"
            >
              Add Requirement
            </TabsTrigger>
            <TabsTrigger
              value="farmers"
              className="data-[state=active]:bg-green-700 data-[state=active]:text-white px-4 py-2 rounded-lg text-green-800"
            >
              View Farmers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="add">
            <AddRequirementPage />
          </TabsContent>
          <TabsContent value="farmers">
            <FarmerListTab />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}

export default App;
