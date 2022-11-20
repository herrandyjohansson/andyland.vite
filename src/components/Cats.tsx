import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Api from "../utils/api";
import { FaCat } from "react-icons/fa";
interface Props {}

export const Cats: React.FC<Props> = () => {
  const { data, isLoading, refetch, isFetching } = useQuery<any>(
    ["cats"],
    async () => Api.fetchFunnyCat(),
    {
      refetchInterval: 1000 * 60 * 60,
    }
  );

  if (isLoading)
    return (
      <div className="bg-grey-800 rounded-3xl p-4 mt-3">
        <div className="w-12"></div>
        <div className="flex flex-row gap-3 align-middle">
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse  h-12 w-16"></span>
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse  h-12 w-16"></span>
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse  h-12 w-16"></span>
        </div>
      </div>
    );

  if (isFetching || isLoading)
    return (
      <div className="bg-grey-800 rounded-3xl cats mt-3">
        <div className="animate-pulse flex justify-center h-full items-center">
          <FaCat size={200} />
        </div>
      </div>
    );

  return (
    <div
      className="bg-grey-800 rounded-3xl mt-3"
      onClick={() => {
        refetch();
      }}
    >
      <img className="cats object-cover w-full rounded-3xl" src={data[0].url} />
    </div>
  );
};
