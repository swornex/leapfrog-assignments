import { faker } from "@faker-js/faker";
import { Knex } from "knex";

const TABLE_NAME = "todos";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert(
        Array.from({ length: 50 }, () => ({
          title: faker.lorem.sentence(),
          is_completed: faker.datatype.boolean(),
          created_by: faker.number.int({ min: 1, max: 5 })
        }))
      );
    });
}
