export type StockLevel = 'out' | 'low' | 'ok';

export function stockLevel(availability: number): StockLevel {
    if (availability <= 0) return 'out';
    if (availability <= 3) return 'low';
    return 'ok';
}

export function stockLabel(availability: number): string {
    switch (stockLevel(availability)) {
        case 'out': return 'Out of stock';
        case 'low': return `Only ${availability} left`;
        default: return `${availability} in stock`;
    }
}
