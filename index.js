import express from "express"
import axios from "axios"
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res)=>{
  try{
    let result = await axios.get("https://dog.ceo/api/breeds/image/random");
    let dogImg = result.data.message;
    let name = (result.data.message.split('/breeds/')[1].split('/')[0]);
    let dogName = name.slice(0,1).toUpperCase()+name.slice(1);
    res.render("index.ejs", {dogName:dogName, 
      dogImg:dogImg
  });
}
  catch(error){
    console.error(error);
    res.render("index.ejs", {dogName:"Something went wrong", 
      dogImg:"images/error.png"
  });
};

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});