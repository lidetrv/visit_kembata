import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  toolbarPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  Separator,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CreateLink,
  InsertImage,
  InsertThematicBreak,
  InsertTable,
  InsertCodeBlock,
  BlockTypeSelect,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  imagePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
} from '@mdxeditor/editor';
import type { ForwardedRef } from 'react';
import "@mdxeditor/editor/style.css"
import "./markdown-editor.css"

interface Props {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
}

/**
 * A function that handles the image upload.
 * It is passed to the `imagePlugin` and is called when a user
 * selects an image to upload from the toolbar.
 *
 * @param {File} file - The image file selected by the user.
 * @returns {Promise<string>} - A promise that resolves with the public URL of the uploaded image.
 */
const imageUploadHandler = async (file: any) => {
  // This is a placeholder. You need to replace this with your actual
  // logic to upload the file to a server or a service like Cloudinary, AWS S3, etc.

  // Example using a simple FormData API call:
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('https://your-backend-api.com/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Image upload failed');
    }

    const result = await response.json();
    
    // Assuming your backend returns an object with a 'url' property
    return result.url; 
  } catch (error) {
    console.error('Upload error:', error);
    // You must return a URL string, even on error. A placeholder or empty string is fine.
    return 'https://example.com/placeholder-image-on-error.jpg';
  }
};

const Editor = ({value, editorRef,fieldChange, ...props}: Props) => {
  return (
    <div>
    <MDXEditor
    markdown={value}
    className='bg-slate-100 h-auto w-full rounded-2xl MDXEditor'
    onChange={fieldChange}
    plugins={[
      headingsPlugin(),
      listsPlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      quotePlugin(),
      tablePlugin(),
      imagePlugin({
        imageUploadHandler: imageUploadHandler,
      }),
      thematicBreakPlugin(),
      markdownShortcutPlugin(),
      codeBlockPlugin({defaultCodeBlockLanguage:""}),
      codeMirrorPlugin({
        codeBlockLanguages: {
          css: "css",
          html: "html",
          txt: "txt",
          sql: "sql",
          saas: "saas",
          scss: "scss",
          bash: "bash",
          json: "json",
          js: "javascript",
          ts: "typescript",
          "": "unspecified",
          tsx: "Typescript (React)",
          jsx: "Javascript (React)"
        },
        autoLoadLanguageSupport: true,
      }),
      diffSourcePlugin({viewMode: 'rich-text', diffMarkdown: ''}),
      toolbarPlugin({
        toolbarContents: () =>(
          <ConditionalContents
          options={[
            {
              when: (editor) => editor?.editorType === 'codeblock',
              contents: () => <ChangeCodeMirrorLanguage/>
            },
            {
              fallback: () => (
                <>
                  <UndoRedo/>
                  <Separator/>
                  <BoldItalicUnderlineToggles/>
                  <Separator/>
                  <ListsToggle/>
                  <Separator/>
                  <CreateLink/>
                  <Separator/>
                  <InsertImage/>
                  <Separator/>
                  <InsertTable/>
                  <Separator/>
                  <InsertThematicBreak/>
                  <Separator/>
                  <InsertCodeBlock/>
                  <Separator/>
                  <BlockTypeSelect/>
                </>
              )
            }
          ]}/>
        )
      })
    ]}
    {...props}
    ref={editorRef}/>
    </div> 
  )
}

export default Editor;