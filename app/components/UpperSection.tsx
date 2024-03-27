import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

{ /* Följ konventioner - använd enhetlig namngivning för att enklare förstå koden */
/* Hade kunnat heta Header istället för UpperSection likt Footer */ }

export default function UpperSection() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: "gray" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Min träningsblogg
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
