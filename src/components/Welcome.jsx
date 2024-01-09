import { Alert } from "react-bootstrap";

const Welcome = () => (
  <>
    {["success"].map((variant) => (
      <Alert key={variant} variant={variant} className="text-center">
        <h4>Check out for our Christmas sales!</h4>
      </Alert>
    ))}
  </>
);

export default Welcome;
