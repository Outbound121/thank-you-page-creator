
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Confetti component
const Confetti = () => {
  // Create an array of 50 confetti pieces
  const confetti = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10 - Math.random() * 40,
    size: 5 + Math.random() * 15,
    color: [
      "#8B5CF6", // Purple
      "#D946EF", // Pink
      "#F97316", // Orange
      "#0EA5E9", // Blue
      "#10B981", // Green
      "#F59E0B", // Yellow
    ][Math.floor(Math.random() * 6)],
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-md"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [1, 0.7, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3, // Faster animation (was 5 + Math.random() * 5)
            ease: "easeOut",
            delay: Math.random() * 1, // Reduced delay (was Math.random() * 3)
            repeat: 1, // Only repeat once instead of Infinity
            repeatDelay: Math.random() * 2, // Faster repeat (was Math.random() * 10)
          }}
        />
      ))}
    </div>
  );
};

const ThankYou = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  
  // Scroll to top on page load and handle confetti timing
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-qmf-light-gray">
      {showConfetti && <Confetti />}
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="bg-white rounded-lg shadow-md max-w-3xl w-full p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Application Is Looking Good!</h1>
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
            <Button 
              asChild 
              className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6" 
            >
              <a href="tel:01132631214">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now: 0113 2631214
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
