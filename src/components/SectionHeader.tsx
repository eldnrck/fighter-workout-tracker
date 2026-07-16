import type { SectionHeaderProps } from '../types/fighter-training-tracker.interface'

const SectionHeader = ({title}: SectionHeaderProps) =>{
    return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-zinc-300" />
      <h2 className="text-lg font-semibold text-zinc-700">{title}</h2>
      <div className="h-px flex-1 bg-zinc-300" />
    </div>
  );
}

export default SectionHeader;