import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "must be 6 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "must be 6 characters or more")
        .matches(/[0-9]/, "Password must contain number")
        .matches(/[a-z]/, "Password must contain lowercase letter")
        .matches(/[A-Z]/, "Password must contain uppercase letter")
        .matches(/[^\w]/, "Password must contain symbol")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/user", {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          alert("data input success! \n" + JSON.stringify(values, null, 2));
          console.log(res);
          window.location.replace("/home");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  });

  return (
    <>
      <div className="flex flex-col pt-14 h-[700px] px-32 items-center space-y-8">
        <div className="w-2/5 bg-white mt-28 rounded-lg h-3/5 flex flex-col items-center p-5">
          <p className="font-semibold text-2xl mt-5 mb-10">Sign Up</p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col font-semibold space-y-1"
          >
            <div className="flex justify-between">
              <label htmlFor="name">Name</label>
              <div className="flex flex-col">
                <input
                  className="border border-solid border-slate-500 rounded-lg h-7 p-2"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-600 font-mono">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-between">
              <label htmlFor="email">Email</label>
              <div className="flex flex-col">
                <input
                  className="border border-solid border-slate-500 rounded-lg h-7 p-2"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 font-mono">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex space-x-7">
              <label className="mb-5" htmlFor="password">
                Password
              </label>
              <div className="flex flex-col mb-5">
                <input
                  className=" border border-solid border-slate-500 rounded-lg h-7 p-2"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 font-mono">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="bg-violet-500 py-2 w-[100px] mx-auto rounded-xl text-white hover:opacity-80 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
