export const required = (value: string) => {
    return value ? undefined : 'The field is required!'
}

export const maxLength = (maxValue: number) => (value: string) => {
    return value.length > maxValue ? `The max symbol is ${maxValue}!` : undefined
}