import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import {BsFillExclamationSquareFill}  from 'react-icons/bs'

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters"),
  repeatPassword: yup
    .string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

type Props={
  formData:any,
  setFormData:any,
  nextStep:any
}

const SignupPage2 = (props:Props) => {
const {formData,setFormData,nextStep}= props
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    initialErrors: {
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
        const { password } = values;
        setFormData({ ...formData, password: password});
        nextStep();
          console.log("Form submitted with values:", values);
        },
  });

  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <div className="pb-10 absolute text-center items-center justify-center flex flex-col w-[100%] h-[30%]">
        <h2 className="text-3xl font-semibold text-black mb-4 text-center">
          Super test Form
        </h2>
        <h2 className="text-xl text-[#817DA4] mb-4 text-center">
          Initial Info
        </h2>
      </div>
      <div className="min-h-screen flex items-center justify-center">
      <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <div className="flex flex-row items-center">
            <div className="bg-[#87839E] w-4 h-4 rounded"></div>
            <div className="ml-2"> Initial Info</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#594BD9] my-2 w-4 h-4  rounded"></div>
            <div className="my-2 ml-2">Password Screen</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#C9C6E7] w-4 h-4  rounded"></div>
            <div className="ml-2"> Review</div>
          </div>
        </div>
        <div className="max-w-md w-full p-6 bg-[#817DA4] rounded-lg shadow-lg w-[80%] mr-[20%] items-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Input Password"
                className={`w-full px-3 py-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="flex justify-between">
                <div className="text-[#D8242A] mt-1">{formik.errors.password}</div>
                <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out'/>
              </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="block text-white">
                Repeat Password
              </label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Repeat Password"
                className={`w-full px-3 py-2 ${
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.repeatPassword &&
                formik.errors.repeatPassword && (
                  <div className="flex justify-between">
                  <div className="text-[#D8242A] mt-1">{formik.errors.repeatPassword}</div>
                  <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out'/>
                </div>
                )}
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 ${
                formik.isValid ? "bg-[#ffffff]" : "bg-[#A3A0C0] text-[#8B86B0]"
              } text-xl font-semibold rounded`}
              disabled={!formik.isValid}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage2;
