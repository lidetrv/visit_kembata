import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { CreatePostSchema } from "~/lib/validations"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import Editor from "./editor"
import { useRef } from "react"
import type { MDXEditorMethods } from "@mdxeditor/editor"
import type { Z } from "node_modules/react-router/dist/development/context-jKip1TFB.mjs"
import { ChipDirective, ChipListComponent, ChipsDirective } from "@syncfusion/ej2-react-buttons"
import { cn, getFirstWord, getTagIcons } from "~/lib/utils"
import { index } from "@react-router/dev/routes"
import type z from "zod"
import { appwriteConfig, tablesDB } from "~/appwrite/client"
import { ID } from "appwrite"
import postDetail from "~/routes/admin/post-detail"
import { useNavigate } from "react-router"
import { created } from "@syncfusion/ej2-react-grids"


const PostForm = () => {
    const navigate = useNavigate();

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


    const handleInputKeyDown = (e : React.KeyboardEvent<HTMLInputElement> , field: {value: string[]}) =>{
        if(e.key === 'Enter'){
            e.preventDefault()
            const tagInput = e.currentTarget.value.trim();
            const iconClass = getTagIcons(tagInput);

            if(tagInput && tagInput.length < 15 && !field.value.includes(tagInput)){
                form.setValue("tags",[...field.value, tagInput]);
                e.currentTarget.value ="";
                form.clearErrors("tags");
            } else if(field.value.includes(tagInput)){
                form.setError('tags',{
                    type: "manual",
                    message: "Tag already exists"
                })
            }
        }
    }

    const handleCreatePost = async (data: z.infer<typeof CreatePostSchema>) => {

        try {
            const payload = {
                    postDetails: data.content,
                    imageUrls: data.tags,
                    tags: data.tags,
                    title: data.title,
                    subTitle: data.subTitle,
                    titleDescription: data.miniSubTitle,
                    createdAt: new Date().toISOString(),
                    };
            // Post the data to Appwrite
            const response = await tablesDB.createRow({
                databaseId: appwriteConfig.databaseId,
                tableId: appwriteConfig.tripCollectionId,
                rowId: ID.unique(), // Use a unique ID for the new document
                data: {
                    postDetails: JSON.stringify(payload),
                    // imageUrls: JSON.stringify(payload.tags),
                    // tags: JSON.stringify(payload.tags),
                    // title: JSON.stringify(payload.title),
                    // subTitle: JSON.stringify(payload.subTitle),
                    // titleDescription: JSON.stringify(payload.titleDescription),
                    // $createdAt: new Date().toISOString(),
                    
                } // The validated data from the form
        });

            // const response = await fetch('/api/create-post', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         postDetails: data.content,
            //         title: data.title,
            //         subTitle: data.subTitle,
            //         tags: data.tags,
            //         titleDescription: data.miniSubTitle,
            // })}) ;
            
            // const result: CreateTripResponse = await response.json();
            // if(result?.id) navigate('/posts/${result.id}');
            // else console.error('Failed to get post ID from response');
            
            console.log('Post created successfully:', response);
            // Optional: Reset the form or show a success message
            form.reset();
            alert('Post created successfully!');

        } catch (error) {
            console.error('Error creating post:', error);
            // Optional: Show an error message to the user
            alert('Failed to create post. Please try again.');
        }
    }
    const handleTagRemove = (e: any) => {
        // e.data.text contains the text of the deleted chip.
        // The Syncfusion event object for a deletion on a list of strings
        // provides the text property.
        const deletedTagText = e.data.text;
        
        // Get the current tags array from the form's state
        const currentTags = form.getValues("tags");
        
        // Filter out the deleted tag
        const updatedTags = currentTags.filter(tag => tag !== deletedTagText);
        
        // Update the form's state with the new array
        form.setValue("tags", updatedTags, { shouldDirty: true });
    };
    // const handleTagRemove = (tag: string, field:{value: string[]}) => {
    //     const newTags = field.value.filter((t) => t !== tag);
    //     form.setValue("tags", newTags);
    //     if(newTags.length === 0){
    //         form.setError("tags",{
    //             type: "manual",
    //             message: "Tags are required!"
    //         });
    //     }
    // }

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
                        <FormDescription className="text-gray-100 mt-2.5">
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
                            <span className="lg:text-dark-100 font-bold p-16-semibold" text-sm>Sub Title</span> <span className="text-red-700">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input className="paragraph-regular text-dark-100 no-focus min-h-[56px] rounded-1.5 border font-bold text-3xl" 
                            {...field}/>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5 sm:text-xs">
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
                        <FormDescription className="text-sm text-gray-100 mt-2.5 sm:text-xs">
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
                             placeholder="Add Tags..."
                            onKeyDown={(e) => handleInputKeyDown(e,field)}/>
                            {field.value.length > 0 && (
                                <div className="flex-start mt-2.5 flex-wrap gap-2.5">
                                    <ChipListComponent 
                                    id='travel-chip'
                                    enableDelete={true}
                                    deleted={handleTagRemove}>
                                                    <ChipsDirective>
                                                        {field?.value?.map((tag: string,index) => (
                                                        <ChipDirective key={index}
                                                            trailingIconCss="e-dlt-btn"
                                                            text={getFirstWord(tag)}
                                                            cssClass={cn('iconClass',index === 1 ? '!bg-pink-50 !text-pink-500 !font-medium':'!bg-success-50 !text-success-700 !font-medium' )}/>    
                                                            ))}
                                                    </ChipsDirective>
                                                </ChipListComponent>
                                </div>
                            )}
                            </div>
                        </FormControl>
                        <FormDescription className="text-sm text-gray-100 mt-2.5">
                           Add up to 4 tags to describe what your post is about. You need to press enter to add a tag.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <div className="mt-16 flex justify-end">
                    <Button type="submit" className=" !w-full sm:w-[240px] button-class !h-11 !md:w-[240px] cursor-pointer">
                        Post
                    </Button>
                </div>
            </form>
        </Form>
  )
}

export default PostForm