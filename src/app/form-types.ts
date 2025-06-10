export interface FormTypes {
    firstName?: string
    secondName?: string
    content?: string
    date?: Date
}
export enum TaskField {
    Content = 'content',
    FirstName = 'firstName',
    SecondName = 'secondName',
    Date = 'date'
}