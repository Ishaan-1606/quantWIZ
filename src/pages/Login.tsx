import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const auth=useAuth();
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const email=formData.get("email") as string;
    const password=formData.get("password") as string;
    try{
      toast.loading("Signing In",{id:"login"});
      await auth?.login(email,password);
      toast.success("Signed In Successfully",{id:"login"});
      
    }catch(error){
      console.log(error);
      toast.error("Sign In Failed",{id:"login"});

    }
  };
  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth?.user, navigate]);  
  return (
    <Box width={"100%"} mb={8}height={"100%"} display="flex" flex={1}>
      <Box padding={8} mb={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="Robot" style={{
              maxWidth: "auto", // scales responsively
              height: "70vh",
              objectFit: "contain",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px rgb(212, 175, 55)",
            }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      ></Box>
      <form
      onSubmit={(handleSubmit)}
        style={{
          margin: "auto",
          padding: "30px",
          boxShadow: "-5px -5px 105px rgb(212, 175, 55)",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            padding={2}
            fontWeight={600}
          >
            Login
          </Typography>
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />
          <Button
  type="submit"
  sx={{
    px: 2,
    py: 1.2,
    mt: 2,
    width: "400px",
    borderRadius: 2,
    bgcolor: "#800000", // Dark Maroon
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 15px rgba(212, 175, 55, 0.4)", // Subtle gold glow
    ":hover": {
      bgcolor: "#a52a2a", // Light Maroon
      color: "#fff",
      boxShadow: "0 0 25px rgba(212, 175, 55, 0.6)", // Brighter gold glow
    },
  }}
  endIcon={<IoIosLogIn />}
>
  Login
</Button>

        </Box>
      </form>
    </Box>
  );
};

export default Login;

