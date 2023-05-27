export default function InformationNugget({
  topLine,
  bottomLine,
}: {
  topLine: string;
  bottomLine: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold">{topLine}</span>
      <span>{bottomLine}</span>
    </div>
  );
}
