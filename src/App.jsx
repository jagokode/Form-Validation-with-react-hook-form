import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  console.log("Error:", errors);

  return (
    <div className="App">
      <form
        autoComplete="off"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <h2>Buat akun</h2>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username harus diisi",
            minLength: {
              value: 3,
              message: "Username minimal 3 karakter",
            },
            maxLength: {
              value: 30,
              message: "Username maksimal 30 karakter",
            },
          })}
        />
        <p>{errors.username?.message}</p>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email harus diisi",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email harus benar",
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password harus diisi",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message:
                "Password harus minimal 6 karakter, dan mengandung 1 uppercase, 1 lowercase, 1 angka dan 1 karakter spesial ",
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <select
          {...register("gender", { required: "Gender harus pilih salah satu" })}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <p>{errors.gender?.message}</p>
        <input type="submit" value={"Daftar"} />
      </form>
    </div>
  );
}

export default App;
