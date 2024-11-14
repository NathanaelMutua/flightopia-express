import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import NavBar from "@/components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      <div className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        
        <div className="relative z-10 w-full max-w-md mx-4">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#0F172A',
                      brandAccent: '#1E293B',
                    },
                  },
                },
              }}
              providers={[]}
              redirectTo={`${window.location.origin}/`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;