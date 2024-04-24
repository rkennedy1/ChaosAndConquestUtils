import { GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Footer() {
  return (
    <IconButton
      aria-label="github repository"
      sx={{ marginBottom: "1rem" }}
      component="span"
      onClick={() =>
        window.open(
          "https://github.com/rkennedy1/ChaosAndConquestUtils",
          "_blank"
        )
      }
      id="githubButton"
    >
      <GitHub />
    </IconButton>
  );
}

export default Footer;
