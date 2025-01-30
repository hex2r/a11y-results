import { Panel } from "../ui/Panel";
import PrimaryTreeNavigation from "../TreeNavigation/PrimaryTreeNavigation";

export default function Sidebar() {
  return (
    <Panel label="Site Tree">
      <PrimaryTreeNavigation />
    </Panel>
  );
}
