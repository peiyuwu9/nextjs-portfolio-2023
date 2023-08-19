import BeatLoader from "react-spinners/BeatLoader";

export interface LoadingPorps {
  loading: boolean;
}

const Loader: React.FC<LoadingPorps> = ({ loading }) => {
  return (
    <div className="w-screen h-screen absolute inset-2/4">
      <BeatLoader loading={loading} color="#d8737f" />
    </div>
  );
};

export { Loader };
