"use client"
import { 
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
 } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilePlus2, Loader } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { toast, useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters."})
            .max(50, {message: "Name must be at most 50 characters."}),
    description: z.string().min(10, {message: "Name must be at least 10 characters."})
            .max(250, {message: "Name must be at most 250 characters."}),
});

type PageFormData = z.infer<typeof formSchema>;

const NewPageButton = () => {

    const toast = useToast();

    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false)

    const form = useForm<PageFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
        }
    })

    const onSubmit = async(values: PageFormData)=> {
        const { name, description } = values;

        const pageId = 10;

        router.push(`/admin/page-designer/${pageId}`);

        setOpen(false);
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant={"default"}>
                <FilePlus2 className="mr-2" />
                New Page
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Create your page</DialogTitle>
                <DialogDescription>
                    This is internal information only. You will design de page afterwards
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-2">
                <Form {...form}>
                    <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}> 
                        <FormField control={form.control} name="name" render={({field})=> (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name your page.." {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="description" render={({field})=> (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormDescription>
                                    <Textarea placeholder="Description your page.." {...field} />
                                </FormDescription>
                            </FormItem>
                        )} />
                    </form>
                </Form>
            </div>
            <DialogFooter>
                <Button onClick={form.handleSubmit(onSubmit)} className="w-full mt-4" disabled={form.formState.isSubmitting}>
                    {!form.formState.isSubmitting ? (<span>Create</span>) : (<span><Loader className="animate-spin" /> Submiting</span>)}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default NewPageButton