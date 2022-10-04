export interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

export class ABInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('yes', {
            method: 'POST',
            body: JSON.stringify({ vehicle: this.vehicle }),
        });

        const data = await res.json();
        return data.yes;
    }
}

export class TFInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('', {
            method: 'POST',
            body: JSON.stringify({ vehicle: this.vehicle }),
        });

        const data = await res.json();
        return data.isSuccess;
    }
}

// OOP style

abstract class InsuranceFactory {
    db: any;
    abstract createInsurance(): IInsurance;

    saveHistory(ins: IInsurance): void {
        this.db.save(ins.id, ins.status);
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    override createInsurance(): TFInsurance {
        return new TFInsurance();
    }
}

class ABInsuranceFactory extends InsuranceFactory {
    override createInsurance(): ABInsurance {
        return new ABInsurance();
    }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const tfIns = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(tfIns);

const abInsuranceFactory = new ABInsuranceFactory();
const abIns = abInsuranceFactory.createInsurance();
abInsuranceFactory.saveHistory(abIns);

// TypeScript style
// Ограничен тем, что нет возможности добавлять методы
// для конкретной фабрики

const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance,
};

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlternative {
    db: any;

    createInsurance<T extends keyof IT>(type: T): IT[T] {
        return INSURANCE_TYPE[type];
    }

    saveHistory(ins: IInsurance): void {
        this.db.save(ins.id, ins.status);
    }
}

const insuranceFactoryAlternative = new InsuranceFactoryAlternative();
const abInsAlt = new (insuranceFactoryAlternative.createInsurance('ab'))();
insuranceFactoryAlternative.saveHistory(abInsAlt);
