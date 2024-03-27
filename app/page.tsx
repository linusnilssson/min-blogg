import BlogFeed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/UpperSection";

export default function Home() {
  return (
    <>
      <Header />
      <BlogFeed />
      <div style={{ marginBottom: "15vh" }}>
        {/* Lägg till en tom div med höjden av fotern för att undvika överlappning */}
      </div>
      <Footer />
    </>
  );
}
