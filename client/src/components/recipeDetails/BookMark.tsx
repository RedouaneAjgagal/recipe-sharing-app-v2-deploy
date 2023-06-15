import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import bookmarkRecipe from "../../features/bookmarkRecipe";
import { useMutation } from "@tanstack/react-query";

interface Props {
    recipeId: string;
    isFavourited: boolean;
}

const BookMark = (props: React.PropsWithoutRef<Props>) => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: () => bookmarkRecipe(props.recipeId),
        onError: () => {
            navigate("/login");
        }
    })

    const bookmarkHandler = () => {
        mutation.mutate();
    }

    return (
        <button onClick={bookmarkHandler} className="flex justify-center items-center w-12 h-12  bg-white rounded-full shadow-xl text-amber-900 text-[1.55rem]">
            {mutation.isSuccess ?
                mutation.data.added ? <BsBookmarkFill /> : <BsBookmark />
                :
                props.isFavourited ? <BsBookmarkFill /> : <BsBookmark />
            }
        </button>
    )
}

export default BookMark