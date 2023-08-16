import { COLUMN, GROUPED_COLUMN } from "./column";
import { dateTimeFormatter } from "../utils/dateTimeFormatter";

const idColumn = COLUMN('ID', 'id')
const firstNameColumn = COLUMN('First Name', 'first_name')
const lastNameColumn = COLUMN('Last Name', 'last_name')
const email = COLUMN('Email', 'email')
const dateOfBirthColumn = COLUMN('Date Of Birth', 'date_of_birth')
// Add Formatting To Date OF Birth Column
dateOfBirthColumn['Cell'] = ({value}) => {
    return dateTimeFormatter(value)
}
const ageColumn = COLUMN('Age', 'age')
const countryColumn = COLUMN('Country', 'country')
const phoneColumn = COLUMN('Phone', 'phone')

export const COLUMNS = [
    idColumn,
    firstNameColumn,
    lastNameColumn,
    dateOfBirthColumn,
    countryColumn,
    phoneColumn
]

const nameColumn = GROUPED_COLUMN(
    'Name', 
    [
        firstNameColumn,
        lastNameColumn,
    ],
)

const infoColumn = GROUPED_COLUMN(
    'Info',
    [
        dateOfBirthColumn,
        countryColumn,
        phoneColumn
    ]
)

export const GROUPED_COLUMNS = [
    idColumn,
    nameColumn,
    infoColumn
]