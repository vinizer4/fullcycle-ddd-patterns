// Entidade anemica (sem comportamento)
// Uma entidade por padrão sempre tem que se auto validar e garantir que possua dados válidos
// Uma entidade por padrão sempre tem que ter um id
// Entidade focada em negocio, não em persistencia

// Pare de chamar sua classe usada para persistencia de entidade
// Entidade é uma classe que representa um conceito de negocio

// Complexidade de negocio
// Domain
// - Entity
// - - customer.ts (regra de negocio)

// Complexidade acidental
// Infra - Mundo externo (banco de dados, api, etc)
// - Entity / Model
// - - customer.ts (persistencia)
class Customer {

    private _id: string;
    private _name: string;
    private _address: string = '';
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length < 5) {
            throw new Error('Name is required');
        }
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address.length === 0) {
            throw new Error('Address is mandatory to activate customer');
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}