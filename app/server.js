const app = require("./app");
const port = process.env.PORT || 4000;
console.log(`Starting Extract server on port: ${port}`)
const server = app.listen(port);

process.on("SIGINT", () => {
    if (process.env.NODE_ENV === "production") {
        server.close(function(error) {
            console.error("SIGINT received, shutting down");
            if (error) {
                console.error(err);
                process.exit(1);
            }
        })
    } else {
        process.exit(0);
    }
})
