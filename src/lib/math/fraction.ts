// 有理数を扱う Fraction クラスの実装
export class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number = 1) {
        if (denominator === 0) {
            throw new Error('分母は0にできません');
        }
        // 負号は分子にまとめる
        if (denominator < 0) {
            numerator = -numerator;
            denominator = -denominator;
        }
        const gcd = Fraction.gcd(Math.abs(numerator), Math.abs(denominator));
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
    }

    // ユークリッドの互除法
    private static gcd(a: number, b: number): number {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    add(other: Fraction | number): Fraction {
        if (typeof other === 'number') {
            other = new Fraction(other);
        }
        const num = this.numerator * other.denominator + other.numerator * this.denominator;
        const den = this.denominator * other.denominator;
        return new Fraction(num, den);
    }

    sub(other: Fraction | number): Fraction {
        if (typeof other === 'number') {
            other = new Fraction(other);
        }
        const num = this.numerator * other.denominator - other.numerator * this.denominator;
        const den = this.denominator * other.denominator;
        return new Fraction(num, den);
    }

    mul(other: Fraction | number): Fraction {
        if (typeof other === 'number') {
            other = new Fraction(other);
        }
        return new Fraction(this.numerator * other.numerator, this.denominator * other.denominator);
    }

    div(other: Fraction | number): Fraction {
        if (typeof other === 'number') {
            other = new Fraction(other);
        }
        if (other.numerator === 0) {
            throw new Error('0で割ることはできません');
        }
        return new Fraction(this.numerator * other.denominator, this.denominator * other.numerator);
    }

    toTeX(): string {
        if (this.denominator === 1) {
            return this.numerator.toString();
        }
        return `\\frac{${this.numerator}}{${this.denominator}}`;
    }

    toString(): string {
        return this.toTeX();
    }

    // 分子・分母のgetter
    getNumerator(): number {
        return this.numerator;
    }
    getDenominator(): number {
        return this.denominator;
    }
}
