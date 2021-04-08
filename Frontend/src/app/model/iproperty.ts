import { DateInput } from 'ngx-bootstrap/chronos/test/chain';
import { IPropertyBase } from './ipropertybase';

export interface IProperty extends IPropertyBase {
    Security: number;
    Maintenance: number;
    CarpetArea: number;
    FloorNo: number;
    TotalFloor: number;
    Address: string;
    Landmark?: string;
    AOP: number;
    PossessionOn: DateInput;
    Gated: number;
    MainEntrance: number;
    Description: string;
}
