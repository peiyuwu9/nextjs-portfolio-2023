import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Files, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name can not be longer than 50 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(50, { message: "Email can not be longer than 50 characters" })
    .email("Email is invalid"),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function ContactMe() {
  const [open, setOpen] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onClick() {
    if (navigator) navigator.clipboard.writeText("peiyuwu9@gmail.com");
    setOpen(true);
    setTimeout(() => setOpen(false), 700);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Fistname Lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@mail.com" {...field} />
              </FormControl>
              <div className="text-sm">
                <span>Example: peiyuwu9@gmail.com</span>{" "}
                <TooltipProvider>
                  <Tooltip open={open}>
                    <TooltipTrigger asChild>
                      <Files
                        className="inline hover:cursor-pointer h-5 w-5"
                        onClick={onClick}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copied to clipboard!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Send me message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" variant={"secondary"}>
            <Send className="h-4 w-4 mr-2" />
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
