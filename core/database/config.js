const prod = process.env.NODE_ENV === "production";

const dbConfig = {
    dbHost: prod ? process.env.DB_HOST : "localhost",
    dbUser: prod ? process.env.DB_USER : "root",
    dbPass: prod ? process.env.DB_PASS : "",
    dbName: prod ? process.env.DB_NAME : "mercado",
};

export default dbConfig;