import { ErrorHandlerResponse } from "@/CommandLine/definitions";

const ErrorCommandOutput = ({ response }: { response: ErrorHandlerResponse }) => {
  return (
    <div className="w-full text-pink-700">
      <p>{response.error}</p>
    </div>
  )
}

export default ErrorCommandOutput
