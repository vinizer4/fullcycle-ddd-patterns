import {Sequelize} from "sequelize-typescript";

describe('Product repository unit tests', () => {

    let sequelizeMock: Sequelize;

    beforeEach( async () => {
        sequelizeMock = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync : { force: true }
        });

        afterEach( async () => {
            await sequelizeMock.close();
        });
    })
});