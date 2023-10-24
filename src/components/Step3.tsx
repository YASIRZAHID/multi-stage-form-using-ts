import React from "react";
type Props={
  formData:{
    username?:string,
    email?:string,
    phoneNumber?:string,
    country?:string,
    password?:string
  },
}
const DisplayFormValues = (props:Props) => {
  const {formData}= props
  const {username, email, phoneNumber, country } = formData
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
  };

  return (
    <div className=" bg-gradient-to-b from-purple-50 via-blue-50 to-purple-50">
      <div className="pb-10 absolute text-center items-center justify-center flex flex-col w-[100%] h-[30%]">
        <h2 className="text-3xl font-semibold text-black mb-4 text-center">
          Super test Form
        </h2>
        <h2 className="text-xl text-[#817DA4] mb-4 text-center">
          Review Screen
        </h2>
      </div>
      <div className="min-h-screen flex items-center justify-center">
      <div className="relative -translate-x-[20%] -translate-y-[180%] h-[10%] w-[20%]">
          <div className="flex flex-row items-center">
            <div className="bg-[#87839E] w-4 h-4 rounded"></div>
            <div className="ml-2"> Initial Info</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#87839E] my-2 w-4 h-4  rounded"></div>
            <div className="my-2 ml-2">Password Screen</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-[#594BD9] w-4 h-4  rounded"></div>
            <div className="ml-2"> Review</div>
          </div>
        </div>
        <div className="max-w-md p-6 bg-[#817DA4] rounded-lg shadow-lg w-[80%] mr-[20%]">
          <form onSubmit={handleSubmit}>

            <div className="mb-4 flex flex-row w-full px-1 pb-3 justify-between">
            <div className="text-white text-left">
              Username
            </div>
              <div className="  text-white  text-right">
                {username}
              </div>
            </div>
            <div className="mb-4 flex flex-row w-full px-1 pb-3 justify-between">
            <div className="text-white text-left">
              Email
            </div>
              <div className="  text-white  text-right">
                {email}
              </div>
            </div>
            <div className="mb-4 flex flex-row w-full px-1 pb-3 justify-between">
            <div className="text-white text-left">
              Phone
            </div>
              <div className="  text-white  text-right">
                {phoneNumber}
              </div>
            </div>
            <div className="mb-4 flex flex-row w-full px-1 pb-3 justify-between">
            <div className="text-white text-left">
              Country
            </div>
              <div className="  text-white  text-right">
                {country}
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 
               bg-[#ffffff] text-[#8B86B0]
             text-xl font-semibold rounded`}
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DisplayFormValues;
