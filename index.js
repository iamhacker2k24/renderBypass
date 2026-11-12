const express = require("express");
const callAllBackendUrl = require("./callAllBackendUrl");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Started");
});

app.get("/api/health", async (req, res) => {
    res.status(200).json({
        msg: "server started sucessfully"
    })
})

app.get("/api/startallserver", async (req, res) => {
    try {
        const result = await callAllBackendUrl()
        res.status(200).json(
            {
                sucess: true,
                msg: "All server started properly "
            }

        )

    } catch (error) {

    }
})
const PORT = 3005;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

