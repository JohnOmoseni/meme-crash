import { columns } from "@/components/table/columns";
import { playerboard } from "@/components/table/data";
import { DataTable } from "@/components/table/DataTable";

function Standings() {
  return (
    <>
      <DataTable columns={columns} data={playerboard} />

      <div className="table-actions mt-auto w-full">
        <span className="text-base leading-5">Players: 10</span>
        <span className="text-base leading-5">Round: 1222395</span>
        <span className="text-base leading-5">Viewers: 1</span>
      </div>
    </>
  );
}

export default Standings;
