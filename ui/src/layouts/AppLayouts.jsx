import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const AppLayouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayouts;
