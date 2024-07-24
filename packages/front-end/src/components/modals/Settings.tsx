import { ButtonVariant } from "../CustomButton";
import { SwitchTab } from "../ui/sections/Switch";

function Settings() {
  return (
    <div className="flex-column m-auto w-full">
      <div className="m-auto mb-4 flex flex-col gap-2 text-base">
        <SwitchTab id="1" label="Enable Audio" />
        <SwitchTab id="2" label="Show informational popup messages" />
        <SwitchTab id="3" label="Show error popup messages" />
      </div>

      <div className="m-auto pt-2">
        <ButtonVariant
          title="Disconnect Wallet"
          className="btn-variant btn-grey !w-64"
        />
      </div>
      <div className="m-auto mt-2 flex w-full flex-col text-center text-base">
        In case of connection problems:
        <div className="m-auto pt-2">
          <ButtonVariant
            title="Reset nonce"
            className="btn-variant btn-grey !w-64"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
