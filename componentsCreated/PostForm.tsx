import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { CreatePostSchema } from "~/lib/validations"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import Editor from "./editor"
import { useRef } from "react"
import type { MDXEditorMethods } from "@mdxeditor/editor"


const PostForm = () => {

    const editorRef = useRef<MDXEditorMethods>(null)

    const form = useForm({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: '',
            subTitle: '',
            miniSubTitle: '',
            content: '',
            tags: []
        }
    });

    const handleCreatePost = async () => {
        
    }

  return (
        <Form {...form}>
            <form className="flex w-full flex-col gap-10" onSubmit={form.handleSubmit(handleCreatePost)}>
                <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                    <FormItem className="flex w-full flex-col">
                        <FormLabel className="paragraph-semibold text-dark-100">
                            <span className="text-dark-100 font-bold p-16-semibold">Title</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input className="paragraph-regular text-dark-100 no-focus min-h-[56px] rounded-1.5 border font-bold text-3xl" 
                            {...field}/>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                            Write the main title for your post, which is shown at the top of your post.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="subTitle"
                render={({field}) => (
                    <FormItem className="flex w-full flex-col">
                        <FormLabel className="paragraph-semibold text-dark-100">
                            <span className="text-dark-100 font-bold p-16-semibold">Sub Title</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input className="paragraph-regular text-dark-100 no-focus min-h-[56px] rounded-1.5 border font-bold text-3xl" 
                            {...field}/>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                            Write Sub Title title for your post.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="miniSubTitle"
                render={({field}) => (
                    <FormItem className="flex w-full flex-col">
                        <FormLabel className="paragraph-semibold text-dark-100">
                            <span className="text-dark-100 p-16-semibold text-sm font-semibold sm:text-sm">Title Description</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input className="paragraph-regular text-dark-100 no-focus min-h-[56px] rounded-1.5 border font-bold text-3xl" 
                            {...field}/>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                            Write short description for your post. For example: Adventureous Hiking to Mount Hambericho-777
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="content"
                render={({field}) => (
                    <FormItem className="flex w-full flex-col">
                        <FormLabel className="paragraph-semibold text-dark-100">
                            <span className="text-dark-100 font-semibold p-16-semibold text-sm">Content</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                           <Editor editorRef={editorRef} value={field.value} fieldChange={field.onChange}/>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                            Write detailed explanation of the body or content of your post.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="tags"
                render={({field}) => (
                    <FormItem className="flex w-full flex-col gap-3">
                        <FormLabel className="paragraph-semibold text-dark-100">
                            <span className="text-dark-100 font-bold p-16-semibold">Tags</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                            <div>
                                <Input className="paragraph-regular text-dark-100 min-h-[56px] rounded-1.5 border font-semibold text-sm sm:text-sm" 
                            {...field} placeholder="Add Tags..."/>
                            Tags
                            </div>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                           Add up to 4 tags to describe what your post is about. You need to press enter to add a tag.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <div className="mt-16 flex justify-end">
                    <Button type="submit" className=" !w-full sm:w-[240px] button-class !h-11 !md:w-[240px]">
                        Post
                    </Button>
                </div>
            </form>
        </Form>
  )
}

export default PostForm