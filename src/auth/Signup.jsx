import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'
import { useADDUSER } from "../state/UserCreateContext"
const Signup = () => {
	const { addUser } = useADDUSER();
	const initialValues = {
		username : '',
		email :'',
		password : '',
	}
	const validationSchema = Yup.object({
		username : Yup.string().required("Please enter a valid username"),
		email : Yup.string().required("Please enter a valid email"),
		password : Yup.string().required("Please enter a valid password"),
	})
	const handleSubmit = async ( values , { resetForm }) => {
		addUser(values);
		resetForm();
	}
  return (
	<div className="w-full p-10 mt-32">
		<div className="w-[95%] md:w-[40%] lg:w-[30%] mx-auto p-2">

			<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>

				<Form className="border-[#FBBC04] border-4 rounded-md shadow-md flex flex-col justify-start items-start p-2 md:p-5 gap-5 space-y-3">
					<h1 className="text-xl tracking-widest p-1 uppercase ">SignUp</h1>
					<Field type="text" className="fields" placeholder="Enter your username" name="username"/>
					<ErrorMessage className="text-red-500" component="div" name="username"/>
					<Field type="email" className="fields" placeholder="Enter your email" name="email"/>
					<ErrorMessage className="text-red-500" component="div" name="email"/>
					<div className="w-full space-y-4">
					<Field type="password" className="fields" placeholder="Enter your email" name="password"/>
					<ErrorMessage className="text-red-500" component="div" name="password"/>
					</div>
					<button className="btn" type="submit">Signup</button>
					<p>Already have an account </p>
				</Form>
			</Formik>

		</div>
	</div>
  )
}

export default Signup