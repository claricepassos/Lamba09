import { connection } from "./connection"


const main = async () => {

  try {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS band_table (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL 
      );
      
       CREATE TABLE IF NOT EXISTS shows_table (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time BIGINT NOT NULL,
        end_time BIGINT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES band_table(id)
      );

      CREATE TABLE IF NOT EXISTS user_table (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
      ); 
   `)
    console.log("Tabela criada!")
  } catch (error) {
    console.log(error)
  } finally{
    connection.destroy()
  }
}

main()