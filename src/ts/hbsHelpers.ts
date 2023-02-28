/* eslint-disable @typescript-eslint/no-explicit-any */
'use script';

const helper = {
    if_cond: (v1: number, operator: unknown, v2: number, options: any) => {
        switch (operator) {
            case '===':
                return v1 === v2 ? options.fn(this) : options.inverse(this);
            case '!==':
                return v1 !== v2 ? options.fn(this) : options.inverse(this);
            case '<':
                return v1 < v2 ? options.fn(this) : options.inverse(this);
            case '<=':
                return v1 <= v2 ? options.fn(this) : options.inverse(this);
            case '>':
                return v1 > v2 ? options.fn(this) : options.inverse(this);
            case '>=':
                return v1 >= v2 ? options.fn(this) : options.inverse(this);
            case '&&':
                return v1 && v2 ? options.fn(this) : options.inverse(this);
            case '||':
                return v1 || v2 ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    },
    shortText: (text: string, n: any) => {
        return text.substr(0, n);
    }
};

export default helper;
