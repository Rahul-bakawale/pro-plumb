
import About from "@/components/About";
import  '../index.css'
import RequestQuoteSection from "@/components/RequestQuoteSection";
import MainLayout from "@/container/MainLayout";
const Index = () => {
  return (
    <MainLayout >
      <About />
      <RequestQuoteSection />
    </MainLayout>
  );
};

export default Index;