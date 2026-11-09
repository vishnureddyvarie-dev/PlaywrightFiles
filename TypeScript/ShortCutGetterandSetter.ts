class Employee1 {
    private _salary: number = 50000; // Private property    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

