const mongoose = require("mongoose");

const dbURI = "mongodb://localhost/Messenger"
    // process.env.NODE_ENV === "development"
    //     ? "mongodb://localhost/Messenger"
    //     : process.env.DB_URI;


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on("connected", () => console.log(`mongoose is connected to ${dbURI}`))

mongoose.connection.on("error", (err) => console.log(`Error connecting to db:\n ${err}`))

mongoose.connection.on("disconnected", () => console.log(`Mongoose is disconnected`))

process.on("SIGINT", () => {
    console.log("Mongoose disconnected on exit process");
    process.exit(0)
})

module.exports = mongoose
