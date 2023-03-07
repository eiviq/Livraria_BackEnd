import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('usuarios',(table) =>{
        
        table.increments('id').primary();
        table.text('tipo').notNullable();
        table.text('nome').notNullable();
        table.text('endereco').notNullable();
        table.text('foto').notNullable();
        table.text('email').notNullable();
        table.text('hash').notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
}

