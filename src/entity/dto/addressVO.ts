// Value Object
// Um objeto de valor é um pequeno objeto que nos permite dar expressividade ao nosso código.
// Um objeto de valor não pode ser alterado depois de criado.
// Um objeto de valor nao tem ID
// Um objeto de valor é imutavel
class AddressVO {

    private _street: string;
    private _number: number;
    private _city: string;
    private _zip: string;

    constructor(street: string, number: number, city: string, zip: string) {
        this._street = street;
        this._number = number;
        this._city = city;
        this._zip = zip;
        this.validate();
    }

    validate() : void {
        if (this._street.length === 0) {
            throw new Error('Street is required');
        }
        if (this._number === 0) {
            throw new Error('Number is required');
        }
        if (this._city.length === 0) {
            throw new Error('City is required');
        }
        if (this._zip.length === 0) {
            throw new Error('ZipCode is required');
        }
    }

    toString() : string {
        return `${this._street}, ${this._number}, ${this._city}, ${this._zip}`;
    }
}