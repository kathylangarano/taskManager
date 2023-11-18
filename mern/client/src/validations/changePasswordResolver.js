import * as yup from 'yup' ;
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    password: yup
    .string('The password must be a text')
    .required('You must enter a password ')
    .min(6, 'The password must have at least 6 characters.')
})
export default yupResolver(schema)
