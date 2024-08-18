import { Formik } from "formik";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    } 
    return (
        <>
            <div>
                <div className="container mt-5" style={{ width: '400px' }}>
                    <h5 className="text-center fs-1 mb-5 fw-bold">L o g i n</h5>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (
                                values.password.length < 3
                            ) {
                                errors.password = 'Password must be at least 3 characters';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <div className="border border-2 border-primary rounded-5 shadow p-3">
                                <div className="m-3">
                                    <form onSubmit={handleSubmit} className="form-signin">
                                        <div className="form-group mb-1">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                className="form-control mt-2"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                        <div className="form-group mb-1">
                                            <label htmlFor=" password">Password</label>
                                            <div className=" position-relative">
                                                <input
                                                    className="form-control mt-2"
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                <div className="position-absolute top-0 end-0 p-2">
                                                    <button className="m-0 p-0">
                                                        <i onClick={handleShowPassword} className="fas text-dark fa-eye" ></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary btn-block btn-lg mt-5" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
            
        </>

    )
}


export default Login;