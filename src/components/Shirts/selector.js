import { Container} from "semantic-ui-react";

export default function Select ({ children }) {
  return (<Container style={{ margin: 20 }}>
    {children}
  </Container>
  )
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
