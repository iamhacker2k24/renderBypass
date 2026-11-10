const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Started");
});

app.get("/api/health", async (req, res) => {
    const response = await callAllBackendUrl()
    if (response == true) {
        res.status(200).json({
            sucess: true,
            msg: "all server started "
        })
    }
    else {
        res.status(400).json({
            sucess: false,
            msg: "error while  server starting"
        })
    }
})
const PORT = 3005;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

