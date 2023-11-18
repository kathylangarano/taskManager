import * as yup from 'yup' ;
import {yupResolver} from '@hookform/resolvers/yup';
import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup
    .string('The name must be a text')
    .required('You must enter a name'),
    email:yup
    .string( 'The email must be a text')
    .required('You must enter an email.')
    .email ('You must enter a valid email'),
    role:yup
    .string('The role must be a text')
    .oneOf(Object.keys(roles))
    //.required('You must enter a valid role')
    
})
export default yupResolver(schema)
