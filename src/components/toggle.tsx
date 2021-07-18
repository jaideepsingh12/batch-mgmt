import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-5 rounded-full w-11 transition-all duration-200`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? "translate-x-6" : "translate-x-1"} ${
          enabled ? "bg-white" : "bg-blue-cork"
        } inline-block w-4 h-4 transform  rounded-full transition-all duration-200`}
      />
    </Switch>
  );
}
