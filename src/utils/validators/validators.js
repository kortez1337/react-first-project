export const required = (value) => {
    if (value) return undefined;
    return "Field in required";
};

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Максимальное кол-во символов: ${maxLength}`;
    }
    return undefined;
};
