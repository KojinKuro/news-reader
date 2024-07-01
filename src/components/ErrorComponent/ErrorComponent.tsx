import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router";
import "./ErrorComponent.css";

export default function ErrorComponent({ error }: { error: Error }) {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="error-component">
      <div>
        {error.name}: {error.message}
      </div>
      <button
        onClick={() => {
          navigate("/");
          resetBoundary();
        }}
      >
        Return home
      </button>
    </div>
  );
}
