import { FormControl } from "@angular/forms"

export interface FormTypes{
    firstName: FormControl<string | null>
    secondName: FormControl<string | null>
    content: FormControl<string | null>
    date: FormControl<Date | null>
}
