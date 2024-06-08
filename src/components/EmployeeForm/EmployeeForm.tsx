import {EmployeeFormContainer, CheckBoxContainer, CheckBox, CheckBoxLabel} from "./styles";
import Input from "../Input/Input";
import {useFormik} from "formik";
import {EMPLOYEE_FORM_FIELDS, EmployeeFormValues} from "./types";
import Button from "../Button/Button";
import * as Yup from 'yup'


function EmployeeForm() {
    const validationSchema = Yup.object().shape({
        [EMPLOYEE_FORM_FIELDS.NAME]: Yup.string().required('Required failed').min(2, 'Min 2'),
        [EMPLOYEE_FORM_FIELDS.SURNAME]: Yup.string(),

        [EMPLOYEE_FORM_FIELDS.AGE]: Yup.number()
            .typeError('Must be number')
            .required()
            .min(18,'min age 18'),

        [EMPLOYEE_FORM_FIELDS.POSITION]: Yup.string().max(30,'Max 30 symbol'),
        [EMPLOYEE_FORM_FIELDS.AGREEMENT]: Yup.boolean()


    })


    const formik = useFormik({
        initialValues: {
            [EMPLOYEE_FORM_FIELDS.NAME]: '',
            [EMPLOYEE_FORM_FIELDS.SURNAME]: '',
            [EMPLOYEE_FORM_FIELDS.AGE]: '',
            [EMPLOYEE_FORM_FIELDS.POSITION]: '',
            [EMPLOYEE_FORM_FIELDS.AGREEMENT]: false
        } as EmployeeFormValues,
        validationSchema:validationSchema,
        validateOnChange:false,
        onSubmit: (values:EmployeeFormValues) => {
            console.table(values)
        }


    })

    console.log(formik)

    return (
        <EmployeeFormContainer onSubmit={formik.handleChange}>
            <Input name={EMPLOYEE_FORM_FIELDS.NAME}
                   placeholder={'Enter ypur name'}
                   label='Name*'
                   value={formik.values[EMPLOYEE_FORM_FIELDS.NAME]}
                   error={formik.errors[EMPLOYEE_FORM_FIELDS.NAME]}
                   onChange={formik.handleChange}

            />
            <Input name={EMPLOYEE_FORM_FIELDS.SURNAME}
                   placeholder={'Enter your surname'}
                   label='surname*'
                   value={formik.values[EMPLOYEE_FORM_FIELDS.SURNAME]}
                   error={formik.errors[EMPLOYEE_FORM_FIELDS.SURNAME]}
                   onChange={formik.handleChange}

            />
            <Input name={EMPLOYEE_FORM_FIELDS.AGE}
                   placeholder={'Enter your age'}
                   label='Age*'
                   value={formik.values[EMPLOYEE_FORM_FIELDS.AGE]}
                   error={formik.errors[EMPLOYEE_FORM_FIELDS.AGE]}
                   onChange={formik.handleChange}

            />
            <Input name={EMPLOYEE_FORM_FIELDS.POSITION}
                   placeholder={'Enter your name'}
                   label='Position'
                   value={formik.values[EMPLOYEE_FORM_FIELDS.POSITION]}
                   error={formik.errors[EMPLOYEE_FORM_FIELDS.POSITION]}
                   onChange={formik.handleChange}

            />
            <CheckBoxContainer>
                <CheckBox type='checkbox'
                          id='agree'
                          name={EMPLOYEE_FORM_FIELDS.AGREEMENT}
                          onChange={formik.handleChange}
                          checked={formik.values[EMPLOYEE_FORM_FIELDS.AGREEMENT]}/>

                <CheckBoxLabel htmlFor='agree'>I Agree</CheckBoxLabel>
            </CheckBoxContainer>
            <Button name='Agree'/>

        </EmployeeFormContainer>


    )


}

export default EmployeeForm