import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

// Utility: Splits content into text/code blocks
function parseContent(content: string) {
  const regex = /``````/g;
  let lastIndex = 0;
  let match;
  const parts: { type: "text" | "code"; value: string }[] = [];

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: content.slice(lastIndex, match.index) });
    }
    parts.push({ type: "code", value: match[1].trim() });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < content.length) {
    parts.push({ type: "text", value: content.slice(lastIndex) });
  }
  return parts;
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();
  const nameParts = auth?.user?.name?.split(" ") || [];
  const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
  const lastInitial = nameParts[1]?.[0]?.toUpperCase() || "";

  // For assistant, parse and render code blocks
  if (role === "assistant") {
    const parts = parseContent(content);

    return (
      <Box sx={{ display: "flex", p: 2, bgcolor: "rgba(0, 0, 0, 0.4)", my: 2, gap: 2 }}>
        <Avatar sx={{ ml: "0" }}>
          <img src="gemini_logo.png" alt="openai" width={"30px"} />
        </Avatar>
        <Box>
          {parts.map((part, idx) =>
            part.type === "code" ? (
              <Box
                key={idx}
                sx={{
                  bgcolor: "#222",
                  color: "#fff",
                  fontFamily: "monospace",
                  fontSize: "16px",
                  borderRadius: 1,
                  p: 2,
                  my: 1,
                  overflowX: "auto",
                }}
                component="pre"
              >
                <code>{part.value}</code>
              </Box>
            ) : (
              <Typography key={idx} sx={{ fontSize: "20px", mb: 1 }}>
                {part.value}
              </Typography>
            )
          )}
        </Box>
      </Box>
    );
  }

  // For user messages
  return (
    <Box sx={{ display: "flex", p: 2, bgcolor: "rgba(146, 53, 53, 0.6)", gap: 2 }}>
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {firstInitial}
        {lastInitial}
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
