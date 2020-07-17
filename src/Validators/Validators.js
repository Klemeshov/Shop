export const required = value => {
    if (value && value.length>0) return undefined;
    return "Это поле обязателное";
};

export const maxLength = length => value =>{
    if (value.length <= length) return undefined;
    return `Max length is ${length} symbols`;
};

export const phone = value =>{
    // eslint-disable-next-line no-useless-escape
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(re.test(value)) return undefined;
    return "Неверный формат, например +79001112233"
};

export const email = value =>{
    // eslint-disable-next-line no-useless-escape
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (re.test(value)) return undefined;
    return "Неверный формат, например example@test.com"
};