import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'size is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    fetaCheese: yup.boolean(),
    onions: yup.boolean(),
    choppedGarlic: yup.boolean(),
    roastedRedPeppers: yup.boolean(),
    special: yup
        .string()
        .trim(),
})
export default formSchema