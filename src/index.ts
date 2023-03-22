import { IBrand } from './types/brand';
import { getBrandByName as _getBrandByName } from './utils/getBrandByName';

export function getBrandByName(name: string, model?: string | undefined): IBrand | null {
    return _getBrandByName(name, model);
}
export function sayHello(name?: string): string{
    return `Hello ${name??'World'}!`
}

