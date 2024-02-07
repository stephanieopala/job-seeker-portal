import Navbar from "../components/navigation/Navbar";
import { Grid } from "@radix-ui/themes";

const Home = () => {
  return (
    <Grid pt="6" px={{ initial: "3", sm: "9" }}>
      <Navbar />
    </Grid>
  )
}

export default Home