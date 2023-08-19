import BeatLoader from "react-spinners/BeatLoader";

export interface LoadingPorps {
  loading: boolean;
}

const Loader: React.FC<LoadingPorps> = ({ loading }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <BeatLoader loading={loading} color="#d8737f" />
    </div>
  );
};

export { Loader };
