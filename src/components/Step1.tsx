import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { allCountries } from "./country";
import {BsFillExclamationSquareFill}  from 'react-icons/bs'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(12, "Username must be at most 12 characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid email address"
    ),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^(?:\+?\d{1,3}\s?)?(?:\d{10}|\d{3}[-\.\s]?\d{3}[-\.\s]?\d{4})$/,
      "Invalid phone number"
    ),
  country: yup
    .string()
    .required("Country is required")
    .matches(
      /^(?!.*\bSelect\b)/, // Use negative lookahead to ensure "SELECT" is not present
      "Country is required"
    ),
});

const mappedArray = allCountries.map(
  (country) => `${country.code} ${country.name}`
);
// const mappedArray = allCountries.map(country => `<img src="${country.flag_1x1}" alt="${country.name} flag" /> ${country.code} ${country.name}`);

type Props={
  formData:any,
  setFormData:any,
  nextStep:any
}

const SignupPage = (props:Props) => {
  const {formData,setFormData,nextStep}= props
    const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      country: "",
    },
    initialErrors: {
      username: "",
    },
    validationSchema,
    onSubmit: (values) => {
    const { username, email, phoneNumber, country } = values;
    setFormData({ ...formData, username: username, email: email, phoneNumber: phoneNumber, country: country });
    nextStep();
      console.log("Form submitted with values:", values);
    },
  });

  // const [Allow, setAllow] = useState(false);
  // const textColorClass = Allow ? 'text-[#A3A0C0]' : 'text-[#000000]';
  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <div className="pb-10 absolute text-center items-center justify-center flex flex-col w-[100%] h-[30%]">
        <h2 className="text-3xl font-semibold text-black mb-4 text-center">
          Super test Form
        </h2>
        <h2 className="text-xl text-[#817DA4] mb-4 text-center">Initial Info</h2>
      </div>
      <div className="min-h-screen flex flex-row items-center justify-center">
        <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <div className="flex flex-row items-center">
            <div className="bg-[#594BD9] w-4 h-4 rounded"></div>
            <div className="ml-2"> Initial Info</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#C9C6E7] my-2 w-4 h-4  rounded"></div>
            <div className="my-2 ml-2">Password Screen</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#C9C6E7] w-4 h-4 rounded"></div>
            <div className="ml-2"> Review</div>
          </div>
        </div>
        <div className="max-w-md p-6 bg-[#817DA4] rounded-lg shadow-lg bg-brand w-[80%] mr-[20%] ">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Input Username"
                className={`w-full px-3 py-2 ${
                  formik.touched.username && formik.errors.username
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="flex justify-between">
                  <div className="text-[#D8242A] mt-1">{formik.errors.username}</div>
                  <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out'/>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input Email"
                className={`w-full px-3 py-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="flex justify-between">
                <div className="text-[#D8242A] mt-1">{formik.errors.email}</div>
                <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out'/>
              </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Input Phone Number"
                className={`w-full px-3 py-2 ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="flex justify-between">
                <div className="text-[#D8242A] mt-1">{formik.errors.phoneNumber}</div>
                <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-2 -translate-y-7 transition-all duration-300 ease-in-out'/>
              </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-white">
                Country
              </label>
              <select
                id="country"
                name="country"
                className={`w-full px-3 py-2 ${
                  formik.touched.country && formik.errors.country
                    ? "border-[#D8242A]"
                    : "border-gray-600"
                } rounded`}
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {mappedArray.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                    {/* <img src='./1x1/ac.svg' width={100} height={100} alt='' /> */}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="flex justify-between">
                <div className="text-[#D8242A] mt-1">{formik.errors.country}</div>
                <BsFillExclamationSquareFill className='text-[#D8242A] text-right mr-5 -translate-y-7 transition-all duration-300 ease-in-out'/>
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

export default SignupPage;
