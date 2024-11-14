import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Flightopia</div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="hover:bg-primary/10"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;