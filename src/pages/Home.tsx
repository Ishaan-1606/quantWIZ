import Box from "@mui/material/Box";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // ensures it fills viewport
      width="100%"
    >
      {/* MAIN CONTENT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1, // allows this box to take remaining height
          width: "100%",
        }}
      >
        {/* TYPING ANIMATION */}
        <Box mt={2}>
          <TypingAnim />
        </Box>

        {/* TOP IMAGES */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: "100%",
            my: 4,
          }}
        >
          <img
            src="robot.png"
            alt="robot"
            style={{
              maxWidth: "150px", // dynamic max
              width: "20%", // scales with parent
              height: "auto",
              objectFit: "contain",
            }}
          />
          <img
            src="gemini.png"
            alt="gemini"
            style={{
              maxWidth: "150px",
              width: "20%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* CHAT IMAGE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexGrow: 1, // let it expand into remaining vertical space
          }}
        >
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              maxWidth: "80%", // scales responsively
              height: "auto",
              objectFit: "contain",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px rgb(212, 175, 55)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
