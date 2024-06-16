import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

export default function MuiLoginForm() {

    type FormValues = {
        email: string,
        password: string,
    }

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { register, handleSubmit, formState: { errors }, control } = form;

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

  return (
    <div>
        <h1>Login</h1>
        <form noValidate onSubmit={(handleSubmit(onSubmit))}>
            <Stack spacing={2} width={400}>
                <TextField label="Email" type="email" {...register("email", {
                    required: "Email is required"
                })} error={!!errors.email} helperText={errors.email?.message}/>
                <TextField label="Password" type="password" {...register("password", {
                    required: "Password is required"
                })} error={!!errors.password} helperText={errors.password?.message}/>
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </Stack>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
