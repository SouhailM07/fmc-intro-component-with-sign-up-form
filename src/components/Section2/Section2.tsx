import "./section2.css";
// assets
// shadcn-ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  username2: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email not valid",
  }),
  password: z.string().min(8, {
    message: "Password must contain at least 8 letters",
  }),
});

export default function Section2() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(_values);
  }
  interface arrOfForms_type {
    placeHolder: string;
    formType: string;
  }
  let arrOfForms: arrOfForms_type[] = [
    { placeHolder: "username", formType: "username" },
    { placeHolder: "Last Name", formType: "username2" },
    { placeHolder: "Email Address", formType: "email" },
    { placeHolder: "Password", formType: "password" },
  ];

  return (
    <>
      <section className=" space-y-5">
        <div className="w-full bg-Blue text-[0.6rem] shadow-[1px_4px_3px_2px] shadow-DarkBlue max-sm:px-[3rem] max-sm:text-[0.7rem] text-white py-[0.6rem] rounded-sm text-center">
          <b>Try it free 7 days </b> then $20/mo. thereafter
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 px-[1rem] bg-white rounded-lg py-[1.3rem]"
          >
            {arrOfForms.map((e: any, i) => {
              return (
                <FormField
                  key={i}
                  control={form.control}
                  name={e.formType}
                  render={({ field }) => (
                    <FormItem>
                      {/* {errors.username && <p>shadow</p>} */}
                      <FormControl className=" rounded font-bold h-[2.4rem]">
                        <Input
                          placeholder={e.placeHolder}
                          {...field}
                          className={`text-[0.55rem]`}
                        />
                      </FormControl>
                      <FormMessage className="text-[0.5rem] font-bold text-red-500"></FormMessage>
                    </FormItem>
                  )}
                />
              );
            })}
            <button
              type="submit"
              className="bg-Green w-full rounded-sm text-white py-[0.6rem] text-[0.7rem] md:font-bold shadow-[1px_3px_2px_2px] shadow-green-900"
            >
              CLAIM YOUR FREE TRAIL
            </button>
            <p className="text-[0.5rem] text-center text-GrayishBlue">
              By clicking the button, you are agreeing to our
              <span className="text-Red font-bold"> Terms and Services</span>
            </p>
          </form>
        </Form>
      </section>
    </>
  );
}
