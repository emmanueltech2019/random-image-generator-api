const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res, next) =>{
    try {
        let  {prompt, size} = req.body
        const imageSize = size === "small" ? "256x256" : "medium" ? `512x512` : `1024X1024`
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize 
        })

        const ImageURL = response.data.data[0].url
        res.status(200).json({
            success:200,
            data: ImageURL
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
}

module.exports={
    generateImage
}