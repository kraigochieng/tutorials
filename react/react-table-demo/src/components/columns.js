import { COLUMN, GROUPED_COLUMN } from "./column";
import { dateTimeFormatter } from "../utils/dateTimeFormatter";

export const idColumn = COLUMN('ID', 'id')
idColumn['disableFilters'] = true

export const firstNameColumn = COLUMN('First Name', 'first_name')

export const lastNameColumn = COLUMN('Last Name', 'last_name')
const email = COLUMN('Email', 'email')

export const dateOfBirthColumn = COLUMN('Date Of Birth', 'date_of_birth')

// Add Formatting To Date OF Birth Column
dateOfBirthColumn['Cell'] = ({value}) => {
    return dateTimeFormatter(value)
}

export const ageColumn = COLUMN('Age', 'age')

export const countryColumn = COLUMN('Country', 'country')

export const phoneColumn = COLUMN('Phone', 'phone')

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