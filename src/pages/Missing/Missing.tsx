import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

export default function Missing() {
  return <ErrorComponent error={Error("This page is not valid.")} />;
}
