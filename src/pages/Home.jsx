import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUser(res);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col pt-14 h-[700px] px-32 items-center space-y-8">
        <p className="text-white font-mono text-4xl mt-5 font-bold">
          USER LIST
        </p>
        <table className="text-slate-50">
          <thead className="bg-fuchsia-900">
            <tr>
              <th className="border-2 border-solid border-fuchsia-900 px-2">
                No.
              </th>
              <th className="border-2 border-solid border-fuchsia-900 ">
                Name
              </th>
              <th className="border-2 border-solid border-fuchsia-900 ">
                Email
              </th>
              <th className="border-2 border-solid border-fuchsia-900 ">
                Password
              </th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            {user.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-fuchsia-300 text-black font-semibold"
                >
                  <td className="border-2 border-solid border-fuchsia-900 px-2">
                    {item.id}
                  </td>
                  <td className="border-2 border-solid border-fuchsia-900 px-3">
                    {item.name}
                  </td>
                  <td className="border-2 border-solid border-fuchsia-900 px-3">
                    {item.email}
                  </td>
                  <td className="border-2 border-solid border-fuchsia-900 px-3">
                    {item.password}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
