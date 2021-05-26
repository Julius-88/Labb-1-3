app.get("/api/add/:num", (req, res) => {
    const {
        num
    } = req.params;
    console.log(typeof num);
    counter += Number(num);
    res.send("{success: true}");
});

app.get("/api/show", (req, res) => {
    res.send({
        counter
    });
});

app.get("/api/reset", (req, res) => {
    counter = 0;
    res.send("{success: true}");
});
