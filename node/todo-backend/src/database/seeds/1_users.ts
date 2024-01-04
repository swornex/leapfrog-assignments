import { Knex } from "knex";
import bcrypt from "bcrypt";
import config from "../../config";
import { IUser } from "../../interfaces/user";

const TABLE_NAME = "users";

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
        Array.from({ length: 5 }, (_, i) => ({
          email: `user${i + 1}@example.com`,
          password: bcrypt.hashSync(
            `password${i + 1}`,
            config.bcrypt.saltRounds
          )
        }))
      );
    });
}
