import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('autor',(table) =>{
        
        table.increments('id').primary();
        table.text('nome').notNullable();
        table.text('sobrenome').notNullable();
        table.text('formação').notNullable();
        table.text('nacionalidade').notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
}

