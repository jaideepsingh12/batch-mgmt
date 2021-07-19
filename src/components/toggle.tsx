import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-input"
      } relative inline-flex items-center h-4 rounded-full w-9 transition-all duration-200`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? "translate-x-6" : "translate-x-0"} ${
          enabled ? "bg-white" : "bg-blue-cork"
        } inline-block w-3 h-3 transform  rounded-full transition-all duration-200`}
      />
    </Switch>
  );
}
