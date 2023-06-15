import Ratings from "./Ratings"
import BookMark from "./BookMark"
import Publisher from "./Publisher"

interface Props {
  avgRating: number;
  publisher: {
    _id: string;
    name: string;
    picture: string;
  },
  updatedAt: Date;
  recipeId: string;
  isFavourited: boolean;
}

const RecipeDetailsNav = (props: React.PropsWithoutRef<Props>) => {
  return (
    <div className="flex justify-between items-center md:mt-2">
      <div className="flex flex-col gap-2">
        <Publisher publisher={props.publisher} updatedAt={props.updatedAt} />
        <Ratings avgRating={props.avgRating} />
      </div>
      <BookMark recipeId={props.recipeId} isFavourited={props.isFavourited} />
    </div>
  )
}

export default RecipeDetailsNav