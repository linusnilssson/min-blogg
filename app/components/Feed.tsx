import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import blogposts from "./data/posts.json";

export default function Feed() {
  // Funktion för att generera en slumpmässig dag i veckan
  function generateDayOfWeek(days: string[]) {
    // Skapa ett slumpmässigt index för dagar i veckan
    const randomsdayinweek = Math.floor(Math.random() * days.length);

    // Ta bort och returnera dagen på det slumpmässiga indexet från "days"-arrayen

    return days.splice(randomsdayinweek, 1)[0];
    {
      /* Använd meningsfulla namn - Ska tydligt beskriva dens syfte - randomsdayinweek hade kunnat ändras till t.ex randomIndex */
    }
  }
  // Array med dagar i veckan
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  {/* Undvika överflödiga kommentarer, kommentera endast de som är viktigt */}

  return (
    <Box sx={{ backgroundColor: "darkgray" }}>
      <Box sx={{ textAlign: "center", mx: "auto", pt: "2rem" }}>
        <Typography variant="h3" sx={{ color: "white" }}>
          Mitt träningsschema
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 10,
          justifyContent: "center",
        }}
      >
        {/* Undvika längre funktioner, kan brytas ut till en egen komponent*/}
        
        {blogposts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                sx={{ aspectRatio: "16/9", objectFit: "contain" }}
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "10px" }}
                >
                  Training day: {generateDayOfWeek(days)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}