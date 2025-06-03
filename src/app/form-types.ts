export interface FormTypes{
    firstName: string | null
    secondName: string | null
    content: string | null
    date: Date | null
}
export enum TaskField {
    Content = 'content',
    FirstName = 'firstName',
    SecondName = 'secondName'
}