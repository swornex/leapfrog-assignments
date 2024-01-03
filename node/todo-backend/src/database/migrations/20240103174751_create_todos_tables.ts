import { Knex } from "knex";

const TABLE_NAME = "todos";
const USER_TABLE = "users";

/**
 * Create table todos.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();

    table.string("title", 255).notNullable();

    table.boolean("is_completed").notNullable().defaultTo(false);

    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

    table
      .bigInteger("created_by")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable(USER_TABLE);

    table.timestamp("updated_at").nullable();

    table
      .bigInteger("updated_by")
      .unsigned()
      .references("id")
      .inTable(USER_TABLE)
      .nullable();
  });
}

/**
 * Drop table todos.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
