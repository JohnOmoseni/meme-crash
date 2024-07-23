import { ButtonVariant } from "@/components/CustomButton";

function PlaceBet() {
  return (
    <div
      className="card h-full w-full overflow-y-auto sm:min-w-[350px]"
      style={{ zoom: "80%" }}
    >
      <div className="flex-column h-full w-full">
        <div className="heading-bg !min-h-fit">
          <div className="heading-variant">No more bets</div>
        </div>

        <div className="scrollbar-thin relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden px-3">
          <ButtonVariant
            title="Select Wallet"
            className="mx-auto my-10 md:mt-[12%]"
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceBet;
