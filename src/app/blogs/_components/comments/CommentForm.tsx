"use client";
import { createComment } from "@lib/actions";
import SubmitButton from "@ui/SubmissionButton";
import TextArea from "@ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
type CommentFormProps = {
  postId: string;
  parentId: string | null;
  onClose: () => void;
};
const initialState: { message: string; error: string } = {
  message: "",
  error: "",
};
const CommentForm = ({ postId, parentId, onClose }: CommentFormProps) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  useEffect(() => {
    const { message, error } = state;

    if (message || error) {
      if (message) toast.success(message);
      if (error) toast.error(error);

      if (message) onClose();
    }
  }, [state, onClose]);

  return (
    <>
      <div>
        <div className="flex justify-center mt-4">
          <div className="max-w-md  w-full">
            <form
              // action={createComment.bind(null, postId, parentId)}
              action={async (formData) => {
                await formAction({ formData, postId, parentId });
              }}
              className="space-y-7"
            >
              <TextArea
                name="text"
                label="متن نظر"
                onChange={(e) => setText(e.target.value)}
                value={text}
                isRequired
              />
              <SubmitButton>تایید</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentForm;

// "use client";

// import Loading from "@/components/ui/Loading";
// import SubmitButton from "@/components/ui/SubmissionButton";
// import TextArea from "@/components/ui/TextArea";
// import { createComment } from "@/lib/actions";
// import { useEffect, useRef, useState } from "react";
// import { useFormState } from "react-dom";
// import toast from "react-hot-toast";

// const initialState = {
//   error: "",
//   message: "",
// };

// const CommentForm = ({ postId, parentId, onClose }) => {
//   const [text, setText] = useState("");
//   const [state, formAction] = useFormState(createComment, initialState);
//   const ref = useRef(null);
//   let isLoading = false;

//   useEffect(() => {
//     if (state?.message) {
//       toast.success(state.message);
//       onClose();
//     }
//     if (state?.error) {
//       toast.error(state.error);
//     }
//   }, [state]);

//   // const createCommentWithData = createComment.bind(null, postId, parentId);
//   return (
//     <div>
//       <div className="flex justify-center mt-4">
//         <div className="max-w-md  w-full">
//           <form
//             ref={ref}
//             className="space-y-7"
//             // action={createComment.bind(null, postId, parentId)}
//             action={async (formData) => {
//               await formAction({ formData, postId, parentId });
//               ref?.current?.reset();
//             }}
//           >
//             <TextArea
//               name="text"
//               label="متن نظر"
//               value={text}
//               isRequired
//               onChange={(e) => setText(e.target.value)}
//             />
//             <div className="mt-8">
//               {isLoading ? (
//                 <div>
//                   <Loading />
//                 </div>
//               ) : (
//                 <SubmitButton type="submit" className="w-full">
//                   {parentId ? "ثبت پاسخ" : "ثبت نظر"}
//                 </SubmitButton>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CommentForm;
