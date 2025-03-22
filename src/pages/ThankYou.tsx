
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FinanceHeader } from "@/components/FinanceHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const ThankYou = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-qmf-light-gray">
      <FinanceHeader />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="bg-white rounded-lg shadow-md max-w-3xl w-full p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your application has been submitted successfully.
            </p>
            <div className="border-t border-gray-200 pt-6 max-w-xl mx-auto">
              <p className="text-gray-600 mb-4">
                One of our finance specialists will review your application and get back to you shortly.
              </p>
              <p className="text-gray-600 mb-6">
                If you have any questions in the meantime, please don't hesitate to contact us at{" "}
                <a href="tel:01132631214" className="text-qmf-purple font-medium hover:underline">
                  0113 2631214
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button asChild variant="outline" className="flex items-center">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
