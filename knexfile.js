const sqlite = {
  // client: "sqlite3",
  client: "pg",
  // useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  pool: {
      min:2, 
      max:10,
    // afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
      
    },
  seeds: {
    directory: "./database/seeds",
  },
}
module.exports = {
  dev: {
    ...sqlite,
    connection: 
      // filename: "./database/dev.db3",
      process.env.DATABASE_URL
    
  },
  test: {
    ...sqlite,
    connection: 
     process.env.DATABASE_URL
      // {filename: "./database/test.db3",}
    
  },
}