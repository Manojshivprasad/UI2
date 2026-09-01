import { Landmark, Wallet, ArrowLeftRight, Banknote, CreditCard } from "lucide-react";
import { VisualFrame } from "./VisualFrame";
import { NodeChip } from "./NodeChip";
import { FlowLine } from "./FlowLine";

const modules = [
  { icon: Wallet, label: "Accounts" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: Banknote, label: "Loans" },
  { icon: CreditCard, label: "Payments" },
];

export function CoreBankingVisual() {
  return (
    <VisualFrame>
      <div className="flex w-full flex-col items-center gap-2">
        <NodeChip icon={Landmark} label="Core Banking" filled />
        <FlowLine orientation="vertical" duration={1.6} className="h-6 w-px flex-none" />
        <div className="flex w-full items-center">
          {modules.map((m, i) => (
            <div
              key={m.label}
              className="flex items-center"
              style={{ flex: i < modules.length - 1 ? "1 1 0%" : "0 0 auto" }}
            >
              <NodeChip icon={m.icon} label={m.label} />
              {i < modules.length - 1 && (
                <FlowLine duration={2.2} dotCount={1} />
              )}
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
