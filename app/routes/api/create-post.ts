// import {data, type ActionFunctionArgs} from "react-router";
// import { parseMarkdownToJson } from "~/lib/utils";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { appwriteConfig, tablesDB } from "~/appwrite/client";
// import { ID } from "appwrite";
// export const action = async ({ request }: ActionFunctionArgs) =>{
//     const {
//         postDetails,
//         imageUrls,
//         tags,
//         title,
//         subTitle,
//         titleDescription    
//     } = await request.json();

//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

//     try {

//         const prompt = `Convert the post to my blog in to JSON format.
//         postDetails: '${postDetails}',
//         imageUrls: '${imageUrls}',
//         tags: '${tags}',
//         title: '${title}',
//         subTitle: '${subTitle}',
//         titleDescription: '${titleDescription}'

//         I am creating a blog website to post data from the form. Return the post in a clean, non-markdown JSON format with the following data. Don't change any of the data but return the post in a clean, non-markdown JSON format with the following data :
//         {
//             "postDetails": "${postDetails}",
//             "imageUrls": "${imageUrls}",
//             "tags": "${tags}",
//             "title": "${title}",
//             "subTitle": "${subTitle}",
//             "titleDescription": "${titleDescription}"
//         }`;

//         const textResult = await genAI.getGenerativeModel({model: 'gemini-2.0-flash'})
//                         .generateContent([prompt])

//         const post = parseMarkdownToJson(textResult.response.text());
        
//         const result = await tablesDB.createRow({
//             databaseId: appwriteConfig.databaseId,
//             tableId: appwriteConfig.tripCollectionId,
//             rowId: ID.unique(),
//             data: {
//                 tripDetails: JSON.stringify(post),
//                 createdAt: new Date().toISOString(),
//             }
//         })

//         return data({ id: result.$id});
        
//     } catch (e) {
//         console.error('Error generating post', e)
//     }
// }