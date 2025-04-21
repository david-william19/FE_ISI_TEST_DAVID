import clsx from "clsx"

type Progress = 'ON_PROGRESS' | 'NOT_STARTED' | 'REJECT' | 'DONE'

interface ProgressLabelProps {
    progress: Progress
}

export function ProgressLabel({progress}: ProgressLabelProps) {

    const baseClass = "rounded-lg p-2.5 text-white"
    return (
        <div className={clsx(baseClass, 'bg-green-500')}>
            {}
        </div>
    )
} 