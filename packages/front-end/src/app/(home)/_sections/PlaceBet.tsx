import { ButtonVariant } from "@/components/CustomButton";

function PlaceBet() {
  return (
    <div
      className="card h-full min-h-[200px] w-full overflow-y-auto sm:min-w-[350px]"
      style={{ zoom: "80%" }}
    >
      <div className="flex-column h-full w-full">
        <div className="heading-bg">
          <div className="heading-variant">No more bets</div>
        </div>

        <div className="scrollbar-thin relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
          <ButtonVariant title="Select Wallet" className="mx-auto my-8" />
        </div>
      </div>
    </div>
  );
}

export default PlaceBet;
