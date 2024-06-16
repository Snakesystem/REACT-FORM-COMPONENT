import { useForm, useFieldArray, FieldErrors } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { useEffect } from "react";

let renderCount = 0;

type FormValue = {
  username: string;
  email: string;
  chanel: string;
  social:{
    twitter: string,
    facebook: string
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string
  } [];
  age: number;
  dob: Date;
};

export const YouTubeForm = () => {

  // example fetch api
  // const form = useForm<FormValue>({
  //   defaultValues: async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //     const data = await response.json();

  //     return {
  //       username: "Superman",
  //       email: data.email,
  //       chanel: ""
  //     }
  //   }
  // });

  const form = useForm<FormValue>({
    defaultValues: {
      username: "Superman",
      email: "",
      chanel: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumbers: ["", ""],
      phNumbers: [{number: ''}],
      age: 0,
      dob: new Date(),
    },
    mode: "all" // default onSubmit
    // masukan event handler javascript atau "all"
  });

  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form;

  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

  // console.log("touchedFields", touchedFields)
  // console.log("dirtyFields", dirtyFields)
  // console.log("isDirty", isDirty)
  // console.log("isValid", isValid)
  // console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})

  const { fields, append, remove } =  useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }

  const onError = (errors: FieldErrors<FormValue>) => {
    console.log("Form error", errors)
  } 

  const handleGetValues = () => {
    console.log("get val", getValues("social"))
    console.log("get val arr", getValues(["username", "social"]))
  }

  const handleSetValues = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  useEffect(() => {
    if(isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  useEffect(() => {
    const subcribtions = watch((value) => {
      // console.log(value)
    });

    return () => subcribtions.unsubscribe()
  }, [watch])

  // const watchForm = watch();

  renderCount++
  
  return (
    <div>
      <h1>Youtube Form ({renderCount/2})</h1>
      <h2>Watched value: </h2> 
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", { 
              required: "Username is required"
            })}/>
            <p className="error">{ errors.username?.message }</p>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", { 
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format"
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return fieldValue !== "admin@example.com" || "Enter a different email addres"
                },
                notBlackListed: (fieldValue) => {
                  return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
                  const data = await response.json();
                  return data.length == 0 || "Email already exist"
                }
              }
            })} />
            <p className="error">{ errors.email?.message }</p>
          </div>

          <div className="form-control">
            <label htmlFor="chanel">Chanel</label>
            <input type="text" id="chanel" {...register("chanel", {
              required: {
                value: true,
                message: "Chanel is required"
              }
            })} />
            <p className="error">{ errors.chanel?.message }</p>

          </div>

          <div className="form-control">
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" {...register("social.twitter", {
              disabled: watch("chanel") === "",
              required: "Enter twiter profile"
            })} />
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook</label>
            <input type="text" id="facebook" {...register("social.facebook")} />
          </div>

          <div className="form-control">
            <label htmlFor="primary-phone">Primary phone number</label>
            <input type="text" id="primary-phone" {...register("phoneNumbers.0")} />
          </div>

          <div className="form-control">
            <label htmlFor="secondary-phone">Secondary phone number</label>
            <input type="text" id="secondary-phone" {...register("phoneNumbers.1")} />
          </div>

          <div>
            <label htmlFor="">List of phone number</label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-control" key={field.id}>
                  <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                  {
                    index > 0 && (
                      <button type="button" onClick={() => remove(index)}>Remove</button>
                    )
                  }
                </div>
                )
              })}
              <button type="button" onClick={() => append({ number: "" })}>Add phone number</button>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required"
              }
            })} />
            <p className="error">{ errors.age?.message }</p>

          </div>

          <div className="form-control">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of Birth is required"
              }
            })} />
            <p className="error">{ errors.dob?.message }</p>

          </div>

          {/* <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button> */}
          <button disabled={!isDirty || isSubmitting}>Submit</button>
          <button type="button" onClick={() => reset()}>Reset</button>
          {/* <button type="button" onClick={() => trigger("chanel")}>Validate</button> */}
          <button type="button" onClick={() => trigger()}>Validate</button>
          <button type="button" onClick={handleGetValues}>Get Values</button>
          <button type="button" onClick={handleSetValues}>Set Values</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
