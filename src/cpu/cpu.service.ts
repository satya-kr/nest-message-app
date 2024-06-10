import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(
        private powerService: PowerService
    ) {}

    compute(a: number, b: number) {
        console.log(`Computing 10 watts of power from Power Service`);
        this.powerService.powerSupply(10);
        return a + b;
    }
}
