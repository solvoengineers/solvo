interface TableRow {
  toolName: string;
  bestFor: string;
  userExperience: string;
  simulationStrength: string;
}

const tableData: TableRow[] = [
  {
    toolName: "Ansys Fluent",
    bestFor: "High-accuracy aerospace and industrial projects",
    userExperience: "Complex but powerful",
    simulationStrength: "Excellent for airflow and heat transfer",
  },
  {
    toolName: "COMSOL Multiphysics",
    bestFor: "Projects with multiple physics involved",
    userExperience: "Easy for academic and research users",
    simulationStrength: "Great for coupled simulations",
  },
  {
    toolName: "SolidWorks Flow Sim",
    bestFor: "Quick simulations inside CAD environment",
    userExperience: "Very beginner-friendly",
    simulationStrength: "Good for mechanical and HVAC",
  },
  {
    toolName: "STAR-CCM Plus",
    bestFor: "Large-scale simulations with automation",
    userExperience: "Modern and customizable",
    simulationStrength: "Strong for automotive and energy sectors",
  },
];

export default function PopularCFDSoftwareToolsTable() {
  return (
    <div className="w-full max-w-[68.5rem] mx-auto">
      <div className="flex flex-col border border-disable overflow-hidden rounded-[1.25rem]">
        {/* Header Row */}
        <div className="flex flex-row border-b border-disable bg-white rounded-t-[1.25rem]">
          <div className="flex-1 px-3 py-0 border-r border-disable flex items-center justify-center h-[3.6875rem]">
            <span className="text-base text-primary-blue font-normal font-poppins text-center">
              Tool Name
            </span>
          </div>
          <div className="flex-1 px-3 py-0 border-r border-disable flex items-center justify-center h-[3.6875rem]">
            <span className="text-base text-primary-blue font-normal font-poppins text-center">
              Best For
            </span>
          </div>
          <div className="flex-1 px-3 py-0 border-r border-disable flex items-center justify-center h-[3.6875rem]">
            <span className="text-base text-primary-blue font-normal font-poppins text-center">
              User Experience
            </span>
          </div>
          <div className="flex-1 px-3 py-0 flex items-center justify-center h-[3.6875rem]">
            <span className="text-base text-primary-blue font-normal font-poppins text-center">
              Simulation Strength
            </span>
          </div>
        </div>

        {/* Data Rows */}
        {tableData.map((row, index) => {
          const isLastRow = index === tableData.length - 1;
          return (
            <div
              key={index}
              className={`flex flex-row bg-white ${
                isLastRow
                  ? "rounded-b-[1.25rem] border-b-0"
                  : "border-b border-disable"
              }`}
            >
              <div className="flex-1 px-2.5 py-0 border-r border-disable flex items-center justify-start h-[3.6875rem]">
                <span className="text-base text-footer-heading font-normal font-poppins">
                  {row.toolName}
                </span>
              </div>
              <div className="flex-1 px-2.5 py-0 border-r border-disable flex items-center justify-start h-[3.6875rem]">
                <span className="text-base text-footer-heading font-normal font-poppins">
                  {row.bestFor}
                </span>
              </div>
              <div className="flex-1 px-2.5 py-0 border-r border-disable flex items-center justify-start h-[3.6875rem]">
                <span className="text-base text-footer-heading font-normal font-poppins">
                  {row.userExperience}
                </span>
              </div>
              <div className="flex-1 px-2.5 py-0 flex items-center justify-start h-[3.6875rem]">
                <span className="text-base text-footer-heading font-normal font-poppins">
                  {row.simulationStrength}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
