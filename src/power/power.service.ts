import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    
    powerSupply(watts: number) {
        console.log(`Supplying ${watts} worth of power.`);
    }
}
