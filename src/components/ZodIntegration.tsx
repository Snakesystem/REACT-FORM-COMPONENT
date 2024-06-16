import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
    username: z.string().nonempty(""),
    email: z.string().nonempty("").email("Email is not format"),
    chanel: z.string().nonempty(""),
})

type FormValue = {
  username: string;
  email: string;
  chanel: string;
};

export const ZodIntegration = () => {

  const form = useForm<FormValue>({
    defaultValues: {
      username: "",
      email: "",
      chanel: "",
    },
    resolver: zodResolver(schema),
    mode: "all"
});

  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }
  
  return (
    <div>
      <h1>Zod Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username")}/>
            <p className="error">{ errors.username?.message }</p>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            <p className="error">{ errors.email?.message }</p>
          </div>

          <div className="form-control">
            <label htmlFor="chanel">Chanel</label>
            <input type="text" id="chanel" {...register("chanel")} />
            <p className="error">{ errors.chanel?.message }</p>

          </div>

          <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
