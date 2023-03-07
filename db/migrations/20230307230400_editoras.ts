import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('editoras',(table) =>{

        table.increments('id').primary();
        table.text('nome').notNullable()
      
    })
}


export async function down(knex: Knex): Promise<void> {
}

