export const dateExtract= (str: string) => {
    return str
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.');
};